const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

// const secret = 'mysecretssshhhhhhh';
const secret = process.env.JWT_SECRET || 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { userId  } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = { _id: userId };
    } catch (error) {
      console.log('Invalid token', error.message);
      throw new GraphQLError('Invalid or expired token', {
        extensions: {
          code: 'UNAUTHENTICATED',
        },
      });
    }

    return req;
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

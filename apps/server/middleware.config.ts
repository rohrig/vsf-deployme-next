import dotenv from 'dotenv';
dotenv.config();

const config = {
  integrations: {
    boilerplate: {
      location: 'vsf-deployme-api-client/server',
      configuration: {},
    },
  },
};

export default config;

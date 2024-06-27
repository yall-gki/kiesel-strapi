module.exports = () => ({
  connection: {
    client: 'postgres',
    connection: {
      host: process.env.DATABASE_HOST || '127.0.0.1',
      port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : 5432,
      database: process.env.DATABASE_NAME || 'strapi',
      user: process.env.DATABASE_USERNAME || 'strapi',
      password: process.env.DATABASE_PASSWORD || 'strapi',
      schema: process.env.DATABASE_SCHEMA || 'public', // Not required
      ssl: {
        rejectUnauthorized: process.env.DATABASE_SSL_SELF === 'true', // For self-signed certificates
      },
    },
    debug: false,
  },
});

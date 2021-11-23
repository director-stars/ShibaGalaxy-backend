module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron: {
    enabled: true
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '54ab6a2bce77f82ff2590af36224ac35'),
    },
  },
});

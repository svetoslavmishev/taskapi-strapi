module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '19fc703f27aa81424d94050a0e5e56f3'),
  },
});

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ba62136a60d28ec490f9f0778f59c899'),
  },
});

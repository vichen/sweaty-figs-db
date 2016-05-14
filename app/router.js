module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const router = new Nodal.Router();

  /* Middleware */
  /* executed *before* Controller-specific middleware */

  const CORSMiddleware = Nodal.require('middleware/cors_middleware.js');
  // const CORSAuthorizationMiddleware = Nodal.require('middleware/cors_authorization_middleware.js');
  // const ForceWWWMiddleware = Nodal.require('middleware/force_www_middleware.js');
  // const ForceHTTPSMiddleware = Nodal.require('middleware/force_https_middleware.js');

  router.middleware.use(CORSMiddleware);
  // router.middleware.use(CORSAuthorizationMiddleware);
  // router.middleware.use(ForceWWWMiddleware);
  // router.middleware.use(ForceHTTPSMiddleware);

  /* Renderware */
  /* executed *after* Controller-specific renderware */

  const GzipRenderware = Nodal.require('renderware/gzip_renderware.js')

  router.renderware.use(GzipRenderware);

  /* Routes */

  const IndexController = Nodal.require('app/controllers/index_controller.js');

  /* generator: begin imports */

  const V1UsersController = Nodal.require('app/controllers/v1/users_controller.js');
  const V1PlansController = Nodal.require('app/controllers/v1/plans_controller.js');
  const V1ActivitiesController = Nodal.require('app/controllers/v1/activities_controller.js');
  const V1AccessTokensController = Nodal.require('app/controllers/v1/access_tokens_controller.js');
  const V1CommentsController = Nodal.require('app/controllers/v1/comments_controller.js');

  /* generator: end imports */

  router.route('/').use(IndexController);

  /* generator: begin routes */

  router.route('/v1/users/{id}').use(V1UsersController);
  router.route('/v1/plans/{id}').use(V1PlansController);
  router.route('/v1/activities/{id}').use(V1ActivitiesController);
  router.route('/v1/access_tokens/{id}').use(V1AccessTokensController);
  router.route('/v1/comments/{id}').use(V1CommentsController);

  /* generator: end routes */

  return router;

})();

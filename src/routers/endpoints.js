/**
 * @summary
 * This modules represents the endpoints construct for admin related API request.
 * All middlewares required for each endpoint methods are resgistered here
 * @author Whitson Dzimah <workwithwhitson@gmail.com>
 */

module.exports.name = 'endpoints'
module.exports.dependencies = [
  'ActivityController',
  'MiscValidations',
  'Cache',
  'Uploader',
  'access',
  'miscHelper'
]
module.exports.factory = (
  ActivityController,
  MiscValidations,
  Cache,
  uploader,
  hasAccess,
  helper
) => {
  /**
   * @param { string } route defination
   * @param { Array<'post' || 'get'|| 'patch'|| 'put' || 'delete' >} methods allowed on a route
   * @param { bool } guard toggle for authentication
   * @param { { post: Array<Function>, get: Array<Function>, patch: Array<Function>, put: Array<Function>, delete: Array<Function> } } middlewares request handlers
   */

  return [
    // #endregion
    {
      route: 'activities',
      methods: ['post', 'get'],
      guard: false,
      middlewares: {
        post: [ActivityController.insert],
        get: [ActivityController.get]
      }
    }
  ]
}

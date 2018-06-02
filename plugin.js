// Ignite CLI plugin for BowserReactNativeNavigation
// ----------------------------------------------------------------------------

const NPM_MODULE_NAME = 'react-native-navigation'
const NPM_MODULE_VERSION = '2.0.2314'

// const PLUGIN_PATH = __dirname
// const APP_PATH = process.cwd()
const EXAMPLE_FILE = 'BowserReactNativeNavigationExample.js.ejs'

const add = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // install an NPM module and link it
  await ignite.addModule(NPM_MODULE_NAME, {  version: NPM_MODULE_VERSION })

  await ignite.addPluginComponentExample(EXAMPLE_FILE, { title: 'BowserReactNativeNavigation Example' })

  // Example of copying templates/BowserReactNativeNavigation to App/BowserReactNativeNavigation
  // if (!filesystem.exists(`${APP_PATH}/App/BowserReactNativeNavigation`)) {
  //   filesystem.copy(`${PLUGIN_PATH}/templates/BowserReactNativeNavigation`, `${APP_PATH}/App/BowserReactNativeNavigation`)
  // }

  // Example of patching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   insert: `import '../BowserReactNativeNavigation/BowserReactNativeNavigation'\n`,
  //   before: `export default {`
  // })
}

/**
 * Remove yourself from the project.
 */
const remove = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // remove the npm module and unlink it
  await ignite.removeModule(NPM_MODULE_NAME)

  await ignite.removePluginComponentExample(EXAMPLE_FILE)

  // Example of removing App/BowserReactNativeNavigation folder
  // const removeBowserReactNativeNavigation = await context.prompt.confirm(
  //   'Do you want to remove App/BowserReactNativeNavigation?'
  // )
  // if (removeBowserReactNativeNavigation) { filesystem.remove(`${APP_PATH}/App/BowserReactNativeNavigation`) }

  // Example of unpatching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   delete: `import '../BowserReactNativeNavigation/BowserReactNativeNavigation'\n`
  // )
}

// Required in all Ignite CLI plugins
module.exports = { add, remove }


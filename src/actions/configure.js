const fs = require('fs')
const cli = require('inquirer')

const { params } = require('../choices')

const sampleConfig = {
  file: "path/of/remote/file.ext",
  self: "githubUsername",
  token: "accessToken",
  target: "targetUserOrg",
  branch: "targetBranch",
  content: "path/to/local/file.ext",
  message: "commitMessage"
}

module.exports = () => {

  // Write the sample config.json file first
  fs.writeFile('config.json', JSON.stringify(sampleConfig, null, '  '), error => {
    if (error) throw error

    // Notify user, and allow manual edit interrupt
    console.log(
      [
        '',
        'Sample config.json has been created.',
        'You may quit this process to manually edit it',
        'Or, proceed interactively to update its values...',
        ''
      ].join('\n  ')
    )

    // Next up, proceed with interactive configuration
    cli.prompt(params).then((config) => {
      // If successful, overwrite the config.json with new values
      fs.writeFile('config.json', JSON.stringify(config, null, '  '), error => {
        if (error) throw error
        console.log('\n  Configuration file has been updated.\n')

        // @TODO: offer to move to capture stage after this
      })
    })
  })
}

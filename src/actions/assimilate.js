const get = require('fs').readFileSync
const put = require('axios').put

// @TODO: add a check whether a config file exists
// Provide only `config` option in main CLI if not
// Verify existing config params before if it does

// Parse the config file, all params are required
const config = require([process.cwd(), 'config.json'].join('/'))
// Fetch the list of repos to be assimilated
const drones = require([process.cwd(), 'repolist.json'].join('/'))
// Using basic auth, analogous to `curl -u user:pass`
const auth = {
  username: config.self,
  password: config.token
}
// Prepare the target
const link = {
  base: 'https://api.github.com/repos',
  user: config.target,
  file: `contents/${config.file}`
}
// Prepare the nanoprobes
const buffer = get(config.content)
// Prepare the payload
const data = {
  message: config.message,
  branch: config.branch,
  content: buffer.toString('base64')
  // @TODO: add SHA key to update files in repo
}

module.exports = () => {
  // Iterate over the list of repos to commit to
  for (let drone of drones) {
    // Lock the target
    let url = [link.base, link.user, drone, link.file].join('/')
    // Inject nanoprobes
    put(url, data, { auth }).then(response => {
      // Verify assimilation success
      console.log(response.data.content._links.html)
    }).catch(console.log) // Failure reports
  }
}

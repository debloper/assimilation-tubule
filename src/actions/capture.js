const fs = require('fs')
const go = require('axios')

// @TODO: add a check whether a config file exists
// Provide only `config` option in main CLI if not
// Confirm overwriting existing config, if it does

// We need some information from the config file
const config = require([process.cwd(), 'config.json'].join('/'))
// Using basic auth, analogous to `curl -u user:pass`
const auth = {
  username: config.self,
  password: config.token
}

// Declaring stuff with elevated scope
let link = `https://api.github.com/orgs/${config.target}/repos`
let cargo = []

// Need to use recursion because of pagination
// Currently item count per page is hard coded to 30
const transport = (count = 1) => {
  // Prepare a link with paging parameter
  let url = `${link}?page=${count}`

  // Make the API request
  return go.get(url, { auth }).then(res => {
    // We only need the repo names
    let repos = res.data.map(item => item.name)

    // Merge incoming data chunks with main container
    cargo = [...cargo, ...repos]
    console.log(cargo)

    // If latest page has max items, expect another page.
    // More comprehensive (and absurd) way to do this
    // would be to parse `link` from response header.
    if (repos && repos.length === 30) {
      // RECURSION!!!
      return transport(++count)
    }
    // If lastest page had <30 items, end recursion
    return cargo
  }).catch(() => cargo) // What if total results were 30*n?
}

module.exports = () => {
  return transport().then(data => {
    let repolist = JSON.stringify(data, null, '  ')
    // Write out the JSON for next step
    fs.writeFile('repolist.json', repolist, (err) => {
      if (err) throw err
      console.log('\n  The repolist.json has been created.\n')
    })
    // @TODO: offer to move to assimilate stage after this
  })
}

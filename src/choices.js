module.exports = {
  intent: [{
    type: 'list',
    name: 'action',
    message: 'How do you want to proceed?',
    choices: ['configure', 'capture', 'assimilate']
    // The choices' values are bound to ./actions/*.js
    // Their routing is handled by ./actions/index.js
  }],
  params: [
    {
      type: 'input',
      name: 'file',
      message: 'File path/name in the repo:'
    },
    {
      type: 'input',
      name: 'self',
      message: 'GitHub username of the author:'
    },
    {
      type: 'input',
      name: 'token',
      message: 'GitHub access token of the author:'
    },
    {
      type: 'input',
      name: 'target',
      message: 'Target user/org to assimilate:'
    },
    {
      type: 'input',
      name: 'branch',
      default: 'master',
      message: 'Target remote branch to commit to:'
    },
    {
      type: 'input',
      name: 'content',
      message: 'Local file name to be committed:'
    },
    {
      type: 'input',
      name: 'message',
      message: 'The commit message:'
    }
  ]
}

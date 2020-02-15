// Routing same action as per the intent
module.exports = (intent) => {
  require(`./${intent.action}`)()
}

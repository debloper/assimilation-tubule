# Assimilation Tubule
**Resistance is futile. You must comply.**

## Usage
```sh
# To run it from scratch
npx assimilation-tubule

# Or, if you already have config.js & repolist.json
npx assimilation-tubule --inject

# @TODO: enable passing config params as env vars
```

The `config.js` file should look like this:
```js
export default {
  file: "path/to/local/file.ext",
  self: "githubUsername",
  token: "accessToken",
  target: "targetUserOrg",
  branch: "targetBranch",
  message: "commitMessage"
}
```

And the `repolist.json` should look like this:
```json
[
  "first-repo",
  "second-repo",
  "..."
]
```

## The 'Origin'
I needed to send 40+ identical pull requests to certain GitHub repos. It'd have taken me a minute each to compose and raise the pull requests to each of the repo manually.

So, naturally, I did what any self-respecting software engineer would do in that position. **I automated it.**

It took me about ~3hrs in total (most of which was used in researching a suitable name and filling up the thematic aesthetics - as you can imagine). So if I get to use this 4+ times, the time investment pays for itself.

## The 'Technology'
If you're skeptical of using the CLI and would rather prefer to look under the hood for the inner workings (to build a suitable tool to better fit your needs), I don't blame you. I'd have done just the same.

So, here're the nanaoprobes: https://gist.github.com/debloper/bf0befeda9f7bd4c118d1afa19ba43d5

***Assimilate away!***

# Assimilation Tubule
**Resistance is futile. You must comply.**

[![](https://img.shields.io/github/v/release/debloper/assimilation-tubule?include_prereleases&logo=git)](https://github.com/debloper/assimilation-tubule/releases)
[![](https://img.shields.io/npm/v/@debloper/assimilation-tubule?label=npm%20registry&logo=npm)](https://www.npmjs.com/package/@debloper/assimilation-tubule)
[![](https://img.shields.io/npm/v/@debloper/assimilation-tubule?label=GitHub%20registry&registry_uri=https%3A%2F%2Fnpm.pkg.github.com&logo=github)](https://github.com/debloper/assimilation-tubule/packages)

![](https://img.shields.io/david/debloper/assimilation-tubule?logo=javascript)
![](https://github.com/debloper/assimilation-tubule/workflows/Publish%20Node.js%20Packages/badge.svg)

## Usage Instructions
```sh
# You may (globally) install the npm module:
npm install -g @debloper/assimilation-tubule

# or you can execute it with npx:
npx @debloper/assimilation-tubule

# You'll be presented with an interactive CLI
> configure       # generate base config file
> capture         # generate the list of repo
> assimilate      # send commits to repo list
# Select your action & press enter to proceed

# Steps are sequential, but mutually detached
# You can manually intervene to update states

# @TODO: enable passing config param from env
```

## The 'Origin'
I needed to send 40+ identical pull requests to certain GitHub repos. It'd have taken me a couple of minutes each to compose and raise the pull requests to each of the repo manually.

So, naturally, I did what any self-respecting software engineer would do in that position. **I automated it.**

It took me about ~5hrs in total (most of which was used in researching a suitable names, creating shield/badges and filling up the thematic aesthetics - as you can imagine). So if I get to use this 3+ times, the time investment pays for itself.

## The 'Technology'
If you're skeptical of using the CLI and would rather prefer to look under the hood for the inner workings (to build a suitable tool to better fit your needs), I don't blame you. I'd have done just the same.

So, here're the nanaoprobes: https://gist.github.com/debloper/bf0befeda9f7bd4c118d1afa19ba43d5

***Assimilate away!***

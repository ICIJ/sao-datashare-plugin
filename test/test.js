const path = require('path')
const { SAO } = require('sao')

function createSAO () {
  return new SAO({
    generator: path.resolve(),
    // make SAO run in mock mode
    // @see https://saojs.org/#testing-prompts
    mock: true,
    // Answers for the prompt (do not use default values)
    answers: {
      name: 'datashare-plugin-sample-for-test'
    }
  })
}

test('it uses default value for the prompt', async () => {
  const sao = createSAO()
  await sao.run()

  expect(sao.answers).toEqual(
    expect.objectContaining({
      name: 'datashare-plugin-sample-for-test',
      description: 'an amazing plugin for Datashare'
    })
  )
})

test('it get the latest version of Datashare', async () => {
  const sao = createSAO()
  await sao.run()
  expect(sao.answers.datashare_version).toMatch(/\d+\.\d+\.\d+/)
})

test('it scaffolds the plugin\'s files', async () => {
  const sao = createSAO()
  await sao.run()

  expect(await sao.getOutputFiles()).toEqual(
    expect.arrayContaining([
      ".gitignore",
      "README.md",
      "circle.yml",
      "main.js",
      "nightwatch.conf.js",
      "package.json",
      "tests/e2e/default.js",
      "yarn.lock"
    ])
  )
})

test('it builds the plugin\'s template file with the right value', async () => {
  const sao = createSAO()
  await sao.run()

  expect(await sao.readOutputFile('main.js')).toMatch('This alert was created by `datashare-plugin-sample-for-test` plugin.')
  const packageJson = JSON.parse(await sao.readOutputFile('package.json'))
  expect(packageJson.name).toEqual('datashare-plugin-sample-for-test')
  expect(packageJson.description).toEqual('an amazing plugin for Datashare')
})

test('it initializes a git repository', async () => {
  const sao = createSAO()
  await sao.run()
  expect(sao.hasOutputFile('.git/config')).toBeTruthy()
})

test('it installs `jest` and `nightwatch` binaries', async () => {
  const sao = createSAO()
  await sao.run()
  expect(sao.hasOutputFile('node_modules/.bin/jest')).toBeTruthy()
  expect(sao.hasOutputFile('node_modules/.bin/nightwatch')).toBeTruthy()
})

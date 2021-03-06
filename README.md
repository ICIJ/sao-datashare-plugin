# sao-datashare-plugin

[![Circle CI](https://circleci.com/gh/ICIJ/sao-datashare-plugin.png)](https://circleci.com/gh/ICIJ/sao-datashare-plugin)

> This [SAO](https://github.com/saojs/sao) generator will scaffold a Datashare plugin.

## Usage

All you need is Node/NPM on your system.

After running the generator, your project will contain:

* a valid `package.json` including name, description, scripts and correct dependencies ;
* a `tests/e2e` directory with the a boilerplate for your E2E tests ;
* a `nightwatch.js` file to use E2E tests with Firefox in headless mode.

### From NPM

This will use NPM package to scaffold a plugin inside a new directory:

```bash
npx sao npm:@icij/sao-datashare-plugin MY-PLUGIN-DIR
```

### From git

This will use this repository to scaffold a plugin inside a new directory:

```bash
npx sao icij/sao-datashare-plugin MY-PLUGIN-DIR
```

## License

MIT &copy; [ICIJ](https://icij.org)

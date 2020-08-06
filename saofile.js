const axios = require('axios')
const GITHUB_LATEST_URL = 'https://api.github.com/repos/ICIJ/datashare-installer/releases/latest'

module.exports = {
  async prompts () {
    return [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of this Datashare Plugin',
        default: 'datashare-plugin-sample'
      },
      {
        type: 'input',
        name: 'description',
        message: 'How would you describe this Datashare Plugin',
        default: 'an amazing plugin for Datashare'
      },
      {
        type: 'input',
        name: 'datashare_version',
        message: 'Which version of Datashare should be used to perform test',
        default: (await axios.get(GITHUB_LATEST_URL)).data.tag_name
      }
    ]
  },
  actions: [
    {
      type: 'add',
      files: '**',
    },
  ],
  async completed() {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  }
}

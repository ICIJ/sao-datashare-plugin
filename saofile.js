module.exports = {
  prompts: [
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
  ],
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

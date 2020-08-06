document.addEventListener('datashare:ready', async ({ detail }) => {
  detail.core.registerHook({
    target: 'landing.form:before',
    definition: '<div class="alert alert-info landing__plugin">This alert was created by `<%= name %>` plugin.</div>'
  })
}, false)

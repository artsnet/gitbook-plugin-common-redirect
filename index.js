module.exports = {
  hooks: {
    'page': function(page) {
      var conf = this.config.get('pluginsConfig.common-redirect');
      page.content = '<script>if(location.origin === "' + conf.target + '")location.href="' + conf.redirect + '"</script>' + page.content;
      return page;
    }
  }
};

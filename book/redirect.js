require(['gitbook'], function(gitbook) {

  gitbook.events.bind('page.change', function() {
    conf = gitbook.state.config.pluginsConfig['common-redirect'];

    if (location.origin === conf.target) {
      location.href = conf.redirect;
    }

});

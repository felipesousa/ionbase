(function() {
  'use strict';

  angular
    .module('app.about')
    .controller('AboutController', AboutController);

  /* @ngInject */
  function AboutController(AboutService) {
    const vm = this;

    vm.name = "about";

    AboutService.foo();
  }

})();

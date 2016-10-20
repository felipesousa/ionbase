(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  /* @ngInject */
  function HomeController(HomeService) {
    const vm = this;

    vm.name = "home";

    HomeService.foo();
  }

})();

(function() {
  'use strict';

  angular
    .module('app.home')
    .service('HomeService', HomeService);

  /* @ngInject */
  function HomeService() {
    const vm = this;

    vm.foo = foo;

    function foo() {
      console.log('home service!');
    }
  }

})();

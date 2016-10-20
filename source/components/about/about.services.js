(function() {
  'use strict';

  angular
    .module('app.about')
    .service('AboutService', AboutService);

  /* @ngInject */
  function AboutService($http) {
    const vm = this;

    vm.foo = foo;

    function foo() {
      console.log('about service!');
    }
  }

})();

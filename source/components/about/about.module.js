(function() {
  'use strict';

  angular
    .module('app.about', [])
    .run(Run)
    .config(Config);

    /* @ngInject */
    function Run () {
    }

    /* @ngInject */
    function Config ($stateProvider) {
      $stateProvider
        .state('app.about', {
          url: '/about',
          views: {
            'menuContent': {
              templateUrl: 'about.view.html',
              controller: 'AboutController',
              controllerAs: 'vm'
            }
          }
        })
    }

})();

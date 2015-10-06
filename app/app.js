var app = angular.module("chefConnectApp", ["ngRoute", "firebase"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      })
      .when('/register', {
        templateUrl: 'partials/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/userprofile', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/browse', {
        templateUrl: 'partials/browse.html',
        controller: 'BrowseCtrl'
      })
      .when('/createrecipe', {
        templateUrl: 'partials/createrecipe.html',
        controller: 'CreateRecCtrl'
      })
      .when('/createtechnique',  {
        templateUrl: 'partials/createtechnique.html',
        controller: 'CreateTechCtrl'
      })
      .when('/readrepo', {
        templateUrl: 'partials/readrepo.html',
        controller: 'ReadRepoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
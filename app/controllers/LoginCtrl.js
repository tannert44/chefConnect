app.controller( 'LoginCtrl', [
  '$scope',
  '$firebaseArray',
  '$location',
  function($scope, $firebaseArray, $location){

    var ref = new Firebase("https://xhub.firebaseio.com");

    $scope.emailInputLog = "";
    $scope.passInputLog = "";

    $scope.logUser = function(){
      console.log("click fired");
      ref.authWithPassword({
        email    : $scope.emailInputLog,
        password : $scope.passInputLog
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          $location.path("/userprofile");
          $scope.$apply();
        }
      });
    };

  }

]);
app.controller( 'RegisterCtrl', [
  '$scope',
  '$firebaseObject',
  '$location',
  function($scope, $firebaseObject, $location){

    var ref = new Firebase("https://xhub.firebaseio.com");
    
    $scope.emailInputReg= "";
    $scope.passInputReg = "";

    var logUser = function(){
      console.log("click fired");
      ref.authWithPassword({
        email    : $scope.emailInputReg,
        password : $scope.passInputReg
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

    $scope.createUser = function(userObj){
        ref.createUser( 
        {
          email: $scope.emailInputReg,
          password: $scope.passInputReg
        }, 
          function(error, userData) {
            if (error) {
              console.log("Error creating user:", error);
            } else {
              console.log("Successfully created user account with uid:", userData.uid);
              logUser();
            }
          });
    };
  }

]);
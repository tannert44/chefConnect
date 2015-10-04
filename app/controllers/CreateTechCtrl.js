app.controller( 'CreateTechCtrl', [
  '$scope',
  '$firebaseArray',
  function($scope, $firebaseArray){
    var ref = new Firebase("https://xhub.firebaseio.com/");

    var authProvider = ref.getAuth().uid;

    var techRef = new Firebase("https://xhub.firebaseio.com/techniques/" + authProvider);

    console.log("AUTHPROVIDER", authProvider);

    $scope.arr = $firebaseArray(techRef);

    $scope.user = {
      techniqueName: '',
      techniqueDifficulty: '',
      techniqueInstructions : ''
    };

    $scope.createTech = function(user){
      console.log("click fired");
      $scope.arr.$add(angular.copy(user));
      console.log("techRefArr", $scope.arr);
    };
    
  }

]);
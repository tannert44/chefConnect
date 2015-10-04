app.controller( 'CreateTechCtrl', [
  '$scope',
  '$firebaseObject',
  function($scope, $firebaseObject){
    var ref = new Firebase("https://xhub.firebaseio.com/");

    var authProvider = ref.getAuth().uid;

    var userRef = new Firebase("https://xhub.firebaseio.com/techniques/" + authProvider);

    console.log("AUTHPROVIDER", authProvider);

    $scope.obj = $firebaseObject(userRef);

    $scope.user = {};

    $scope.createTech = function(){

    };
    
  }

]);
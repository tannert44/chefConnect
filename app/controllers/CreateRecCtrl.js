app.controller( 'CreateRecCtrl', [
  '$scope',
  '$firebaseObject',
  '$compile',
  function($scope, $firebaseObject, $compile){
    var ref = new Firebase("https://xhub.firebaseio.com/");

    var authProvider = ref.getAuth().uid;

    var userRef = new Firebase("https://xhub.firebaseio.com/recipes/" + authProvider);

    console.log("AUTHPROVIDER", authProvider);

    $scope.obj = $firebaseObject(userRef);

    $scope.recipeName = "";
    $scope.cuisineName = "";
    $scope.prepTime = "";
    $scope.cookTime = "";
    $scope.ingredients = "";
    $scope.utensils = "";
  }

]);
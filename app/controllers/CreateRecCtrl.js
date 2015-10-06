app.controller( 'CreateRecCtrl', [
  '$scope',
  '$firebaseArray',
  '$compile',
  function($scope, $firebaseArray, $compile){
    var ref = new Firebase("https://xhub.firebaseio.com/");

    var authProvider = ref.getAuth().uid;

    var recRef = new Firebase("https://xhub.firebaseio.com/recipes/" + authProvider);

    console.log("AUTHPROVIDER", authProvider);

    $scope.arr = $firebaseArray(recRef);

    $scope.user ={
      recipeName: "",
      cuisineName: "",
      prepTime: "",
      cookTime: "",
      recipeIngredients: "",
      cookingInstructions: "",
      utensils: "",
      availability: "true"
    };

    $scope.createRec = function(user){
      console.log("click fired");
      $scope.arr.$add(angular.copy(user));
      console.log("techRefArr", $scope.arr);
    };

  }

]);
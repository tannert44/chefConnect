app.controller( 'ProfileCtrl', [
  '$scope',
  '$firebaseObject',
  '$firebaseArray',
  function($scope, $firebaseObject, $firebaseArray){

    var ref = new Firebase("https://xhub.firebaseio.com/");

    var authProvider = ref.getAuth().uid;

    var userRef = new Firebase("https://xhub.firebaseio.com/profiles/" + authProvider);

    var techRef = new Firebase("https://xhub.firebaseio.com/techniques/" + authProvider);

    var recRef = new Firebase("https://xhub.firebaseio.com/recipes/" + authProvider);

    console.log("AUTHPROVIDER", authProvider);

    $scope.obj = $firebaseObject(userRef);

    $scope.techArr = $firebaseArray(techRef);

    var recArr = $firebaseArray(recRef);

    $scope.recPubArr = [];

    $scope.recPriArr = [];

    console.log("RECIPESARRAY",$scope.recPubArr);
    
    $scope.userName = "Click To Enter Your Name.";

    $scope.userNameInput = false;

    $scope.aboutYou = "Click to enter some information about yourself.";

    $scope.aboutYouInput = false;

    $scope.business = "Click to enter some information about your job or buisnness.";

    $scope.businessInput = false;

    console.log(recArr);
    recArr.$loaded()
    .then(function(){
        angular.forEach(recArr, function(value, key) {
          if(value.availability === "true"){
            $scope.recPubArr.push(value);
            console.log("RECPUBARR", $scope.recPubArr);
          }else{
            $scope.recPriArr.push(value);
            console.log("RECPUBARR", $scope.recPriArr);
          }
        });
    });


    $scope.changeUserBool =  function(){
      console.log("Yup it works", $scope.userNameInput);

      if($scope.userNameInput){
        $scope.userNameInput = false;
        console.log("Should Be False", $scope.userNameInput);
      }else{
        $scope.userNameInput = true;
        console.log("Should Be True", $scope.userNameInput);
      }

    };

    $scope.userNameChange = function(){
      $scope.obj.userName = $scope.userName;
      $scope.obj.$save();
    };

    $scope.aboutYouChange = function(){
      $scope.obj.aboutYou = $scope.aboutYou;
      $scope.obj.$save();
    };

    $scope.businessChange = function(){
      $scope.obj.business = $scope.business;
      $scope.obj.$save();
    };

    $scope.changeAboutBool =  function(){
      console.log("Yup it works", $scope.userNameInput);

      if($scope.aboutYouInput){
        $scope.aboutYouInput = false;
        console.log("Should Be False1", $scope.userNameInput);
      }else{
        $scope.aboutYouInput = true;
        console.log("Should Be True2", $scope.userNameInput);
      }

    };

    $scope.changeBusinessBool =  function(){
      console.log("Yup it works", $scope.userNameInput);

      if($scope.businessInput){
        $scope.businessInput = false;
        console.log("Should Be False1", $scope.userNameInput);
      }else{
        $scope.businessInput = true;
        console.log("Should Be True2", $scope.userNameInput);
      }

    };
  }

]);
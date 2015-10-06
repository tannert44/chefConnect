app.controller( 'ProfileCtrl', [
  '$scope',
  '$firebaseObject',
  '$firebaseArray',
  function($scope, $firebaseObject, $firebaseArray){

    var ref = new Firebase("https://xhub.firebaseio.com/");

    var authProvider = ref.getAuth().uid;

    $scope.profile_image = ref.getAuth().password.profileImageURL;

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
    
    $scope.userName = "";

    $scope.userNameInput = false;

    $scope.aboutYou = "";

    $scope.aboutYouInput = false;

    $scope.business = "";

    $scope.businessInput = false;

    $scope.chosenRecBool = false;

    $scope.chosenTechBool =false;

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

    $scope.changeRecBool =function($event){

      var clickedRec = $event.currentTarget;
      var clickedRecKey = angular.element(clickedRec).attr('ng-class');
      $scope.chosenRec = recArr.$getRecord(clickedRecKey);

      if($scope.chosenRecBool){
        $scope.chosenRecBool = false;
      }else{
        $scope.chosenRecBool = true;
      }

    };

    $scope.changeTechBool =function($event){

      var clickedTech = $event.currentTarget;
      var clickedTechKey = angular.element(clickedTech).attr('ng-class');
      $scope.chosenTech = $scope.techArr.$getRecord(clickedTechKey);

      if($scope.chosenTechBool){
        $scope.chosenTechBool = false;
      }else{
        $scope.chosenTechBool = true;
      }
    };

  }

]);
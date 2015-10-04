app.controller( 'ProfileCtrl', [
  '$scope',
  '$firebaseObject',
  '$compile',
  function($scope, $firebaseObject, $compile){

    var ref = new Firebase("https://xhub.firebaseio.com/");

    var authProvider = ref.getAuth().uid;

    var userRef = new Firebase("https://xhub.firebaseio.com/profiles/" + authProvider);

    console.log("AUTHPROVIDER", authProvider);

    $scope.obj = $firebaseObject(userRef);

    
    $scope.userName = "Click To Enter Your Name.";

    $scope.userNameInput = false;

    $scope.aboutYou = "Click to enter some information about yourself.";

    $scope.aboutYouInput = false;

    $scope.business = "Click to enter some information about your job or buisnness.";

    $scope.businessInput = false;


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

    $scope.userChange = function(){
      $scope.obj.userName = $scope.userName;
      $scope.obj.aboutYou = $scope.aboutYou;
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
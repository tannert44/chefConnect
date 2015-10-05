app.controller( 'BrowseCtrl', [
  '$scope',
  '$firebaseArray',
  function($scope, $firebaseArray){
    var userRef = new Firebase("https://xhub.firebaseio.com/profiles/");

    var techRef = new Firebase("https://xhub.firebaseio.com/techniques/");

    var recRef = new Firebase("https://xhub.firebaseio.com/recipes/");

    var profileArr = $firebaseArray(userRef);

    var techArr = $firebaseArray(techRef);

    var recArr = $firebaseArray(recRef);

    console.log("PROFILEARR", profileArr);

    console.log("TECHARR", techArr);

    console.log("RECARR", recArr);

  }

]);
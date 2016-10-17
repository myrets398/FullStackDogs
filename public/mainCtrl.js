angular.module("DOG_PROJECT_NODE").controller("mainCtrl",function($scope, mainServ){

  $scope.getDogs = function(){
    mainServ.getDogs()
    .then(function(response){
      $scope.allDogs = response.data;
    });
  };
  $scope.getDogs();

$scope.postNewDog= function(newDog){
  mainServ.postNewDog(newDog)
  .then(function(response1){
    $scope.allDogs=response1.data;
  });
};

$scope.deleteDog= function(id){
  mainServ.deleteDog(id)
  .then(function(response1){
    $scope.allDogs=response1.data;
  });
};

$scope.putDog= function(dog){
  mainServ.putDog(dog)
  .then(function(response1){
    $scope.allDogs=response1.data;
  });
};

})

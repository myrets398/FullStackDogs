angular.module("DOG_PROJECT_NODE").service("mainServ",function($http){
  this.getDogs = function(){
    return $http({
      method: "GET",
      url: "/dogs"
    }).then(function(response){
      return response;
    })
  }
this.postNewDog = function(newDog){
    return $http({
      method: "POST",
      url: "/dogs",
      data: newDog
    }).then(function(response){
      return response;
    })
  };
this.deleteDog = function(id){
    return $http({
      method: "DELETE",
      url: "/dogs/"+id
    }).then(function(response){
      return response;
    })
  };

  this.putDog = function(dog){
    return $http({
      method: "PUT",
      url: "/dogs/" + dog.key,
      data: dog
    }).then(function(response){
      return response;
    })
  };

});

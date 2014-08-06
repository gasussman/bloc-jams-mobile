 //require('./landing');
 //require('./album');
 //require('./collection');
 //require('./profile');
 
 angular.module('BlocJams', []).controller('Landing.controller', ['$scope', function($scope) {
  $scope.title = "Bloc Jams";
  $scope.subText = "Turn the music up!";

  $scope.subTextClicked = function() {
     $scope.subText += '!';
   };

  $scope.albumURLs = [
     '/images/album-placeholders/album-1.jpg',
     '/images/album-placeholders/album-2.jpg',
     '/images/album-placeholders/album-3.jpg',
     '/images/album-placeholders/album-4.jpg',
     '/images/album-placeholders/album-5.jpg',
     '/images/album-placeholders/album-6.jpg',
     '/images/album-placeholders/album-7.jpg',
     '/images/album-placeholders/album-8.jpg',
     '/images/album-placeholders/album-9.jpg',
   ];

   $scope.shuffle = function(albumURLs) { //v1.0
    for(var j, x, i = $scope.albumURLs.length; i; j = Math.floor(Math.random() * i), x = $scope.albumURLs[--i], $scope.albumURLs[i] = $scope.albumURLs[j], $scope.albumURLs[j] = x);
    return $scope.albumURLs;
    };

 }]);
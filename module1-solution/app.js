(function (){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchesString = "";

  $scope.formMessage = function () {
    var numOfLunches = getNumOfLunches($scope.lunchesString);
    if (!numOfLunches){
      $scope.message = "Please enter data first";
      $scope.messageColor = "red";
      $scope.textBoxColor = "text-box-red";
    }
    else {
      if (numOfLunches <= 3){
        $scope.message = "Enjoy!";
        $scope.messageColor = "green";
        $scope.textBoxColor = "text-box-green";
      }
      else {
        $scope.message = "Too much!";
        $scope.messageColor = "green";
        $scope.textBoxColor = "text-box-green";
      }
    }
  };
}

function getNumOfLunches(string) {
  var lunches = string.split(',');
  var lunchesNum = 0;
  var i;
  for (i=0; i<lunches.length; i++){
    if (lunches[i].trim()){
      lunchesNum++;
    }
  }
  return lunchesNum;
}

})();

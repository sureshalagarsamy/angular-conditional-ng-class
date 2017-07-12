angular.module('myApp', []).controller('myCtrl', function($scope) {
	$scope.changeColor = function(color) {
		if(color == 'R') {
			$scope.myCircleColor = 'red';
		}
		else if(color == 'G') {
			$scope.myCircleColor = 'green';
		}
		else if(color == 'B') {
			$scope.myCircleColor = 'blue';
		}
	}
	$scope.myCircleColor = "green";
});
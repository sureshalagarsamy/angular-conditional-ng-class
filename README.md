# AngularJS ngClass conditional


### Method-1

![image](https://user-images.githubusercontent.com/6780840/28112488-d4dc4a5c-6716-11e7-96e1-f62e5a27ecef.png)

#### HTML


```html
<body ng-app="myApp">
	<div ng-controller="myCtrl">
		<div class="color-list">
			<span class="color-name" ng-click="changeColor('R')">red</span>
			<span class="color-name" ng-click="changeColor('G')">green</span>
			<span class="color-name" ng-click="changeColor('B')">blue</span>
		</div>
		<span class="myCircle" ng-class="{'greenColor': myCircleColor == 'green' , 'redColor': myCircleColor == 'red', 'blueColor': myCircleColor == 'blue'}"></span>
	</div>
</body>
```

#### JavaScript

```javascript
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
```

### Method-2

```html
<span class="myCircle" ng-class="{green:'greenColor', red:'redColor', blue:'blueColor'}[myCircleColor]"></span>
```

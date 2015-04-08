angular.module('myapp').controller('MyCtrl', ["$scope",'myfactory', function ($sc,$f) {
	$sc.name = "Gucio";

	// $sc.fac = $f;
	$sc.clear = function () {
		$f.clear($sc,'name');
	};
	// $sc.clear = $f.clear($sc,'name');
}]);

angular.module('myapp').factory('myfactory',function(){
	return {
		clear: function(scope,variable){
			scope[variable] = '';
		}
	};
});

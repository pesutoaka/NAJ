angular.module('myapp', []).controller('TodoCtrl', ['$scope'/*,'dataHolder'*/,function ($scope/*,$dh*/) {
	$scope.elements = [];
	$scope.inputValue = '';

	$scope.addNew = function () {
		if (!$scope.inputValue) {
			return;
		}
		$scope.elements.push({
			value: $scope.inputValue,
			status: true
		});
		$scope.inputValue = '';
	};
    $scope.elemClick = function(e,i){
        e.status = e.status?false:true;
        $scope.selected["task id"] = i;
        $scope.selected["value"] = e.value;
        $scope.selected["status"] = e.status?"active":"inactive";
    };
    $scope.selected={};
    $scope.elemDelete = function(e){
        $scope.elements.splice($scope.elements.indexOf(e),1);
        if($scope.elements.length===0)
            $scope.selected={};
    };
    $scope.searchVisibility=false;
}]);

//angular.module('myapp').factory('dataHolder',function(){
//    var data = [];
//    var prepareData = function(value,status){
//        if(status===undefined) status = true;
//        return {"value":value,"status": status};
//    }
//    return {
//        add: function(index,value,status){
//            data[index]=prepareData(value,status);
//        }
//        ,
//        get:function(index){
//            return data[index];
//        }
//        ,
//        getAll:function(){return data;}
//        ,
//        count: function(){
//            return data.length;
//        }
//        ,
//        remove:function(index){
//            delete data[index];
//        }
//        ,
//        pushData: function(value){
//            data.push(prepareData(value,true));
//        }
//        ,
//        clear: function(scope,value){
//            scope[value] = '';
//        }
//        
//    };
//});
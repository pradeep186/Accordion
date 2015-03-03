'use strict';
/* Controllers */
angular.module('DishListing', ['ui.bootstrap']);

angular.module('DishListing').controller('DishListingCtrl',  function($scope, $http) {
	//Make the call to get the data
	$scope.dishes = new Array();
	
	$http.get('json/item-listing.json').success(function(data) {
		$scope.dishes = data;
		for(var i=0; i<$scope.dishes.length;i++){
			$scope.dishes[i].show = false;
		}
	}).error(function(){
	});
	
	$scope.status = {
		isFirstOpen: true,
		isFirstDisabled: false
	};
});
                                        
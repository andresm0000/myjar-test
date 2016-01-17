'use strict';

/* Controllers */

angular.module('myjar.controllers', [
	'client.controllers'
	]).

	controller('MyjarController',
		['$scope', '$rootScope', 'myjarConfig', '$location', '$http', function($scope, $rootScope, myjarConfig, $location, $http) {

			$scope.imageFolder = myjarConfig.images;
			$scope.partialsFolder = myjarConfig.partials;

			$rootScope.imageFolder = myjarConfig.images;
			$rootScope.partialsFolder = myjarConfig.partials;

			$scope.isMobile = myjarConfig.mobile;
			$scope.client_data = myjarConfig.client_data;

			var pathLastSegment = $location.absUrl().substr($location.absUrl().lastIndexOf('/') + 1);

			if(pathLastSegment == 'application') {
				$location.path('/start');
			}

            $scope.tabs = [{
                title: '1 month',
                url: 'tab1-tpl',
                class: 'tab1'
            }, {
                title: '2 months',
                url: 'tab2-tpl',
                class: 'tab2'
            }, {
                title: '3 months',
                url: 'tab3-tpl',
                class: 'tab3'
            }];

            $scope.currentTab = 'tab1-tpl';
            $scope.showDaySlider = true;
            $scope.productName = '';
            $scope.paymentDate = moment().format('YYYY-MM-DD');

            $scope.onClickTab = function (tab) {
                $scope.currentTab = tab.url;
                $scope.showDaySlider = tab.url == 'tab1-tpl';
                if (tab.url == 'tab2-tpl') {
                    $scope.productName = '2 Months';
                    $scope.paymentDate = moment().add(2, 'months').format('YYYY-MM-DD');
                } else if (tab.url == 'tab3-tpl') {
                    $scope.productName = '3 Months';
                    $scope.paymentDate = moment().add(3, 'months').format('YYYY-MM-DD');
                }
            }

            $scope.isActiveTab = function(tabUrl) {
                return tabUrl == $scope.currentTab;
            }

            $http.get('myjar/product_api.php').success(function(data) {
                for (var i = 0; i < 3; i++) {
                    $scope.tabs[i].title = data[i].product_name + " - " + data[i].interest_per_day + "% per day";
                }
            });
	}]);

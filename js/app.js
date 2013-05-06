var app = angular.module('boilerplate', ['rb.config']);

angular.module('rb.config', []).value('rb.config', {
    navItems: [
        { icon: '', title: 'Dedicated servers', subNavItems: [
            { icon: '', title: 'Windows'},
            { icon: '', title: 'Apple'},
            { icon: '', title: 'Ubuntu'}
        ]},
        { icon: '', title: 'Virtual servers'},
        { icon: '', title: 'Shared hosting'},
        { icon: '', title: 'Domain names'},
    ]
});

app.controller('SiteNavController', ['$scope', 'rb.config', function ($scope, rbConfig) {

    $scope.navItems = rbConfig.navItems || [];

    $scope._activeNavItem = undefined;
    $scope._activeSubNavItem = undefined;

    $scope.toggleNavItem = function(item){
        if($scope.isActiveNavItem(item)){
            return $scope.setActiveNavItem(undefined);
        }
        $scope.setActiveNavItem(item);
    };

    $scope.setActiveNavItem = function(item){
        $scope._activeNavItem = item;
    }

    $scope.isActiveNavItem = function(item){
        return ($scope._activeNavItem === item) ? true : false;
    }

    $scope.setActiveSubNavItem = function(item){
        $scope._activeSubNavItem = item;
    }

    $scope.isActiveSubNavItem = function(item){
        return ($scope._activeSubNavItem === item) ? true : false;
    }

}]);
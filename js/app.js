var app = angular.module('boilerplate', []);

app.controller('FirstController', function($scope) {
    $scope.message = 'Hello world';
});

/**
 * Concatenate filter
 *
 * Usage: {{ input | concatenate:'one':'two' }}
 */
app.filter('concatenate', function(){
    return function(input){

        // Define delimiter
        var delimiter = ' ';

        // Skip index 0 because that is input
        for(var i =1; i < arguments.length; i++){
            input += delimiter + arguments[i];
        }

        return input;
    }
});

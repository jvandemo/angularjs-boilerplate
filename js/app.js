var app = angular.module('boilerplate', []);

app.controller('FirstController', function ($scope) {
    $scope.message = 'Hello world';
});

/**
 * Directive to replace substrings
 *
 * @example
 *
 * <div replace="{ '%name%' : user.name }">Hello %name%</div>
 *
 * This would result in 'Hello name' if user.name had a value 'name' in the current scope.
 *
 * <span replace="{ '%start%' : '1', '%end%', '10' }">From %start% to %end%</span>
 *
 * This would result in 'From 1 to 10'
 */
app.directive('replace', function () {

    return function (scope, iElement, iAttrs) {

        try {

            // Evaluate replacements in scope so expressions can be used
            var replacements = scope.$eval(iAttrs.replace);

            // Handle invalid replacements
            if(!angular.isObject(replacements)){
                return;
            }

            // Get original HTML content
            var html = iElement.html();

            // Perform replacements
            angular.forEach(replacements, function(to, from){
               if(to){
                   html = html.replace(from, to);
               }
            });

            // Replace HTML with new HTML
            iElement.html(html);

        }
        catch (err) {

            // Do nothing if problem occurs
            return;
        }
    }
});
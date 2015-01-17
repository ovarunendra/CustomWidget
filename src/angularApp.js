angular.module('customApp', ['template/calculator-tpl.html'])
    .directive('customCalculator', [function(){
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'template/calculator-tpl.html',
            link: function (scope, element, attrs) {
                scope.formObj = {};
                scope.showResult = false;
                scope.add = function () {
                    if(Number(scope.formObj.first) && Number(scope.formObj.second)){
                        scope.showResult = true;
                        scope.result = Number(scope.formObj.first) + Number(scope.formObj.second);
                    } else {
                        alert("Check numbers!!");
                    }
                };
                scope.subtract = function () {
                    if(Number(scope.formObj.first) && Number(scope.formObj.second)){
                        scope.showResult = true;
                        scope.result = Number(scope.formObj.first) - Number(scope.formObj.second);
                    } else {
                        alert("Check numbers!!");
                    }
                };
                scope.multiply = function () {
                    if(Number(scope.formObj.first) && Number(scope.formObj.second)){
                        scope.showResult = true;
                        scope.result = Number(scope.formObj.first) * Number(scope.formObj.second);
                    } else {
                        alert("Check numbers!!");
                    }
                };
                scope.divide = function () {
                    if(Number(scope.formObj.first) && Number(scope.formObj.second)){
                        scope.showResult = true;
                        scope.result = Number(scope.formObj.first) / Number(scope.formObj.second);
                    } else {
                        alert("Check numbers!!");
                    }
                };
                scope.clear = function () {
                    scope.formObj.first = '';
                    scope.formObj.second = '';
                    scope.result = '';
                    scope.showResult = false;
                };
            }
        }
    }]);
angular.module("template/calculator-tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("template/calculator-tpl.html",
        '<div class="container">\
                            <div class="row">\
                                <span> Calculator </span>\
                                <form name="calculator">\
                                    <input type="text" name="first" ng-model="formObj.first" placeholder="First Number" ng-pattern="/[0-9]/">\
                                        <span ng-show="calculator.first.$error.pattern">Please enter a valid number</span><br>\
                                    <input type="text" name="second" ng-model="formObj.second" placeholder="Second Number" ng-pattern="/[0-9]/">\
                                        <span ng-show="calculator.second.$error.pattern">Please enter a valid number</span><br>\
                                    <input type="button" value="+" ng-click="add()">\
                                    <input type="button" value="-" ng-click="subtract()">\
                                    <input type="button" value="*" ng-click="multiply()">\
                                    <input type="button" value="/" ng-click="divide()">\
                                    <input type="button" value="clear" ng-click="clear()">\
                                </form>\
                            </div>\
                            <div class="row" ng-if="showResult">\
                                    Result: <span ng-bind="result"></span>\
                            </div>\
                         </div>');
}]);
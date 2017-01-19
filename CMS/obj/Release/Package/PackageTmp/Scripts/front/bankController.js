frontApp.controller("bankController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $scope.banks = [];

    $http.get('/API/BankAPI/')
        .success(function (data) {
            $scope.banks = data;
        })
}]);
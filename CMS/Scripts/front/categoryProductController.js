frontApp.controller("categoryProductController", ['$scope', '$http', '$window', 'CategoryProduct', function ($scope, $http, $window, CategoryProduct) {
    $scope.categoryProducts = [];
    $scope.products = [];
    $scope.idCategoryProduct = angular.element('#idCategoryProduct').val();
    $scope.product = {};
    $scope.id;
    $scope.spNoiBats = [];

    //Lấy tất cả danh mục
    //$http.get('/API/CategoryProductsAPI/')
    //    .success(function (data) {
    //        var categoryProducts = CategoryProduct.getallCategoryProduct(data);
    //        angular.forEach(categoryProducts, function (value, key) {
    //            if (value.idCategoryParent == '1') {
    //                $scope.categoryProducts.push(value);
    //            }
    //        });
    //    })

    $http.get('/API/CategoryProductsAPI/')
        .success(function (data) {
            angular.forEach(CategoryProduct.getallCategory(data), function (value, key) {
                if (value.idCategoryParent == 1) {
                    $scope.categoryProducts.push(value);
                }
            });
        })

    


    //Xem sản phẩm
    $scope.show = function (id) {
        $scope.id = id;
        $http.get('/API/ProductsAPI/' + id)
       .success(function (data) {
           $scope.product = data;
       });
    }

    //Sản phẩm trong danh mục con
    $http.get('/API/ProductsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.idCategoryProduct == $scope.idCategoryProduct) {
                    $scope.products.push(value);
                }

                //Sản phẩm nổi bật
                if (value.feature == '1') {
                    $scope.spNoiBats.push(value);
                }
            });
        });
}]);
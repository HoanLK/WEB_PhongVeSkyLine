frontApp.controller("categoryPostController", ['$scope', '$http', '$window', 'CategoryPost', function ($scope, $http, $window, CategoryPost) {
    $scope.categoryPosts = [];
    $scope.posts = [];
    $scope.idCategory = angular.element('#idCategory').val();
    $scope.tinTucs = [];
    $scope.cauHoiThuongGaps = [];
    $scope.khuyenMais = [];
    $scope.veNoiDias = [];
    $scope.veQuocTes = [];
    $scope.veTheoHangs = [];
    $scope.veTheoLoais = [];

    //Lấy tất cả danh mục
    $http.get('/API/CategoriesAPI/')
        .success(function (data) {
            var categories = CategoryPost.getallCategory(data);
            angular.forEach(categories, function (value, key) {
                if (value.idCategoryParent == '1') {
                    $scope.categoryPosts.push(value);
                }
            });
        })

    $http.get('/API/PostsAPI?att=idCategory&&value=' + $scope.idCategory)
    .success(function (posts) {
        $scope.posts = posts;
    });

    $http.get('/API/PostsAPI?att=idCategory&&value=' + 2)
    .success(function (posts) {
        $scope.tinTucs = posts;
    });

    $http.get('/API/PostsAPI?att=idCategory&&value=' + 3)
    .success(function (posts) {
        $scope.cauHoiThuongGaps = posts;
    });

    $http.get('/API/PostsAPI?att=idCategory&&value=' + 4)
    .success(function (posts) {
        $scope.khuyenMais = posts;
    });

    $http.get('/API/PostsAPI?att=idCategory&&value=' + 6)
    .success(function (posts) {
        $scope.veNoiDias = posts;
    });

    $http.get('/API/PostsAPI?att=idCategory&&value=' + 5)
    .success(function (posts) {
        $scope.veQuocTes = posts;
    });

    $http.get('/API/PostsAPI?att=idCategory&&value=' + 7)
    .success(function (posts) {
        $scope.veTheoHangs = posts;
    });

    $http.get('/API/PostsAPI?att=idCategory&&value=' + 8)
    .success(function (posts) {
        $scope.veTheoLoais = posts;
    });



    //bài viết trong danh mục con
    $http.get('/API/PostsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                //Bài viết lên top
                if (value.featured == 1 && value.idCategory == 2) {
                    $scope.baiVietTops.push(value);
                }
            });
        });
}]);
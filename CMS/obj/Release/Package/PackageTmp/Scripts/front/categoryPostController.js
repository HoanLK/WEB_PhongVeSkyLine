frontApp.controller("categoryPostController", ['$scope', '$http', '$window', 'CategoryPost', function ($scope, $http, $window, CategoryPost) {
    $scope.categoryPosts = [];
    $scope.posts = [];
    $scope.idCategory = angular.element('#idCategory').val();
    $scope.khuyenMais = [];
    $scope.cauHoiThuongGaps = [];
    $scope.tinTucs = [];

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

    //bài viết trong danh mục con
    $http.get('/API/PostsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.idCategory == $scope.idCategory) {
                    $scope.posts.push(value);
                }

                //Bài viết lên top
                if (value.featured == 1 && value.idCategory == 2) {
                    $scope.baiVietTops.push(value);
                }

                //Tin tức
                if (value.idCategory == 2) {
                    $scope.tinTucs.push(value);
                }

                //Câu hỏi thường gặp
                if (value.idCategory == 3) {
                    $scope.cauHoiThuongGaps.push(value);
                }

                //Khuyến mại
                if (value.idCategory == 4) {
                    $scope.khuyenMais.push(value);
                }
            });
        });
}]);
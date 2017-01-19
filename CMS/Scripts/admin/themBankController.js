myApp.controller("themBankController", ['$scope', '$http', '$window', '$location', '$filter', 'Url', function ($scope, $http, $window, $location, $filter, Url) {
    $scope.bank = {};

    $scope.chooseImage = function () {
        // You can use the "CKFinder" class to render CKFinder in a page:
        var finder = new CKFinder();
        finder.selectActionFunction = function (fileUrl) {
            $scope.bank.image = fileUrl;
            $scope.$apply();
        };
        finder.SelectFunction = 'ShowFileInfo';
        finder.popup();
    }


    function selectFileWithCKFinder(elementId) {
        var finder = new CKFinder();
        CKFinder.popup({
            chooseFiles: true,
            width: 800,
            height: 600,
            onInit: function (finder) {
                alert("Yes");
                finder.on('files:choose', function (evt) {
                    var file = evt.data.files.first();
                    elementId = file.getUrl();
                });

                finder.on('file:choose:resizedImage', function (evt) {
                    elementId = evt.data.resizedUrl;
                });
            }
        });
    }


    //Lấy idBank từ Url
    $scope.currentIdBank = Url.getParameterByName('id');

    //Nếu sửa thì trả về giá trị của Banner
    if ($scope.currentIdBank) {
        $http.get('/API/BankAPI/' + $scope.currentIdBank)
            .success(function (data) {
                $scope.bank = {
                    idBank: data.idBank,
                    tenNganHang: data.tenNganHang,
                    kyHieu: data.kyHieu,
                    image: data.image,
                    tenTK: data.tenTK,
                    soTK: data.soTK,
                    loaiTien: data.loaiTien,
                    chiNhanh:data.chiNhanh,
                };
            });
    }
        //Không thì thiết lập giá trị mặc định
    else {
    }


    //Lưu banner
    $scope.saveBank = function () {
        if ($scope.currentIdBank) {
            $http.put('/API/BankAPI/' + $scope.bank.idBank, $scope.bank)
            .success(function () {
                toastr.success('Thành công', 'Lưu ngân hàng');
            })
            .error(function () {
                toastr.error('Thất bại', 'Thêm ngân hàng')
            });
        } else {
            $http.post('/API/BankAPI/', $scope.bank)
            .success(function () {
                toastr.success('Thành công', 'Thêm ngân hàng');
                $window.location.href = '/Admin/Banks';
            })
            .error(function () {
                toastr.error('Thất bại', 'Thêm ngân hàng');
            });
        }
    };
    //Lưu bài viết và Thoát
    $scope.saveBankAndExit = function () {
        if ($scope.currentIdBank) {
            $http.put('/API/BankAPI/' + $scope.bank.idBank, $scope.bank)
            .success(function () {
                $window.location.href = '/Admin/Banks';
            })
            .error(function () {
                toastr.error('Thất bại', 'Lưu ngân hàng');
            });
        } else {
            $http.post('/API/BankAPI/', $scope.bank)
            .success(function () {
                $window.location.href = '/Admin/Banks';
            })
            .error(function () {
                toastr.error('Thất bại', 'Thêm ngân hàng');
            });
        }
    };
    //Lưu bài viết và Thêm mới
    $scope.saveBankAndNew = function () {
        if ($scope.currentIdBank) {
            $http.put('/API/BankAPI/' + $scope.bank.idBank, $scope.bank)
            .success(function () {
                $window.location.href = '/Admin/Banks/Create';
            })
            .error(function () {
                toastr.error('Thất bại', 'Lưu ngân hàng')
            });
        } else {
            $http.post('/API/BankAPI/', $scope.bank)
            .success(function () {
                $window.location.href = '/Admin/Banks/Create';
            })
            .error(function () {
                toastr.error('Thất bại', 'Thêm ngân hàng')
            });
        }
    };
    //Hủy bỏ
    $scope.cancel = function () {
        $window.location.href = '/Admin/Banks';
    };

    ////Nhập Title
    //$scope.changeTitle = function () {
    //    //Tự tạo Alias
    //    $scope.banner.alias = Alias.genAlias($scope.banner.title);
    //};
}]);
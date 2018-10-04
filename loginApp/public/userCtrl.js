app.controller("userCtrl", ['$scope', '$http', '$uibModal', 'userServices', '$location', function($scope, $http, $uibModal, userServices, $location) {

    var updatedData = {};
    var emailparam;

    var refresh = function() {
        userServices.getAllUsers().then(function(response) {
                $scope.userlist = response.data;
            },
            function(error) {
                $location.path('/error');
            });
    };
    refresh();

    $scope.adduser = function() {
        console.log($scope.username);
        $scope.data = { "userInfo": {} }
        $scope.data.userInfo.userName = $scope.username;
        $scope.data.userInfo.address = $scope.address;
        $scope.data.email = $scope.email;
        $scope.data.password = $scope.password;
        $scope.data.status = "activated";

        userServices.setUser($scope.data).then(function(response) {
                alert(response.data);
                refresh();
            },
            function(error) {
                $location.path('/error');
            })
    };

    $scope.edit = function(email) {
        console.log("edit");
        emailparam = email;
        userServices.getSingleUser(email).then(function(response) {
                $scope.datas = response.data[0];
                console.log($scope.datas);
                $scope.username = $scope.datas[0].userInfo.userName;
                $scope.address = $scope.datas[0].userInfo.address;
                $scope.email = $scope.datas[0].email;
                $scope.password = $scope.datas[0].password;
                $scope.value = true;
            },
            function(error) {
                $location.path('/error');
            })
    }

    $scope.updateuser = function() {

        updatedData.userName = $scope.username;
        updatedData.address = $scope.address;
        updatedData.email = $scope.email;
        updatedData.password = $scope.password;

        console.log(updatedData);
        userServices.updateData(emailparam, updatedData).then(function(response) {
                alert(response.data);
                refresh();
            },
            function(error) {
                $location.path('/error');
            })
    }

    $scope.deactivate = function(id) {
        userServices.deactiveUser(id).then(function(response) {
                alert(response.data);
                refresh();
            },
            function(error) {
                $location.path('/error');
            })
    }

    $scope.remove = function(id) {
        if (confirm("Are you sure you want to delete this item?")) {
            userServices.deleteUser(id).then(function(response) {
                    refresh();
                },
                function(error) {
                    $location.path('/error');
                });
        }

    };



}]);
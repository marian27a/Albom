(function() {
    'use strict';
    mainApp.controller("mainCtrl", ["$log", "mainService", "$scope", "$window", function ($log, mainService, $scope, $window){
    let vm = this;
    $scope.window = angular.element($window);
    activate ();
    $log.debug("Main controller activated");  
    
    
    function activate () {
        $window.location.href = './index.html#!/'; //If user reload page redirect to albums
        loadAlboms();
        vm.loadAlbom = loadAlbom;
        vm.showPhoto = showPhoto;
        vm.selectedAlbom = "";
        vm.selectedPhoto = "";
        vm.serchStr = "";
        vm.currentPage = 1;
        vm.albomsPerPage = 12;
        vm.updatePages = updatePages;
    };
    
    
    
    function loadAlboms () {
        vm.showLoader = true;
        mainService.getAlboms()
        .then(res => {
            vm.showLoader = false;
            vm.alboms = angular.fromJson(res.data);
            vm.totalAlboms =vm.alboms.length - 12;
        });
    };
    
    
    function loadAlbom(id, title) {
        $window.scrollTo(0, 0);
        vm.selectedAlbom = title;
        vm.showLoader = true;
        mainService.getAlbom(id)
        .then(res => {
            vm.showLoader = false;
            vm.photos = angular.fromJson(res.data);
        })
    };
    
    
    function showPhoto(photo) {
        vm.selectedPhoto = photo;
        vm.shownPhotoUrl = $window.innerWidth > 660 ? vm.selectedPhoto.url : vm.selectedPhoto.thumbnailUrl;
    };
    
    $scope.$watch(()=>$window.innerWidth, (value) => {
        $scope.windowWidth = value;
        showPhoto(vm.selectedPhoto);
    },true);

    $scope.window.bind('resize', () => $scope.$apply());
    
    function updatePages () {
        vm.totalAlboms = vm.filteredAlboms;
    };
    

}]);

})();



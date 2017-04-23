(function() {
    
    'use strict';

    mainApp.service('mainService', ['$log', '$http', function($log, $http){
                $log.debug("main service activated");
                this.getAlboms = getAlboms;
                this.getAlbom = getAlbom;
    
    
                function getAlboms() {
                    return $http({
                        method: 'GET',
                        url: 'https://jsonplaceholder.typicode.com/albums', 
                    })
                };
    
    
                function getAlbom(id) {
                     return $http({
                        method: 'GET',
                        url: `https://jsonplaceholder.typicode.com/photos?albumId=${id}`, 
                    })
                };

    }]);
})();

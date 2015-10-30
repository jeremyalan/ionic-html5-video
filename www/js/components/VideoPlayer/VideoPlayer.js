(function () {
    
    function VideoPlayer($scope, $timeout, $sce) {
        var self = this;
        
        init();
        
        ////////////////////////////////////////
        // Public Methods
        this.select = function (video) {
            self.selectedVideo = null;
            
            if (video) {
                $timeout(function () {
                    self.selectedVideo = video;
                    
                    $timeout(function () {
                        $scope.$emit('video:play');
                    }, 1);
                }, 1);
            }
        }
        
        ////////////////////////////////////////
        // Private Methods
        
        
        function init() {
            self.videos = [
                {
                    'Title': 'Big Buck Bunny',
                    'Sources': [
                        { 'type': 'video/mp4',  'src': $sce.trustAsResourceUrl('http://www.w3schools.com/html/mov_bbb.mp4')  },
                        { 'type': 'video/ogg',  'src': $sce.trustAsResourceUrl('http://www.w3schools.com/html/mov_bbb.ogg')  }
                    ]
                },
                {
                    'Title': 'Lego Robot',
                    'Sources': [
                        { 'type': 'video/webm', 'src': $sce.trustAsResourceUrl('http://techslides.com/demos/sample-videos/small.webm') },
                        { 'type': 'video/ogg',  'src': $sce.trustAsResourceUrl('http://techslides.com/demos/sample-videos/small.ogv')  },
                        { 'type': 'video/mp4',  'src': $sce.trustAsResourceUrl('http://techslides.com/demos/sample-videos/small.mp4')  },
                        { 'type': 'video/3gp',  'src': $sce.trustAsResourceUrl('http://techslides.com/demos/sample-videos/small.3gp')  }
                    ]
                },
                {
                    'Title': 'Sintel Trailer',
                    'Sources': [
                        { 'type': 'video/mp4',  'src': $sce.trustAsResourceUrl('http://media.w3.org/2010/05/sintel/trailer.mp4') },
                        { 'type': 'video/webm', 'src': $sce.trustAsResourceUrl('http://techslides.com/demos/sample-videos/small.webm')  },
                        { 'type': 'video/ogg',  'src': $sce.trustAsResourceUrl('http://techslides.com/demos/sample-videos/small.ogv')  }
                    ]
                }
            ]
        };
    }
    
    angular.module('app')
        .directive('videoPlayer', function () {
            return {
                scope: {
                    
                },
                require: 'videoPlayer',
                controller: VideoPlayer,
                controllerAs: 'vm',
                bindToController: true,
                templateUrl: 'js/components/VideoPlayer/template.html',
                
                link: function ($scope, $el, attrs, ctrl) {
                    $scope.$on('video:play', function () {
                        var $video = $el.find('video')[0];
                        
                        if ($video) {
                            $video.play();
                        }
                    });
                } 
            };
        })
        
} ())

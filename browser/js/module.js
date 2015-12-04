var app = angular.module('juke', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('albums', {
      templateUrl: '/templates/albums.html',
      url: '/albums',
      controller: 'AlbumsCtrl',
      resolve: {
        albums: function(AlbumFactory) {
          return AlbumFactory.fetchAll();
        }
      }
    })
    .state('album', {
      templateUrl: '/templates/album.html',
      url: '/album/:id',
      controller: 'AlbumCtrl',
      resolve: {
        album: function(AlbumFactory,$stateParams) {
          return AlbumFactory.fetchById($stateParams.id);
        }
      }
    })
    .state('artists',{
      templateUrl: '/templates/artists.html',
      url: '/artists',
      controller: 'ArtistsCtrl',
      resolve: {
        artists: function(ArtistFactory) {
          return ArtistFactory.fetchAll();
        }
      }
    })
    .state('artist',{
      templateUrl: '/templates/artist.html',
      url: '/artists/:id',
      abstract: true,
      controller: 'ArtistCtrl',
      resolve: {
        artist: function(ArtistFactory,$stateParams) {
          return ArtistFactory.fetchById($stateParams.id);
        }
      }
    })
    .state('artist.albums',{
      templateUrl: '/templates/artists/albums.html',
      url: '/albums',
      controller: 'ArtistCtrl'
    })
    .state('artist.songs',{
      templateUrl: '/templates/artists/songs.html',
      url: '/songs',
      controller: 'ArtistCtrl'
    })

  $urlRouterProvider
  .when('','albums')
  // .when('artists/:id'+,function($state) {
  //   console.log('when artists/id');
  //   $state.go('artist.albums');
  // })
})

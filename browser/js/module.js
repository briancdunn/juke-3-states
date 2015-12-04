var app = angular.module('juke', ['ui.router']);

app.config(function($stateProvider) {
  $stateProvider
    .state('albums', {
      templateUrl: '/templates/albums.html',
      url: '/albums',
      controller: 'AlbumsCtrl'
    })
    .state('album', {
      templateUrl: '/templates/album.html',
      url: '/album/:id',
      controller: 'AlbumCtrl'
    })
    .state('artists',{
      templateUrl: '/templates/artists.html',
      url: '/artists',
      controller: 'ArtistsCtrl'
    })
    .state('artist',{
      templateUrl: '/templates/artist.html',
      url: '/artists/:id',
      controller: 'ArtistCtrl'
    })
    .state('artist.albums',{
      templateUrl: '/templates/artists/albums.html',
      url: '/artists/:id/albums',
      controller: 'ArtistCtrl'
    })
    .state('artist.songs',{
      templateUrl: '/templates/artists/songs.html',
      url: '/artists/:id/songs',
      controller: 'ArtistCtrl'
    })
})

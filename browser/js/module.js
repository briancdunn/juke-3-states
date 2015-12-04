var app = angular.module('juke', ['ui.router']);

app.config(function($stateProvider) {
  $stateProvider.state('albums', {
    templateUrl: '/templates/albums.html',
    url: '/albums',
    controller: 'AlbumsCtrl'
  });
  $stateProvider.state('albums.album', {
    templateUrl: '/templates/album.html',
    url: '/albums/:id',
    controller: 'AlbumCtrl'
  });
  $stateProvider.state('artists',{
    templateUrl: '/templates/artists.html',
    url: '/artists',
    controller: 'ArtistsCtrl'
  });
  $stateProvider.state('artist',{
    templateUrl: '/templates/artist.html',
    url: '/artists/:id',
    controller: 'ArtistCtrl'
  })
})

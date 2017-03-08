'use strict';

// const showCommentsTemplate = require('../templates/comment-listing.handlebars');

const showAlbums = function (data) {

};

const showAlbum = function (data) {

};

const showSuccess = function () {

};

const onShowError = function () {
  $('.log').text('This album has no comments');
};

const onPostSuccess = function () {

};

const onError = function () {

};

const onUpdateSuccess = function () {

};

const onDeleteSuccess = function () {

};

const onCreateError = function() {
  console.log('No Bueno...');
};



module.exports = {
  showAlbum,
  showAlbums,
  onError,
  onPostSuccess,
  showSuccess,
  onShowError,
  onUpdateSuccess,
  onDeleteSuccess,
  onCreateError,
};

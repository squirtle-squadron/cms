'use strict';

// const showCommentsTemplate = require('../templates/comment-listing.handlebars');

const indexBlogs = function (data) {
  console.log(data);
};

const showBlog = function (data) {
  console.log(data);
};

const showSuccess = function () {

};

const onShowError = function () {
  $('.log').text('This blog does not exsist');
};

const onPostSuccess = function (data) {
  console.log(data);
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
  showBlog,
  indexBlogs,
  onError,
  onPostSuccess,
  showSuccess,
  onShowError,
  onUpdateSuccess,
  onDeleteSuccess,
  onCreateError,
};

'use strict';
const showBlogTemplate = require('../templates/blog-listing.handlebars');
// const showCommentsTemplate = require('../templates/comment-listing.handlebars');

const indexBlogs = function (data) {
  console.log(data);
  let showBlogsHtml = showBlogTemplate({blogs: data.blogs});
  console.log(showBlogTemplate);
  $('.log').html(showBlogsHtml);
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
  $('#blog-index').click();
  $('.kapat').modal('hide');
};

const onDeleteSuccess = function () {
  $('#blog-index').click();
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

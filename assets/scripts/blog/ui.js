'use strict';
const showBlogTemplate = require('../templates/blog-listing.handlebars');
const showBlogSignedIn = require('../templates/blog-listing-signed-in.handlebars');


const indexBlogs = function (data) {
  // data.blog.updatedAt = data.blog.updatedAt.split('T')[0];
  let showBlogsHtml = showBlogTemplate({blogs: data.blogs});
  $('.log').html(showBlogsHtml);
};

const indexBlogsSignedIn = function (data) {
  // data.blog.updatedAt = data.blog.updatedAt.split('T')[0];
  let showBlogsHtml = showBlogSignedIn({blogs: data.blogs});
  $('.log').html(showBlogsHtml);
};

const showBlog = function (data) {
  console.log(data);
};

const showSuccess = function () {

};

const onShowError = function () {

};

const onPostSuccess = function (data) {
  console.log(data);
  $('.kapat').modal('hide');
};

const onError = function () {

};

const onUpdateSuccess = function () {
  $('.sign-in-show').click();
  $('.kapat').modal('hide');
};

const onDeleteSuccess = function () {
  $('.sign-in-show').click();
};

const onCreateError = function() {

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
  indexBlogsSignedIn
};

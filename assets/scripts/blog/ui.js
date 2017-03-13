'use strict';
const showBlogTemplate = require('../templates/blog-listing.handlebars');
const showBlogSignedIn = require('../templates/blog-listing-signed-in.handlebars');


const indexBlogs = function (data) {
  if(data.blogs.length === 0){
  alertify.error("There are no blogs!");
}
  let showBlogsHtml = showBlogTemplate({blogs: data.blogs});
  $('.log').html(showBlogsHtml);
};

const indexBlogsSignedIn = function (data) {
  if(data.blogs.length === 0){
  alertify.error("You don\'t have any blogs!");
}
  let showBlogsHtml = showBlogSignedIn({blogs: data.blogs});
  $('.log').html(showBlogsHtml);
};

const showBlog = function () {

};

const showSuccess = function () {

};

const onShowError = function () {

};

const onPostSuccess = function () {
  alertify.success('Blog Successfully Created!');
  $('.blog-render-signed-in').find('.sign-in-show').click();
  $('.kapat').modal('hide');
  $('input, textarea').val('');
};

const onCreateError = function() {
  alertify.error('Please fill out all the fields!');
};

const onError = function () {

};

const onUpdateSuccess = function () {
  alertify.success('Blog Successfully Updated!');
  $('.blog-render-signed-in').find('.sign-in-show').click();
  $('.kapat').modal('hide');
  $('input, textarea').val('');
};

const onDeleteSuccess = function () {
  alertify.success('Blog Successfully Deleted');
  $('.sign-in-show').click();
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

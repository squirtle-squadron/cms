'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');
const getFormFields = require('../../../lib/get-form-fields');
const emp = require('../emptyness.js');

const onCreateBlog = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createBlog(data)
  .then((response) => {
    store.blog = response.blog;
    ui.onPostSuccess(response.blog);
  }).catch(ui.onCreateError);
};

const onIndexBlog = function (event) {
  event.preventDefault();
  let data = event;
    api.indexBlogs(data)
    .then(ui.indexBlogs)
    .catch(ui.onShowError());
};

const onIndexBlogSignedIn = function (event) {
  event.preventDefault();
  let data = event;
    api.indexBlogsSignedIn(data)
    .then(ui.indexBlogsSignedIn)
    .catch(ui.onShowError);
};

const onShowBlog = function (event) {
  event.preventDefault();
  let blogId = $('#blog-id').val();
  if (blogId.length === 0){
    // console.log('No ID');
  } else{
      api.showBlog(blogId)
    .then(ui.showBlog)
    .catch(ui.onShowError);
  }
};

const onDeleteBlog = function(event){
  event.preventDefault();
  api.destroyBlog($(this).data('id'))
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const onUpdateBlog = function(event){
  event.preventDefault();
  let info = getFormFields(event.target);
  if(emp.isBlank(info.blog.content) || info.blog.content.length === 1005){
    alertify.error("Please Write A Content")
  } else{
    api.updateBlog(info, $(this).data('id'))
      .then(ui.onUpdateSuccess)
      .catch(ui.onError);
  }

};

const addHandlers = () => {
  $('#blog-index').on('click', onIndexBlog);
  $('.poop').on('click', onIndexBlogSignedIn);
  $('.show-blog').on('submit', onShowBlog);
  $('.blog-render').on('submit','.create-blog', onCreateBlog);
  $('#update-blog').on('submit', onUpdateBlog);
  $('.delete-blog').on('submit', onDeleteBlog);
};

module.exports = {
  onUpdateBlog,
  onCreateBlog,
  onIndexBlog,
  onShowBlog,
  onDeleteBlog,
  addHandlers,
  onIndexBlogSignedIn
};

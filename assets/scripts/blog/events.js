'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');
const getFormFields = require('../../../lib/get-form-fields');

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
    .catch(ui.onShowError);
};

const onShowBlog = function (event) {
  event.preventDefault();
  let blogId = $('#blog-id').val();
  if (blogId.length === 0){
    console.log('No ID');
  } else{
      api.showBlog(blogId)
    .then(ui.showBlog)
    .catch(ui.onShowError);
  }
};

const onDeleteBlog = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.destroyBlog(data)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const onUpdateBlog = function(event){
  event.preventDefault();
  let info = getFormFields(event.target);
  api.updateBlog(info)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError);
};

const addHandlers = () => {
  $('#blog-index').on('click', onIndexBlog);
  $('.show-blog').on('submit', onShowBlog);
  $('.create-blog').on('submit', onCreateBlog);
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
};
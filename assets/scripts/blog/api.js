'use strict';

const config = require('../config.js');
const store = require('../store.js');

const createBlog = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/blogs',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data,
  });
};

const indexBlogs = function () {
  return $.ajax({
    url: config.apiOrigin + '/blogs',
    // headers: {
    //   Authorization: `Token token=${store.user.token}`
    // },
    method: 'GET',
  });
};

const showBlog = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/blogs/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
  });
};

const destroyBlog = function(data, id){
  return $.ajax({
    url: config.apiOrigin + '/blogs/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE',
  });
};

const updateBlog = function(data, id) {
  return $.ajax({
    url: config.apiOrigin + '/blogs/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
  },
  data
});
};

module.exports = {
  createBlog,
  showBlog,
  indexBlogs,
  destroyBlog,
  updateBlog
};

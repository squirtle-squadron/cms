'use strict';

const config = require('../config.js');
const store = require('../store.js');

const createPage = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/pages',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data,
  });
};

const showPages = function () {
  return $.ajax({
    url: config.apiOrigin + '/pages',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
  });
};

const showPage = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/pages/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
  });
};

const showPageComments = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/pages/' + id + '/comments/',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
  });
};

const destroyPage = function(id){
  return $.ajax({
    url: config.apiOrigin + '/pages/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE',
  });
};

const updatePage = function(id, data) {
  return $.ajax({
    url: config.apiOrigin + '/pages/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
  },
  data
});
};

module.exports = {
  createPage,
  showPage,
  showPages,
  destroyPage,
  updatePage,
  showPageComments
};

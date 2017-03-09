'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');
const getFormFields = require('../../../lib/get-form-fields');

const onCreatePage = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createPage(data)
  .then((response) => {
    store.page = response.page;
    ui.onPostSuccess(response.page);
  }).catch(ui.onCreateError);
};

const onShowPage = function (event) {
  event.preventDefault();
    api.showPages()
    .then(ui.showPages)
    .catch(ui.onShowError);
};

const onShowPageComments = function (event) {
  event.preventDefault();
    api.showPageComments(+$(this).data('id'))
    .then(ui.onShowPageComments)
    .catch(ui.onShowError);
};

const onDeletePage = function(event){
  event.preventDefault();
  api.destroyPage(+$(this).data('id'))
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const onUpdatePage = function(event){
  event.preventDefault();
  let info = getFormFields(event.target);
  api.updatePage(info)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError);
};

module.exports = {
  onUpdatePage,
  onCreatePage,
  onShowPage,
  onDeletePage,
  onShowPageComments
};

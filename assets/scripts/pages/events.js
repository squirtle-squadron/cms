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

const onIndexPage = function (event) {
  event.preventDefault();
  let data = event;
    api.indexPages(data)
    .then(ui.indexPages)
    .catch(ui.onShowError);
};

const onShowPage = function (event) {
  // event.preventDefault();
  //   api.showPage($(this).data('id'))
  //   .then(ui.showPage)
  //   .catch(ui.onShowError);

};

const onShowSinglePage = function(event){
  event.preventDefault();
    api.showPage($(this).data('id'))
    .then(ui.singlePage)
    .catch(ui.onShowError);
};

const onDeletePage = function(event){
  event.preventDefault();
  api.destroyPage($(this).data('id'))
    .then(ui.onDeleteSuccess())
    .catch(ui.onError);
};

const onUpdatePage = function(event){
  event.preventDefault();

  let info = getFormFields(event.target);
  api.updatePage(info, $(this).data('id'))
    .then(ui.onUpdateSuccess)
    .catch(ui.onError);
};

module.exports = {
  onUpdatePage,
  onCreatePage,
  onIndexPage,
  onShowPage,
  onDeletePage,
  onShowSinglePage
};

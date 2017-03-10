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
  event.preventDefault();
  let pageId = $('#page-id').val();
  if (pageId.length === 0){
    console.log('No ID');
  } else{
      api.showPage(pageId)
    .then(ui.showPage)
    .catch(ui.onShowError);
  }
};

const onDeletePage = function(event){
  event.preventDefault();
  let pageId = event.target.getAttribute('data-id');
  console.log(pageId);
  api.destroyPage(pageId)
    .then(ui.onDeleteSuccess(pageId))
    .catch(ui.onError);
};

const onUpdatePage = function(event){
  event.preventDefault();
  let pageId = event.target.getAttribute('data-id');

  let info = getFormFields(event.target);
  api.updatePage(info,pageId)
    .then(ui.onUpdateSuccess(info, pageId))
    .then(ui.afterUpdateSuccess(info, pageId))
    .catch(ui.onError);
};

module.exports = {
  onUpdatePage,
  onCreatePage,
  onIndexPage,
  onShowPage,
  onDeletePage,
};

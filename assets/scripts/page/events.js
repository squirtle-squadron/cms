'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');
const getFormFields = require('../../../lib/get-form-fields');
const emp = require('../emptyness.js');

const onCreatePage = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createPage(data)
  .then((response) => {
    store.page = response.page;
    ui.onCreateSuccess(response.page);
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
    // console.log('No ID');
  } else{
      api.showPage(pageId)
    .then(ui.showPage)
    .catch(ui.onShowError);
  }
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
    .catch(ui.onDeleteError);
};

const onUpdatePage = function(event){
  event.preventDefault();
  let info = getFormFields(event.target);
  if(emp.isBlank(info.page.body) || info.page.body.length === 1005){
    alertify.error("Please Fill in Your Blog");
  }else{
    api.updatePage(info, $(this).data('id'))
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateError);
  }
};

module.exports = {
  onUpdatePage,
  onCreatePage,
  onIndexPage,
  onShowPage,
  onDeletePage,
  onShowSinglePage
};

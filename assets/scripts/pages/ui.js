'use strict';

const showPageTemplate = require('../templates/page-listing.handlebars');
// const showCommentsTemplate = require('../templates/comment-listing.handlebars');

const indexPages = function (data) {
  let showPagesHtml = showPageTemplate({ pages: data.pages });
  // selects the content element and appends new HTML into it
  $('.log').html(showPagesHtml);
};

const showPage = function (data) {
  console.log(data);
};

const showSuccess = function () {

};

const onShowError = function () {
  $('.log').text('This page does not exsist');
};

const onPostSuccess = function () {
  $('.kapat').modal('hide');
};

const onError = function () {

};

const onUpdateSuccess = function () {
  $('#page-index').click();
  $('.kapat').modal('hide');
};

const afterUpdateSuccess = function (){

};



const onDeleteSuccess = function () {
  $('#page-index').click();
};

const onCreateError = function() {
  console.log('No Bueno...');
};



module.exports = {
  showPage,
  indexPages,
  onError,
  onPostSuccess,
  showSuccess,
  onShowError,
  onUpdateSuccess,
  onDeleteSuccess,
  onCreateError,
  afterUpdateSuccess
};

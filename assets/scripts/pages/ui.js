'use strict';

const showPageTemplate = require('../templates/page-listing.handlebars');
// const showCommentsTemplate = require('../templates/comment-listing.handlebars');

const indexPages = function (data) {
  console.log(data);
  let showPagesHtml = showPageTemplate({ pages: data.pages });
  console.log(showPageTemplate);
  // selects the content element and appends new HTML into it
  $('.log').append(showPagesHtml);
};

const showPage = function (data) {
  console.log(data);
};

const showSuccess = function () {

};

const onShowError = function () {
  $('.log').text('This page does not exsist');
};

const onPostSuccess = function (data) {
  console.log(data);
};

const onError = function () {

};

const onUpdateSuccess = function () {

};

const onDeleteSuccess = function () {

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
};

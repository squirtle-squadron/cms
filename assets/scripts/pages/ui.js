'use strict';

// const showCommentsTemplate = require('../templates/comment-listing.handlebars');

const showPages = function (data) {

};

const showPage = function (data) {

};

const showSuccess = function () {

};

const onShowError = function () {
  $('.log').text('This album has no comments');
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
  showPages,
  onError,
  onPostSuccess,
  showSuccess,
  onShowError,
  onUpdateSuccess,
  onDeleteSuccess,
  onCreateError,
};

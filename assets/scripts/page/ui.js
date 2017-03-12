'use strict';

const showPageTemplate = require('../templates/page-listing.handlebars');
// const showCommentsTemplate = require('../templates/comment-listing.handlebars');
const showSinglePage = require('../templates/show-page.handlebars');

const indexPages = function (data) {
  for (let i = 0; i < data.pages.length; i++) {
    let content = data.pages[i].body;
    data.pages[i].body = content.replace(/\n/g, '\n');
    console.log(typeof content);
}
  let showPagesHtml = showPageTemplate({ pages: data.pages });
    // selects the content element and appends new HTML into it
    $('.log').html(showPagesHtml);
};

const showPage = function (data) {
  console.log(data);
};

const singlePage = function (data){
  // console.log(data);
  let showPagesHtml = showSinglePage({ page: data.page });
  // selects the content element and appends new HTML into it
  $('.kapat').modal('hide');
  $('.log').html(showPagesHtml);
};

const showSuccess = function () {

};

const onShowError = function () {
  // $('.log').text('This page does not exsist');
  console.log("error");
};

const onPostSuccess = function () {
  $('.kapat').modal('hide');
  $('#page-index').click();
};

const onError = function () {
  console.log("error");
};

const onUpdateSuccess = function () {
  $('#page-index').click();
  $('.kapat').modal('hide');
};

const afterUpdateSuccess = function (){

};



const onDeleteSuccess = function () {
  $('#page-index').click();
  $('.kapat').modal('hide');
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
  afterUpdateSuccess,
  singlePage
};

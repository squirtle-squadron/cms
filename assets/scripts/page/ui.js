'use strict';

const showPageTemplate = require('../templates/page-listing.handlebars');
// const showCommentsTemplate = require('../templates/comment-listing.handlebars');
const showSinglePage = require('../templates/show-page.handlebars');

const indexPages = function (data) {
  for (let i = 0; i < data.pages.length; i++) {
    let content = data.pages[i].body;
    data.pages[i].body = content.replace(/\n/g, '\n');
    // console.log(typeof content);
}
  let showPagesHtml = showPageTemplate({ pages: data.pages });
    // selects the content element and appends new HTML into it
    $('.log').html(showPagesHtml);
};

const showPage = function () {
};

const singlePage = function (data){
  let showPagesHtml = showSinglePage({ page: data.page });
  // selects the content element and appends new HTML into it
  $('.kapat').modal('hide');
  $('.log').html(showPagesHtml);
};

const showSuccess = function () {

};

const onShowError = function () {
};

const onCreateSuccess = function () {
  alertify.success('Page Successfully Created!');
  $('.kapat').modal('hide');
  $('#page-index').click();
};

const onCreateError = function() {
  alertify.error('Please fill out all fields!');
};


const onUpdateSuccess = function () {
  alertify.success('Page Updated Successfully!');
  $('#page-index').click();
  $('.kapat').modal('hide');
};

const onUpdateError = function () {
  alertify.error('Please fill out all Fields!');
};


const onDeleteSuccess = function () {
  alertify.success('Page Successfully Deleted!');
  $('#page-index').click();
  $('.kapat').modal('hide');
};


const onDeleteError = function () {
  alertify.error('Page not Deleted!');
};


module.exports = {
  showPage,
  indexPages,
  onDeleteError,
  onCreateSuccess,
  showSuccess,
  onShowError,
  onUpdateSuccess,
  onUpdateError,
  onDeleteSuccess,
  onCreateError,
  singlePage
};

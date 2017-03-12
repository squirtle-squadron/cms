'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const pageEvents = require('./page/events');
const handlers = require('./auth/events');
const blogEvents = require('./blog/events');
const showNavbar = require('./templates/navbar.handlebars');
const showBlogStuff = require('./templates/blog-crud.handlebars');

$(document).ready(function () {
  $('.navbar-render').append(showNavbar);
  $('.blog-render').append(showBlogStuff);
});

$(() => {
  setAPIOrigin(location, config);
  $('#change-password-dropdown').hide();
  $('#exit').hide();
  $('.create-new-album').hide();
  $('.log').text('Sign In or Sign Up');
  $('#exit').on('click', function () {
    $('#sign-out').submit();
  });
  $('.page-render').on('click', '#page-index', pageEvents.onIndexPage);
  $('.log').on('click','.shows-page', pageEvents.onShowSinglePage);
  // $('.show-page').on('submit', pageEvents.onShowPage);
  $('.page-render').on('submit', '.create-page', pageEvents.onCreatePage);
  $('.log').on('submit', '.submit-update', pageEvents.onUpdatePage);
  $('.log').on('submit', '.submit-blog-update', blogEvents.onUpdateBlog);
  $('.log').on('click','.remove' ,pageEvents.onDeletePage);
  $('.log').on('click','.remove-blog' ,blogEvents.onDeleteBlog);
  blogEvents.addHandlers();
});


$(document).ready(handlers.addHandlers);
// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const pageEvents = require('./pages/events');
const handlers = require('./auth/events');
const blogEvents = require('./blog/events');
const showNavbar = require('./templates/navbar.handlebars');
const showPageStuff = require('./templates/page-crud.handlebars');
const showBlogStuff = require('./templates/blog-crud.handlebars');

$(document).ready(function () {
  $('.navbar-render').append(showNavbar);
  $('.page-render').append(showPageStuff);
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
  $('#page-index').on('click', pageEvents.onIndexPage);
  $('.show-page').on('submit', pageEvents.onShowPage);
  $('.create-page').on('submit', pageEvents.onCreatePage);
  $('.log').on('submit', '.submit-update', pageEvents.onUpdatePage);
  $('.log').on('click','.remove' ,pageEvents.onDeletePage);
  blogEvents.addHandlers();
});


$(document).ready(handlers.addHandlers);
// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

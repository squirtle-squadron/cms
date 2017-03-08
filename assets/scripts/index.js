'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const pageEvents = require('./pages/events');

$(() => {
  setAPIOrigin(location, config);
  $('#change-password-dropdown').hide();
  $('#exit').hide();
  $('.create-new-album').hide();
  $('.log').text('Sign In or Sign Up');
  $('#exit').on('click', function () {
    $('#sign-out').submit();
  });
  $('.create-page').on('submit', pageEvents.onCreatePage);
});

const handlers = require('./auth/events');

$(document).ready(handlers.addHandlers);
// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

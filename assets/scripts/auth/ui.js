'use strict';

$('.log').text('');

const signInSuccess = () => {
  $('.new').show();
  $('#sign-in-dropdown').hide();
  $('#sign-up-dropdown').hide();
  $('#exit').show();
  $('#change-password-dropdown').show();
  $('.sign-in-modal').modal('hide');
  $('input').val('');
  $('.credential-status').text('');
  $('#create-blog').removeClass('hidden');
  $('#create-page-button').removeClass('hidden');
  $('#page-index').removeClass('hidden');
  $(".jumbotron").first('#update-button').removeClass('hidden');
  $('.but-hole').show();
};

const signInFailure = () => {
  $('.log').text('Please enter a valid username and password');
  $('.credential-status').text('Please enter a valid username and password');
};

const signUpSuccess = () => {
  $('.log').text('Welcome! Please Sign In!');
  $('.credential-status').text('Welcome! Please Sign In!');
  $('.sign-up-modal').modal('hide');
  $('input').val('');
};

const signUpFailure = () => {
  $('.log').text('Please enter a valid username (e.g. name@name) and password (must be 4 or more characters)');
  $('.credential-status').text('Please enter a valid username (e.g. name@name) and password (must be 4 or more characters)');
};

const changePasswordSuccess = () => {
  $('.log').text('Password Successfully Changed');
  $('.credential-status').val('');
  $('.change-password-modal').modal('hide');
  $('input').val('');

};

const passwordChangeFailure = () => {
  $('.log').text('Please Try Again');
  $('.credential-status').text('Please Try Again');
};

const signOutSuccess = () => {
  $('.log').text('Successfully Signed Out');
  $('.credential-status').text('Please Sign In or Sign Up!');
  $('.content').fadeOut();
  $('#change-password-dropdown').hide();
  $('#exit').hide();
  $('.create-new-album').hide();
  $('#sign-in-dropdown').show();
  $('#sign-up-dropdown').show();

};

module.exports = {
  changePasswordSuccess,
  signInSuccess,
  signUpFailure,
  signInFailure,
  passwordChangeFailure,
  signOutSuccess,
  signUpSuccess,
};

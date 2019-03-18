$(document).ready(() => {
  console.log('Dom is ready');

  $('#address-form').on('submit', (e) => {
    e.preventDefault();
    const baseUrl = 'https://us-street.api.smartystreets.com/street-address?auth-id=149cff65-035e-5a1b-7204-e59b0be4ed54&auth-token=19437337625682759&';
    const queries = $('#address-form').serialize();
    const requestUrl = `${baseUrl}${queries}`;
    console.log(requestUrl);
    $.getJSON(requestUrl, response => {
      console.log(response);
    });
  })
});

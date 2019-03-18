$(document).ready(() => {
  $('#address-form').on('submit', (e) => {
    e.preventDefault();
    const baseUrl = 'https://us-street.api.smartystreets.com/street-address?auth-id=149cff65-035e-5a1b-7204-e59b0be4ed54&auth-token=19437337625682759&';
    const queries = $('#address-form').serialize();
    const requestUrl = `${baseUrl}${queries}`;
    $.getJSON(requestUrl, response => {
      if ( !response.length ) {
        alert('Unable to validate address');
      } else {
        $('#valid').fadeIn('2000', () => {
          setTimeout(() => {
            $('#valid').fadeOut('slow');
          }, 3000);
        });
        $('#street').val(response[0].delivery_line_1);
        $('#city').val(response[0].components.city_name);
        $('#zipcode').val(response[0].components.zipcode + '-' + response[0].components.plus4_code);
        $('#state').val(response[0].components.state_abbreviation);
        $('#json').JSONView(response);
      }
    });
  })
});

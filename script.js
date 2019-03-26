$(document).ready(() => { 
  $('#address-form').on('submit', (e) => {
    e.preventDefault();
    const clientKey = '24452420731202627';
    const authID = 'd73d3614-f1d3-f9f6-d7df-7d7414ad4895';
    const baseUrl = `https://us-street.api.smartystreets.com/street-address?auth-id=${authID}&auth-token=${clientKey}&`;
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

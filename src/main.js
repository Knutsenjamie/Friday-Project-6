import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './currency-exchange-service.js';

function exchangedRate(response, usDollars, otherCurrencies) {
  if (response.result != 'success') {
    $('#exchangedRate').text(`There was an error: ${response.message}`);
  } else if (!otherCurrencies) {
    $('#exchangedRate').text('Please select a currency');
  } else if (usDollars === '') {
    $('#exchangedRate').text('Please select/enter number in USD');
  } else if (response.result === 'success') {
    $('#exchangedRate').text(`${usDollars} in ${otherCurrencies}: ${response.conversion_rates[otherCurrencies]*usDollars}`); 
  } else {
    $('#exchangedRate').text(`There was an error. Please try again.`);
  }
}

$(document).ready(function() {
  $('#showExchangeRate').click(function(event) {
    event.preventDefault();

    let usDollars = $('#usDollars').val();
    console.log(usDollars);
    $('#usDollars').val("");
    let otherCurrencies = $('input:radio:checked').val();
    console.log(otherCurrencies);
    ExchangeService.convertCurrency()
      .then(function(response) {
        exchangedRate(response, usDollars, otherCurrencies);
      });
  });
});
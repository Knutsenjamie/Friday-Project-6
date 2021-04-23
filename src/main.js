import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './currency-exchange-service.js';

function clearFields() {
  $('#moneyamount').val("");
  $('.showErrors').text("");
  $('.showNor').text("");
  $('.showYen').text("");
  $('.showNewZ').text("");
  $('.showAus').text("");
  $('.showColom').text("");
}

function exchangeCurrency(response) {
  if (response.conversion_rates) {
  $('.showNor').html(`Your amount in Norwegian Krones is ${response.conversion_rates.NOK}`);
  $('.showYen').html(`Your amount in Japanese Yen is ${response.conversion_rates.JPY}`);
  $('.showNewZ').html(`Your amount in New Zealand Dollars is ${response.conversion_rates.NZD}`);
  $('.showAus').html(`Your amount in Australian Dollars is ${response.conversion_rates.AUD}`);
  $('.showColom').html(`Your amount in Colombian Pesos is ${response.conversion_rates.COP}`);
  } else {
    $('.showErrors').html(`Sorry! Either you entered an invalid API key, have an innactive account, have reached your quota, are using unsuported code, or requested a malformed request`);
  }
}

$(document).ready(function() {
  let USD = $('#moneyamount').val();
  $('#exchangebutton').click(function() {
    clearFields();
    ExchangeService.convertCurrency(USD)
    .then(function(response) {
      exchangeCurrency(response);
        });
  });
});

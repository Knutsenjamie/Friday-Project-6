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
  if response.
}
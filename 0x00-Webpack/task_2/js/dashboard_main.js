
import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';
import logo from '../assets/holberton-logo.png';

const logoDiv = document.createElement('div');
logoDiv.id = 'logo';
logoDiv.style.backgroundImage = `url(${logo})`;
document.body.prepend(logoDiv);

$('body').append('<p>ALX Dashboard</p>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
  count++;
  $("#count").html(`${count} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 500));

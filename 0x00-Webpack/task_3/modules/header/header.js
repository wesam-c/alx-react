import "./header.css";
import logo from '../../assets/holberton-logo.png';

const $ = require("jquery");

$("body").append("<header></header>");
$("header").append(`<div id="logo style="background-image: url(${logo})"></div>, <h1>Holberton Dashboard</h1>`);

console.log("Init header");

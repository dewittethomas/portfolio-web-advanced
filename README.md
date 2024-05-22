# Portfolio Web Advanced

This is a Portfolio Website for my school subject "Web Advanced," built with HTML, CSS, and JavaScript.

## Table of Contents
- [Requirements](#requirements)
- [Features](#features)
    - [Responsiveness](#responsiveness)
    - [Title](#title)
    - [Weather Station](#weather-station)
    - [Name](#name)
    - [Bitcoin Price](#bitcoin-price)
    - [Calculator](#calculator)
    - [Random User Generator](#random-user-generator)
    - [Leap Year](#leap-year)

## Requirements

The website needed to incorporate multiple elements and functionalities, including:

- Selecting Elements
- Manipulating Elements
- Attaching Event to an Element
- Form Validation
- Using a Constant
- Using Template Literals
- Destructuring
- Spread & Rest Operator
- Iterating over an Array
- Arrow Function
- Callback Function
- Promise
- Consumer Methods
- Async & Await
- Self-Executing Function
- Fetching Data
- Manipulating and Displaying JSON
- Basic CSS Animation
- Using Flexbox or CSS Grid
- Using LocalStorage

## Features

### Responsiveness

To ensure the website is compatible with all devices, I utilized Flexbox. This approach helped create a responsive and adaptable layout.

This feature demonstrates:

- [x] Using Flexbox or CSS Grid

### Title

The header displays my name "Thomas Dewitte", which features a CSS animation on hover.

This feature demonstrates:

- [x] Basic CSS Animation

### Weather Station

A Weather Station is shown in the header when the page loads. The weather information is based on Anderlecht, where my school is located, and is fetched from a Weather API using an asynchronous function. The temperature is shown in degrees Celsius, and animated icons represent different weather conditions:

- Sunny
- Cloudy
- Partly Cloudy
- Rainy
- Snowy
- Thundery

This feature demonstrates:

- [x] Selecting Elements
- [x] Manipulating Elements
- [x] Iterating over an Array
- [x] Async & Await
- [x] Fetching Data
- [x] Self-Executing Function
- [x] Basic CSS Animation

### Name

A "What's Your Name?" page allows users to input their name, which is then saved to LocalStorage. The form includes validation to ensure a name is entered before submission (which is executed by clicking the submit-button). Additionally, a "Discover Your Name" page displays the stored name dynamically.

This feature demonstrates:

- [x] Using LocalStorage
- [x] Attaching Event to an Element
- [x] Form Validation
- [x] Using Template Literals

### Bitcoin Price

The "Bitcoin Price" page fetches and displays the current price of Bitcoin in Euros (EUR).

When the page loads, it sends a request to the CoinDesk API to get the latest Bitcoin price. The fetched data is then parsed and displayed on the page. The implementation includes error handling to manage any issues that may arise during the data fetching process, using consumer methods.

This feature demonstrates:

- [x] Consumer Methods
- [x] Using a Constant
- [x] Using Template Literals
- [x] Fetching Data

### Calculator

The "Calculator" page allows users to input three numbers and quickly calculate their sum, using the Spread & Rest Operator. Upon entering the numbers and clicking the "Add up" button, the script processes the input and displays the result.

This feature demonstrates:

- [x] Spread & Rest Operator
- [x] Arrow Function

### Random User Generator

The "Random User Generator" page fetches and displays random user profiles (with data destructured from an API), which include details such as names, emails, and more. This feature allows you to generate diverse user data with a single click, providing lifelike personas for testing or placeholder content. The implementation includes error handling to manage any issues that may arise during the data fetching process, using promises.

This feature demonstrates:

- [x] Promise
- [x] Destructuring
- [x] Fetching Data

### Leap Year

The "Leap Year" page allows users to input a year and determine if it is a leap year. Upon entering the year and clicking the "Verify" button, the script processes the input with a callback function that checks the leap year criteria and displays the result.

This feature demonstrates:

- [x] Callback Function
- [x] Using Template Literals
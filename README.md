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

The header displays my name, which features a CSS animation on hover.

This feature demonstrates:

- [x] Basic CSS Animation

### Weather Station

A Weather Station is implemented in the header. The weather information is based on Anderlecht, where my school is located. The temperature is shown in degrees Celsius, and animated icons represent different weather conditions:

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

### Name

A "What's Your Name?" page allows users to input their name, which is then saved to LocalStorage. The form includes validation to ensure a name is entered before submission. Additionally, a "Discover Your Name" page displays the stored name dynamically.

This feature demonstrates:

- [x] Using LocalStorage
- [x] Attaching Event to an Element
- [x] Form Validation
- [x] Using Template Literals


### Bitcoin Price

The "Bitcoin Price" page fetches and displays the current price of Bitcoin in Euros (EUR). This feature leverages modern JavaScript functionalities like Promises and Fetch API to retrieve real-time data from the CoinDesk API.

When the page loads, it sends a request to the CoinDesk API to get the latest Bitcoin price. The fetched data is then parsed and displayed on the page. The implementation includes error handling to manage any issues that may arise during the data fetching process.

This feature demonstrates:

- [x] Consumer Methods
- [x] Using a Constant
- [x] Using Template Literals

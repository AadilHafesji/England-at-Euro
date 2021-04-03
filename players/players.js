// Get the navigation bar from the Home page
// Get the footer from the Home page
$('#navBar').load('../home.html #navBar');
$('#topOfPage').load('../home.html a#topOfPage');
$('#footer').load('../home.html footer#footer');

function backToTop() {
  // window.scroll({ top: 2500, left: 0, behavior: 'smooth' });
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

// Heading Titles
var goalkeepersHeading = "Goalkeepers";
var defendersHeading = "Defenders";
var midfieldersHeading = "Midfielders";
var forwardsHeading = "Forwards";

// Add the headings to the H2 tag
var goalkeepers = document.querySelector(".goalkeepers-heading");
goalkeepers.textContent = goalkeepersHeading;

var defenders = document.querySelector(".defenders-heading");
defenders.textContent = defendersHeading;

var midfielders = document.querySelector(".midfielders-heading");
midfielders.textContent = midfieldersHeading;

var forwards = document.querySelector(".forwards-heading");
forwards.textContent = forwardsHeading;

// Personal API Key
var apiKey = 'e15a88f2c93c40a6afe00e261a22ef75';

function requestEnglandSquad() {
  fetch('https://api.football-data.org/v2/teams/770', {
    headers: {
      'X-Auth-Token': apiKey,
    }
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Data: ', data);

    // Use the data from API to fill in table
    inputPlayers(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function inputPlayers(data) {
  // var squadGoalkeepers = document.querySelector(".goalkeepers");
  // squadGoalkeepers.textContent = data.address;
}

// Update on page load
requestEnglandSquad();

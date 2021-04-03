// Get the navigation bar from the Home page
// Get the footer from the Home page
$('#navBar').load('../home.html #navBar');
$('#footer').load('../home.html footer#footer');

// Hide/Show Second Table
// onClick toggle
// Function to toggle visibility based on ID of table in HTML
document.getElementById('group-matches-text').innerHTML = 'Show Group Matches';

function toggle_visibility(id) {
  // Get element by ID
  var matchesTableId = document.getElementById('group-matches-table');

  // If the toggle is not selected then hide the table
  // Else show it as a block display
  if (matchesTableId.style.display === 'block') {
    matchesTableId.style.display = 'none';
    document.getElementById('group-matches-text').innerHTML = 'Show Group Matches';
  } else {
    matchesTableId.style.display = 'block';
    document.getElementById('group-matches-text').innerHTML = 'Hide Group Matches';
  }
}

// An Array of the group matches
let groupMatches = [
  { date: "13/06/2021 - Wembley Stadium, London", teamOne: "England", time: "14:00", teamTwo: "Croatia" },
  { date: "14/06/2021 - Hampden Park, Glasgow", teamOne: "Scotland", time: "14:00", teamTwo: "Czech Republic" },
  { date: "18/06/2021 - Hampden Park, Glasgow", teamOne: "Croatia", time: "17:00", teamTwo: "Czech Republic" },
  { date: "18/06/2021 - Wembley Stadium, London", teamOne: "England", time: "20:00", teamTwo: "Scotland" },
  { date: "22/06/2021 - Wembley Stadium, London", teamOne: "Czech Republic", time: "20:00", teamTwo: "England" },
  { date: "22/06/2021 - Hampden Park, Glasgow", teamOne: "Croatia", time: "20:00", teamTwo: "Scotland" },
];

// A function to create the table and add the data to each row and cell
function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

// Show table based on the ID in the HTML
let table = document.getElementById("table");
let data = Object.keys(groupMatches[0]);
generateTable(table, groupMatches); // generate the table first

// Array of Croatias last 5 matches
var croatiaFormGuide = [
  {
    result: "won",
    match: "Croatia 2-1 Sweden",
  },
  {
    result: "lost",
    match: "Croatia 1-2 France",
  },
  {
    result: "draw",
    match: "Turkey 3-3 Croatia",
  },
  {  
    result: "lost",
    match: "Sweden 2-1 Croatia",
  },
  {
    result: "lost",
    match: "Croatia 2-3 Portugal",
  }
]

var text = "";

// For Each element in array check the result
// If they won change colour to green and add class that shows W
// Else If they lost change colour to red and add class that shows L
// Else If they drew change colour to grey and add class that shows D
croatiaFormGuide.forEach(el => {
  if (el.result == "won") {
    text += '<span class="colour-green"><span class="green-circle">W</span>' + el.match + '</span><br>';
  } else if (el.result == "lost") {
    text += '<span class="colour-red"><span class="red-circle">L</span>' + el.match + '</span><br>';
  } else if (el.result == "draw") {
    text += '<span class="colour-grey"><span class="grey-circle">D</span>' + el.match + '</span><br>';
  }
})

// Add the array to the ID that has the value of formGuide
document.getElementById("scoresCroatia").innerHTML = text;

// Array of Czech Republics last 5 matches
var czechFormGuide = [
  {
    result: "won",
    match: "Israel 1-2 Czech Republic",
  },
  {
    result: "lost",
    match: "Scotland 1-0 Czech Republic",
  },
  {
    result: "lost",
    match: "Germany 1-0 Czech Republic",
  },
  {  
    result: "won",
    match: "Czech Republic 1-0 Israel",
  },
  {
    result: "won",
    match: "Czech Republic 2-0 Slovakia",
  }
]

var text = "";

// For Each element in array check the result
// If they won change colour to green and add class that shows W
// Else If they lost change colour to red and add class that shows L
// Else If they drew change colour to grey and add class that shows D
czechFormGuide.forEach(el => {
  if (el.result == "won") {
    text += '<span class="colour-green"><span class="green-circle">W</span>' + el.match + '</span><br>';
  } else if (el.result == "lost") {
    text += '<span class="colour-red"><span class="red-circle">L</span>' + el.match + '</span><br>';
  } else if (el.result == "draw") {
    text += '<span class="colour-grey"><span class="grey-circle">D</span>' + el.match + '</span><br>';
  }
})

// Add the array to the ID that has the value of formGuide
document.getElementById("scoresCzech").innerHTML = text;

// Array of Englands last 5 matches
var englandFormGuide = [
  {
    result: "won",
    match: "England 2-1 Belgium",
  },
  {
    result: "lost",
    match: "England 0-1 Denmark",
  },
  {
    result: "won",
    match: "England 3-0 Republic of Ireland",
  },
  {  
    result: "lost",
    match: "Belgium 2-0 England",
  },
  {
    result: "won",
    match: "England 4-0 Iceland",
  }
]

var text = "";

// For Each element in array check the result
// If they won change colour to green and add class that shows W
// Else If they lost change colour to red and add class that shows L
// Else If they drew change colour to grey and add class that shows D
englandFormGuide.forEach(el => {
  if (el.result == "won") {
    text += '<span class="colour-green"><span class="green-circle">W</span>' + el.match + '</span><br>';
  } else if (el.result == "lost") {
    text += '<span class="colour-red"><span class="red-circle">L</span>' + el.match + '</span><br>';
  } else if (el.result == "draw") {
    text += '<span class="colour-grey"><span class="grey-circle">D</span>' + el.match + '</span><br>';
  }
})

// Add the array to the ID that has the value of formGuide
document.getElementById("scoresEngland").innerHTML = text;

// Array of Scotlands last 5 matches
var scotlandFormGuide = [
  {
    result: "won",
    match: "Scotland 1-0 Slovakia",
  },
  {
    result: "won",
    match: "Scotland 1-0 Czech Republic",
  },
  {
    result: "draw",
    match: "Serbia 1-1 Scotland",
  },
  {  
    result: "lost",
    match: "Slovakia 1-0 Scotland",
  },
  {
    result: "lost",
    match: "Israel 1-0 Scotland",
  }
]

var text = "";

// For Each element in array check the result
// If they won change colour to green and add class that shows W
// Else If they lost change colour to red and add class that shows L
// Else If they drew change colour to grey and add class that shows D
scotlandFormGuide.forEach(el => {
  if (el.result == "won") {
    text += '<span class="colour-green"><span class="green-circle">W</span>' + el.match + '</span><br>';
  } else if (el.result == "lost") {
    text += '<span class="colour-red"><span class="red-circle">L</span>' + el.match + '</span><br>';
  } else if (el.result == "draw") {
    text += '<span class="colour-grey"><span class="grey-circle">D</span>' + el.match + '</span><br>';
  }
})

// Add the array to the ID that has the value of formGuide
document.getElementById("scoresScotland").innerHTML = text;

// For accordion to show and hide form guide
var accordionItem = document.getElementsByClassName('accordion');
var accordionHD = document.getElementsByClassName('accordion-heading');

// Add a String for each accoridan column heading
document.getElementById("accordionCroatiaHeading").innerHTML = "Croatia Form Guide";
document.getElementById("accordionCzechHeading").innerHTML = "Czech Republic Form Guide";
document.getElementById("accordionEnglandHeading").innerHTML = "England Form Guide";
document.getElementById("accordionScotlandHeading").innerHTML = "Scotland Form Guide";

// For the heading length add an event listener to toggle open and close
for (i = 0; i < accordionHD.length; i++) {
  accordionHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accordionItem.length; i++) {
    accordionItem[i].className = 'accordion close';
  }

  if (itemClass == 'accordion close') {
    this.parentNode.className = 'accordion open';
  }
}

// Modal
fetch('group-stages-teams.json')
  .then((response) => response.json())
  .then((data) => {
    console.log('Data: ', data);

    for(var x = 0; x < data.length; x++) {
      const titleTeamName = document.querySelectorAll(".title");
      data.forEach((item, i) => titleTeamName[i].textContent = item.teamName);

      const modalTeamInformation = document.querySelectorAll(".modal-team-information");
      data.forEach((item, i) => modalTeamInformation[i].textContent = item.teamInformation);

      const modalTeamPedigree = document.querySelectorAll(".modal-team-pedigree");
      data.forEach((item, i) => modalTeamPedigree[i].textContent = item.teamPedigree);

      const modalTeamCaptainImage = document.querySelectorAll(".modal-captain-image");
      data.forEach((item, i) => modalTeamCaptainImage[i].src = item.teamCaptain);

      const modalTeamCaptainName = document.querySelectorAll(".modal-captain-name");
      data.forEach((item, i) => modalTeamCaptainName[i].textContent = item.teamCaptainName);

      const modalTeamWebsite = document.querySelectorAll(".modal-team-website");
      data.forEach((item, i) => modalTeamWebsite[i].href = item.teamWebsite);
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });

const openModalAnchor = document.querySelectorAll('[data-modal-target]');
const closeModalAnchor = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalAnchor.forEach(anchor => {
  anchor.addEventListener('click', () => {
    const modal = document.querySelector(anchor.dataset.modalTarget);
    openModal(modal);
  })
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  })
});

closeModalAnchor.forEach(anchor => {
  anchor.addEventListener('click', () => {
    const modal = anchor.closest('.modal');
    closeModal(modal);
  })
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
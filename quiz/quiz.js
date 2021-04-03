// Get the navigation bar from the Home page
// Get the footer from the Home page
$('#navBar').load('../home.html #navBar');
$('#footer').load('../home.html footer#footer');

// position is the position of where the user in the test or which question they're on
var position = 0, test, testStatus, question, answerChoice, choices, choiceA, choiceB, choiceC, choiceD, correctAnswer = 0;

var email  = "";
var checkedbox = false;

// This is a multidimensional array with elements inside them that contain questions, choices and the correct answer
var questions = [
  {
    question: "Who scored Republic of Ireland’s only goal in their Euro 88 group stage win over England in Stuttgart?",
    a: "Ray Houghton",
    b: "John Aldridge",
    c: "Frank Stapleton",
    d: "Mick McCarthy",
    answer: "A"
  },
  {
    question: "Who scored England’s first goal at Euro 2012?",
    a: "Wayne Rooney",
    b: "John Terry",
    c: "Joleon Lescott",
    d: "Andy Carroll",
    answer: "C"
  },
  {
    question: "Daniel Sturridge scored England’s last-gasp winner in their 2-1 victory over Wales at Euro 2016, but who scored the equaliser?",
    a: "Wayne Rooney",
    b: "Raheem Sterling",
    c: "Marcus Rashford",
    d: "Jamie Vardy",
    answer: "D"
  },
  {
    question: "How many goals did Alan Shearer score in Euro 96?",
    a: 3,
    b: 5,
    c: 6,
    d: 4,
    answer: "B"
  },
  {
    question: "In Euro 2016, England's group games were against Russia, Wales and which other nation?",
    a: "Croatia",
    b: "Sweden",
    c: "Spain",
    d: "Slovakia",
    answer: "D"
  },
  {
    question: "A loss to which country confirmed England's failure to qualify for Euro 2008?",
    a: "Serbia",
    b: "Croatia",
    c: "Spain",
    d: "Slovakia",
    answer: "B"
  },
  {
    question: "Which club had the most players in England’s 22-man squad at Euro 96?",
    a: "Manchester United",
    b: "Liverpool",
    c: "Tottenham Hotspur",
    d: "Arsenal",
    answer: "C"
  },
  {
    question: "Which England player had a perfectly legitimate goal disallowed against Portugal in Euro 2004?",
    a: "John Terry",
    b: "Jamie Carragher",
    c: "Sol Campbell",
    d: "Gary Neville",
    answer: "C"
  }
];

// This get function is short for the getElementById function	
function get(x) {
  return document.getElementById(x);
}

// This function renders a question to display on the page
function renderQuestion() {
  test = get("test");
  if (position >= questions.length) {
    test.innerHTML = "<h2>You got " + correctAnswer + " out of " + questions.length + " questions correct.</h2>";

    get("testStatus").innerHTML = "Test Completed";

    // After test completed allow the user to recieve an email with their results
    get("email").innerHTML = `
                            <p class="information">
                            Would you like your quiz results to be sent to your email?<br>
                            If YES please check the checkbox and enter your email.
                            </p>
                            <input id="checkedbox" type="checkbox" class="checkbox" />
                            <input type='email' placeholder='Enter Email' id='emailAddress' class="email-input" required>
                            <button onclick='submitEmail()' class='submit-email-button blue-button'>Submit</button>
                          `;

    // Resets the variable
    position = 0;
    correctAnswer = 0;

    // Stops the renderQuestion function running
    return false;
  }

  get("testStatus").innerHTML = "Question " + (position + 1) + " of " + questions.length;

  question = questions[position].question;
  choiceA = questions[position].a;
  choiceB = questions[position].b;
  choiceC = questions[position].c;
  choiceD = questions[position].d;

  // Display the question
  test.innerHTML = "<h3 class='question'>" + question + "</h3>";

  // Display the answer options
  // The += appends to the data started on the line above
  test.innerHTML += "<label><input type='radio' name='choices' value='A'> " + choiceA + "</label><br>";
  test.innerHTML += "<label><input type='radio' name='choices' value='B'> " + choiceB + "</label><br>";
  test.innerHTML += "<label><input type='radio' name='choices' value='C'> " + choiceC + "</label><br>";
  test.innerHTML += "<label><input type='radio' name='choices' value='D'> " + choiceD + "</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()' class='red-button'>Submit Answer</button>";
}

function checkAnswer() {
  // getElementsByName which the array will loop through
  choices = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      answerChoice = choices[i].value;
    }
  }

  // Check if answer matches the correct choice
  // Else if answer does not matche the correct choice
  if (answerChoice == questions[position].answer) {
    // Each time there is a correct answer this value increases
    correctAnswer++;
  } else if (answerChoice != questions[position].answer) {
    console.log("Incorrect");
  }
  
  if (document.querySelectorAll('input[type="radio"]:checked').length === 0) {
    JSAlert.alert("<code>Please select an answer.</code>", null, JSAlert.Icons.Warning);
    return false;
  } 

  // Changes position of which character user is on
  position++;
  // renderQuestion function runs again to go to next question
  renderQuestion();
}

function submitEmail() {
  checkedbox = document.getElementById("checkedbox");
  email = document.querySelector("#emailAddress").value;;

  if (checkedbox.checked) {
    console.log("Checked");
  } 
  
  if (checkedbox.checked && email == "") {
    console.log("No Email");
    JSAlert.alert("<code>Please enter your email.</code>", null, JSAlert.Icons.Failed);
  } else if (email != "" && !checkedbox.checked) {
    console.log("No Check");
    JSAlert.alert("<code>Please check the checkbox.</code>", null, JSAlert.Icons.Failed);
  } else if (checkedbox.checked && email != "") {
    JSAlert.confirm("Email has been Sent.").then(function(result) {
      // Check if pressed Ok
			if (!result) {
        return;
      }
      // User pressed Ok!
      // Reload page
      window.location.reload();
    });
  } else {
    JSAlert.alert("<code>Please enter your email and check the checkbox.</code>", null, JSAlert.Icons.Failed);
  }
}

// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);
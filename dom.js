// Exercises: The DOM

// EXERCISE: The Logo Hijack

// No homepage is safe from the logo bandit!

// Open up www.google.com in Chrome or Firefox, and open up the console.
// Find the Google logo and store it in a variable.
// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// Find the Google search button and store it in a variable.
// Modify the text of the button so that it says "Yahooo!" instead.

// EXERCISE: About Me

// Cuz every webpage needs an "About" section.

// Start with this HTML and save it as "aboutme.html":
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8"/>
//   <title>About Me</title>
// </head>
// <body>
//   <h1>About Me</h1>

//   <ul>
//     <li>Nickname: <span id="nickname"></span>
//     <li>Favorites:  <span id="favorites"></span>
//     <li>Hometown: <span id="hometown"></span>
//    </ul>

//  </body>
// </html>

// Add a script tag to the bottom.
// Change the body style so it has a font-family of "Arial, sans-serif".
var body = document.getElementsByTagName('body')[0];
body.style.fontFamily = "Arial, sans-serif";
// Replace each of the spans (nickname, favorites, hometown) with your own information.
document.getElementById('nickname').innerText = "Sensei";
document.getElementById('favorites').innerText = "Ruby is the best!";
document.getElementById('hometown').innerText = "Toronto, ON";
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
var listItems = document.getElementsByTagName('li');
for (var i = 0; i < listItems.length; i++) {
  listItems[i].style.backgroundColor = "red";
}
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
var img = document.createElement("img");
img.src = "https://pbs.twimg.com/profile_images/618788721685458948/PhjH41NI_400x400.jpg";
body.appendChild(img);

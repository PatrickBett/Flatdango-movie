Movie Ticket Booking System
This JavaScript application fetches data from a local server endpoint (http://localhost:3000/films) to display a list of movies along with their details, including title, poster, runtime, capacity, showtime, available tickets, and description. Users can buy tickets for the available movies, and the application dynamically updates the available ticket count and marks movies as "SOLD OUT" when tickets are sold out.

How to Use
Clone the repository to your local machine.
Make sure you have the local server running at http://localhost:3000/films providing the required movie data in JSON format.
Open the index.html file in your web browser.
The application will fetch the movie data and display it along with buy ticket buttons.
Click the "Buy Ticket" button next to the desired movie to purchase a ticket. The available ticket count will decrease, and the button will show "SOLD OUT" when all tickets are sold.
Features
Display Movies: The application fetches movie data from the server and displays it on the web page, including movie poster, title, runtime, capacity, showtime, available tickets, and description.

Buy Tickets: Users can buy tickets for available movies by clicking the "Buy Ticket" button. The available ticket count decreases with each purchase. When no tickets are available, the button changes to "SOLD OUT."

Code Overview
The main functionality is encapsulated within the displayData() function, which fetches data from the server, dynamically creates HTML elements for each movie, and handles the buy ticket functionality.

Technologies Used
JavaScript: The core programming language used for the application logic.
HTML: Markup language for creating the web page structure.
CSS: Stylesheet language for enhancing the visual appeal of the application.
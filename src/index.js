function displayData(){
    fetch("http://localhost:3000/films")
    .then(response=>response.json())
    .then((data)=>{
        const movies=data
        movies.forEach(movie => {
            const divMoviesContainer=document.querySelector('.movies-container')
            //create div tag with id movie-container element
            const divMovieContainer=document.createElement('div')
            divMovieContainer.id='movie-container'
            //create img tag with attribute src
            const img=document.createElement('img')
            img.setAttribute('src',movie.poster)
            
            //create element h2
            const h2=document.createElement('h2')
            h2.innerHTML=""
            h2.textContent=movie.title//asssign h2 content from json

            //contain runtime
            const movieLength=document.createElement('h3')
            movieLength.innerHTML=""
            movieLength.textContent="Movie Length: "+movie.runtime//asssign  content from json

            //contain capacity
            const movieCapacity=document.createElement('h3')
            movieCapacity.innerHTML=""
            movieCapacity.textContent="Capacity: "+movie.capacity//asssign  content from json


            //contain Showtime
            const movieShowtime=document.createElement('h3')
            movieShowtime.innerHTML=""
            movieShowtime.textContent="Showtime: "+movie.showtime//asssign  content from json


            //contain Available tickets
            const ticketInformation=document.createElement('h3')
            ticketInformation.innerHTML=""
            ticketInformation.textContent="Tickets Available: "


            const movieAvailableTickets=document.createElement('em')
            movieAvailableTickets.innerHTML=""
            movieAvailableTickets.textContent=(movie.capacity-movie.tickets_sold) //asssign  content from json

            //contain Description
            const movieDescription=document.createElement('h4')
            movieDescription.innerHTML=""
            movieDescription.textContent="Description: "+movie.description//asssign  content from json


            //create an add cart button
            const addCartBtn = document.createElement('button')
            addCartBtn.id='addcartbtn'
            addCartBtn.textContent="Buy Ticket"


            //add event listener to the button that when buy ticket is clicked
            //the available reduce and that i wont be able to buy ticket if its 0
            addCartBtn.addEventListener("click",buyTicketFunc)

            //function to be called
            function buyTicketFunc(){
                
                if (movieAvailableTickets.textContent>=1){
                    movieAvailableTickets.textContent--   
                    //CHANGE THE BUTTON TO SOLD OUT WHEN 0 TICKETS AVAILABLE
                    if (movieAvailableTickets.textContent==0) {
                        addCartBtn.textContent="SOLD OUT"
                    }             
                }
                else{
                    
                    alert('Tickets Not Available')//Give an alert when tickets not available
                }
                
            }


          //Appending all created tags
            divMoviesContainer.appendChild(divMovieContainer)
            divMovieContainer.appendChild(img)
            divMovieContainer.appendChild(h2)
            divMovieContainer.appendChild(movieLength)
            divMovieContainer.appendChild(movieCapacity)
            divMovieContainer.appendChild(movieShowtime)
            ticketInformation.appendChild(movieAvailableTickets)
            divMovieContainer.appendChild(ticketInformation)
            
            divMovieContainer.appendChild(movieDescription)
            divMovieContainer.appendChild(addCartBtn)


            
            

        });//movies.foreach ends here

    })//.then ends here

}
//call
displayData()
























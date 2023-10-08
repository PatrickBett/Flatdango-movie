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

            //contain Description
            const movieDescription=document.createElement('h4')
            movieDescription.innerHTML=""
            movieDescription.textContent="Description: "+movie.description//asssign  content from json


            //create an add cart button
            const addCartBtn = document.createElement('button')
            addCartBtn.id='addcartbtn'
            addCartBtn.textContent="Add to Cart"


          //Appending all created tags
            divMoviesContainer.appendChild(divMovieContainer)
            divMovieContainer.appendChild(img)
            divMovieContainer.appendChild(h2)
            divMovieContainer.appendChild(movieLength)
            divMovieContainer.appendChild(movieCapacity)
            divMovieContainer.appendChild(movieShowtime)
            divMovieContainer.appendChild(movieDescription)
            divMovieContainer.appendChild(addCartBtn)


            //add item to cart event listener on button
            //addCartBtn.addEventListener('click', addcart)
            
            //function addcart(){
              //  let itemsoncart=document.getElementById('count-items').textContent
                
               // itemsoncart.textContent=itemsoncart++
                //console.log(itemsoncart)
            //}
            

        });//movies.foreach ends here

    })//.then ends here

}
//call
displayData()






















// //create h3 tag
            // const h3=document.createElement('h3')
            // h3.innerHTML=""
            // //create em tag
            // const em= document.createElement('em')
            // em.innerHTML=""
            // //now assign em content
            // em.textContent="Capacity :"+movie.capacity
            // //now lets append em into h2
            // h3.appendChild(em)
            
            // divMovieContainer.appendChild(h3)

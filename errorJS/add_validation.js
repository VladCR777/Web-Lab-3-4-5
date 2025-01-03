// document.addEventListener('DOMContentLoaded', function () {
//     console.log('DOM fully loaded and parsed'); 

    
//     const movieCardsContainer = document.getElementById('moviesContainer');
//     const addFilmForm = document.getElementById('addFilmForm');
//     console.log(movieCardsContainer); 

    
//     if (!movieCardsContainer) {
//         console.error('moviesContainer not found');
//         return; 
//     }

    

//     addFilmForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const name = document.getElementById('name').value.trim();
//         const duration = parseInt(document.getElementById('duration').value.trim());
//         const reviews = parseInt(document.getElementById('reviews').value.trim());

//         if (name === '') {
//             alert('Title cannot be empty!');
//             return;
//         }

//         if (isNaN(duration) || duration <= 0) {
//             alert('Duration must be a positive number!');
//             return;
//         }


//         if (isNaN(reviews) || reviews < 0) {
//             alert('Reviews must be a non-negative number!');
//             return;
//         }

        
//         fetch('http://localhost:5050/api/items', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ name, duration, reviews }) 
//         })
//             .then(response => {
//                 if (response.ok) {
//                     return response.json(); 
//                 } else {
//                     throw new Error('Error adding film');
//                 }
//             })
//             .then(data => {
                
//                 addFilmToPage(data);
//                 alert('Film successfully added!');
//                 window.location.href = 'index.html'; 
//             })
//             .catch(err => {
//                 console.error(err);
//                 alert('Error adding film');
//             });
//     });
// });


// function addFilmToPage(film) {
//     const movieCardsContainer = document.getElementById('moviesContainer');

//     if (!movieCardsContainer) {
//         console.error('moviesContainer not found');
//         return; 
//     }


//     const card = document.createElement('div');
//     card.classList.add('card');
//     if (!film.id) {
//         console.error('Film ID is missing:', film);
//         return;
//     }
//     card.setAttribute('data-id', film.id); 
//     card.setAttribute('data-title', film.name); 
//     card.setAttribute('data-duration', film.duration);
//     card.setAttribute('data-reviews', film.reviews);


    
//     card.innerHTML = `
//         <img src="https://via.placeholder.com/235x150" alt="Placeholder Image"> <!-- Додаємо картинку -->
//         <div class="card-content">
//             <h3>${film.name}</h3>
//             <p>Duration: ${film.duration} min</p>
//             <p>Reviews: ${film.reviews}</p>
//         </div>
//         <div class="card-buttons">
//             <button class="edit-button">Edit</button>
//             <button class="delete-button">Delete</button>
//         </div>
//     `;

//     const editButton = card.querySelector('.edit-button');
//     editButton.addEventListener('click', function() {
//         alert("treyuit");
//     });

//     // const deleteButton = card.querySelector('.delete-button');
//     // deleteButton.addEventListener('click', function() {
        
//     //     movieCardsContainer.removeChild(card); 
//     //     alert(film.name + ' has been deleted!'); 

//     // });

    
//     movieCardsContainer.appendChild(card);
// }



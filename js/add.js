const EDIT_BUTTON_PREFIX = 'edit-film-';
const DELETE_BUTTON_PREFIX = 'delete-film-';

export const addItemToPage = ({ id, name, duration, reviews }, onRemoveItem) => { // + onEditItem
    const itemsContainer = document.getElementById("moviesContainer");

    const itemHTML = `
    <div class="movie-card" id="${id}">
        <h3>${name}</h3>
        <p>Duration: ${duration} mins</p>
        <p>Reviews: ${reviews}</p>
        <button id="${EDIT_BUTTON_PREFIX}${id}" class="edit-btn">Edit</button>
        <button id="${DELETE_BUTTON_PREFIX}${id}" class="delete-btn">Delete</button>
    </div>
`;

    itemsContainer.insertAdjacentHTML("beforeend", itemHTML);

    document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`).addEventListener("click", () => {
        const filmData = { id, name, duration, reviews }; // Заповнити актуальними даними
        onEditItem(filmData);
        window.location.href = `edit_film.html?id=${id}`;
    });
    
    document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`).addEventListener("click", () => {
        onRemoveItem(id);
    });
};

function onEditItem({ id, name, duration, reviews }) {
    // Зберігаємо дані фільму в localStorage
    const filmData = { id, name, duration, reviews };
    localStorage.setItem("editFilm", JSON.stringify(filmData));

    // Перенаправляємо на сторінку редагування
    window.location.href = `edit_film.html?id=${id}`;
};


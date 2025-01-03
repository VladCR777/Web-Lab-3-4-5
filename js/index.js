import { deleteFilm, getAllFilms } from "./api.js";
import { addItemToPage } from "./add.js";

let films = [];

const fetchAllFilms = async () => {
    films = await getAllFilms();
    renderItemsList(films, removeFilm);
};


const removeFilm = async (id) => {
    await deleteFilm(id);
    fetchAllFilms();
};


export const renderItemsList = (items, onRemoveItem) => {
    const itemsContainer = document.getElementById("moviesContainer");
    itemsContainer.innerHTML = "";
    items.forEach(item => addItemToPage(item, onRemoveItem));
};

fetchAllFilms();


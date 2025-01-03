import { updateFilm } from "./api.js";

let item = null;

document.addEventListener("DOMContentLoaded", () => {
    item = JSON.parse(localStorage.getItem("editFilm"));
    if (item) {
        document.getElementById("name-edit").value = item.name;
        document.getElementById("duration-edit").value = item.duration;
        document.getElementById("reviews-edit").value = item.reviews;
    } else {
        alert("No found item");
    }
});

document.getElementById("edit-button").onclick = async function (event) {
    event.preventDefault()
    const newName = document.getElementById("name-edit").value;
    const newDuration = document.getElementById("duration-edit").value;
    const newReviews = document.getElementById("reviews-edit").value;
    

    if (newName === "" || newDuration === "" || !newReviews === "" || parseFloat(newReviews) < 0) {
        alert("All fields must be filled!");
    } else {
        await updateFilm(item.id, {
        "name": newName,
        "duration": newDuration,
        "reviews": newReviews,
        });
    }

    document.getElementById("name-edit").value = "";
    document.getElementById("duration-edit").value = "";
    document.getElementById("reviews-edit").value = "";
    
    alert("Tree updated!");
    localStorage.removeItem("editFilm");
    window.location.href = "index.html";
};

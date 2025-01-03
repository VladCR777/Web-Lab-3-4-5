const BASE_URL = "http://localhost:1337/api";
const RESOURSE_URL = `${BASE_URL}/films`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        const response = await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
        return response.ok ? response.json() : Promise.reject("Failed to fetch data");
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};

// Операції з фільмами
export const getAllFilms = () => baseRequest({ method: "GET" });
export const postFilm = (body) => baseRequest({ method: "POST", body });
export const updateFilm = (id, body) => baseRequest({ urlPath: `/${id}`, method: "PUT", body });
export const deleteFilm = (id) => baseRequest({ urlPath: `/${id}`, method: "DELETE" });





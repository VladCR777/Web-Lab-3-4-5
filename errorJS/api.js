// export async function getAllFilms() {
//     try {
//         const response = await fetch('http://localhost:5050/items');
//         if (!response.ok) {
//             throw new Error('Failed to fetch films');
//         }
//         const trees = await response.json();
//         return trees;
//     } catch (error) {
//         console.error('Error loading film:', error);
//         return [];
//     }
// }

// export async function postFilm(body) {
//     try {
//         const reqParams = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(body)
//         };

//         return await fetch('http://localhost:5050/items', reqParams);
//     } catch (error) {
//         console.error('Error posting film:', error);
//     }
// }

// export async function putFilm(id, treeData) {
//     try {
//         const response = await fetch(`http://localhost:5050/items/${movieID}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(treeData)
//         });
//         if (!response.ok) {
//             throw new Error('Failed to update film');
//         }
//     } catch (error) {
//         console.error('Error updating film:', error);
//     }
// }

// export async function deleteFilm(id) {
//     try {
//         const response = await fetch(`http://localhost:5050/items/${movieID}`, {
//             method: 'DELETE'
//         });
//         if (!response.ok) {
//             throw new Error('Failed to delete film');
//         }
//     } catch (error) {
//         console.error('Error deleting film:', error);
//     }
// }
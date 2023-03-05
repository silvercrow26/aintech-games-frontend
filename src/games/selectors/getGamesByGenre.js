import { useGameStore } from "../index";

// export const getGamesByGenre = (genre) => {
//     const { games, genres } = useGameStore();
//     const activeGenre = genres.find(item => item.index === genre);
//     let tempArray = []

//     games.forEach(element => {
//         const data = element.detail[0].genres.filter(item => item.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ').join('-') === genre);
//         const exist = tempArray.some(game => game._id === element._id);
//         if (data.length != 0 && !exist) {
//             tempArray = [...tempArray, element]
//         }
//     });

//     return {
//         tempArray,
//     }
// }

export const getGamesByGenre = (genre) => {
    const { games, genres } = useGameStore();
    const activeGenre = genres.find(item => item.index === genre);
    const tempArray = [];

    games.forEach(element => {
        const data = element.detail[0].genres.filter(item => item.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ').join('-') === genre);
        const exist = tempArray.some(game => game._id === element._id);
        if (data.length != 0 && !exist) {
            tempArray.push(element);
        }
    });

    return {
        tempArray,
        activeGenre
    };

}

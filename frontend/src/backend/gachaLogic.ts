import { playerdatas } from "./const"

function getRandomElements<T>(list: T[], count: number): T[] {
    if (count > list.length) {
        throw new Error("Count cannot be greater than the list length");
    }

    const shuffled = [...list];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }

    return shuffled.slice(0, count);
}


const mainLogic = () =>{
    const players = getRandomElements(playerdatas,3);
    return players
}

export default mainLogic
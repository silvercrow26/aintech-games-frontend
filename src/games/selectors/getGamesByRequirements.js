import { useEffect, useState } from "react";
import { useGameStore } from "../index";

export const getGamesByRequirements = (requirements) => {
    const { games, startLoadingGames } = useGameStore();
    const [req, setReq] = useState('')

    const validRequirement = ['altos-requisitos', 'medios-requisitos', 'bajos-requisitos'];
    if (!validRequirement.includes(requirements)) {
        return console.log('No existe.')
    }

    useEffect(() => {
        if (games.length != 0) {
            const data = games.filter(game => game.requirements === requirements);
            setReq(data);
        }
    }, [games])

    return {req}
}
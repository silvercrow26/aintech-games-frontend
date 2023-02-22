import { useGameStore } from "../hooks/useGameStore";

export const getGamesByRequirements = (requirements) => {
    const { games } = useGameStore();

    const validRequirement = ['altos-requisitos','medios-requisitos', 'bajos-requisitos'];
    if(!validRequirement.includes(requirements)){
        return console.log('No existe.')
    }

    return games.filter( game => game.requirements === requirements );

}
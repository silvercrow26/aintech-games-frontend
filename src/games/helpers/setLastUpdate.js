import { useEffect, useState } from "react";
import es from 'date-fns/locale/es';
import { format } from 'date-fns';

export const setLastUpdate = (games) => {
    const [lastUpdate, setLastUpdate] = useState('');

    useEffect(() => {
        if (games[0] !== undefined) {
            setLastUpdate(format(new Date(games[games.length - 1].updatedAt), 'PPpp a', { locale: es }));
        }
    }, [games.length]);

    if(lastUpdate ===""){
        return "No disponible."
    }
    return lastUpdate;
}


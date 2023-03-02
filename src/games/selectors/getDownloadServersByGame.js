import { useDownloadServerStore } from "../index";


export const getDownloadServersByGame = (gameId) => {
    const { downloadServers } = useDownloadServerStore();
    return downloadServers.filter( downloadServer => downloadServer.game === gameId );
} 
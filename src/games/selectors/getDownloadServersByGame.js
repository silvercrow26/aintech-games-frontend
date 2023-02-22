import { useDownloadServerStore } from "../hooks/useDownloadServerStore";


export const getDownloadServersByGame = (gameId) => {
    const { downloadServers } = useDownloadServerStore();
    return downloadServers.filter( downloadServer => downloadServer.game === gameId );
} 
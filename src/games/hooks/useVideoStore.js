import { useDispatch, useSelector } from 'react-redux'
import { onAddVideo, onDeleteVideo, onLoadingVideos, onSetActiveVideo, onSetVideos, onUpdateVideo } from '../../../store/index'
import gamesApi from '../../api/gamesApi';

export const useVideoStore = () => {
    const { videos, isLoading, activeVideo, errorMessage, onSetError } = useSelector(state => state.video);
    const dispatch = useDispatch();

    const setActiveVideo = (video) => {
        dispatch(onSetActiveVideo(video));
    }

    const startLoadingVideos = async () => {
        try {
            dispatch(onLoadingVideos());
            const { data } = await gamesApi.get('/videos/');
            dispatch(onSetVideos(data.msg));
        } catch (error) {
            console.log(error);
        }
    }

    const startSavingVideo = async (video) => {
        try {
            if (video._id) {
                await gamesApi.put(`/videos/${video._id}`, video);
                dispatch(onUpdateVideo(video));
                return;
            }
            const data = await gamesApi.post('/videos/', video);
            dispatch(onAddVideo({ ...data, _id: data._id }));
            return data;

        } catch (error) {
            console.log(error);
        }
    }

    const startDeleteVideo = async (video) => {
        try {
            await gamesApi.delete(`/videos/${video._id}`);
            dispatch(onDeleteVideo());
        } catch (error) {
            dispatch(onSetError(error.response.data.msg));
            setTimeout(() => {
                dispatch(onClearError());
            }, 10);
        }

    }

    return {

        videos,
        isLoading,
        errorMessage,
        activeVideo,

        startLoadingVideos,
        setActiveVideo,
        startSavingVideo,
        startDeleteVideo,
    }
}
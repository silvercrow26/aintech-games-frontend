import { useDispatch, useSelector } from "react-redux"
import { onClearErrorMessage, onChecking, onLogin, onLogout } from "../../../store/index";
import gamesApi from "../../api/gamesApi";


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await gamesApi.post('/auth/login', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin(data.user));
        } catch (error) {
            setTimeout(() => {
                dispatch(onLogout('Credenciales incorrectas'));
            }, 3000);
            setTimeout(() => {
                dispatch(onClearErrorMessage());
            }, 3100);
        }
    }

    const startRegister = async ({ email, password, username }) => {
        dispatch(onChecking());
        try {
            const { data } = await gamesApi.post('/auth/register', { email, password, username });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin(data.user));
        } catch (error) {
            dispatch(onLogout(error.response.data?.msg || '--'));
            setTimeout(() => {
                dispatch(onClearErrorMessage());
            }, 10);
        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogout());
        try {
            const { data } = await gamesApi.get('/auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin(data.user));
        } catch (error) {
            localStorage.clear();
            setTimeout(() => {
                dispatch(onLogout());
            }, 3000);
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }

    return {

        //* Propiedades
        status,
        user,
        errorMessage,

        //* Métodos
        startLogin,
        checkAuthToken,
        startLogout,
        startRegister,
    }
}
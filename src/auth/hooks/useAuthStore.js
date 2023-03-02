import { useDispatch, useSelector } from "react-redux"
import { onClearErrorMessage, onChecking, onLogin, onLogout } from "../../../store/index";
import gamesApi from "../../api/gamesApi";


export const useAuthStore = () => {

    const { status, user, error } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispatch(onChecking());
        try {

            const { data } = await gamesApi.post('/auth/login', { email, password });
            console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin(data.user));

        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
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
            dispatch(onLogout());
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
        error,

        //* Métodos
        startLogin,
        checkAuthToken,
        startLogout,
    }
}
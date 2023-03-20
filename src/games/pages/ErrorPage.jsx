import React from 'react'
import error from '../../assets/error.png'
export const ErrorPage = () => {
    return (
        <>
            <div className='container text-center' style={{
                marginTop: "10%",
            }}>
               
                <img src={error} alt="Error 404 esta pagina no se encuentra disponible" className="w-100" />
               
            <h4 className="text-light mt-5 pb-5">Esta pagina no se encuentra <b>disponible</b>.</h4>

            </div>

        </>
    )
}

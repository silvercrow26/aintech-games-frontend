import React from 'react'

export const DMCA = () => {

    const web = 'Aintech.online';
    const autores = 'autores/as';
    const correo = 'aintechsoftware@gmail.com'

    return (
        <div className='container mt-5 p-5 cardDetailGame'>
            <h4 className='text-center mb-5'>DMCA</h4>
            <p> {web} pone en conocimiento de las personas autoras, en adelante "{autores}", el presente documento de Ley de derechos de autor del milenio digital (DMCA).</p>

            <p>La lectura del mismo permitirá a los {autores} conocer el modo en que {web} recopila y trata la información publicada en la página web.</p>

            <p>{web} recopila información de sus publicaciones de diversos sitios de internet, incluyendo steam, para luego mostrar dicha información a los usuarios. Entre la información recopilada
                se encuentra el nombre del título(videojuego), requerimientos, especificaciones, desarrolladores, enlaces externos de compra y descarga, esto quiere decir que, {web} en ningun momento aloja
                en sus servidores dichos enlaces, para estar en correspondencia con la Ley de derechos de autor del milenio digital. Sin embargo {web} eliminará una publicación si los {autores} lo solicitan.
            </p>
            <p>{web} no se responsabiliza por el uso indebido o la mala interpretación que se haga sobre la información mostrada en {web}, para más información, revise los
                terminos y condiciones de uso en el siguiente enlace: https://aintech.online/terminos-y-condiciones. {web} tampoco es
                responsable del material al que se pueda acceder mediante los enlaces a tercernos, esa responsabilidad recae únicamente en dichos sitios web.</p>

            <p>Si es un autor y está en disconformidad o siente que se están infringiendo sus derechos, puede comunicarse con nosotros mediante el correo electrónico {correo} para dar
                de baja la publicación, siempre y cuando se pueda comprobar que es el legítimo propietario.</p>
        </div>
    )
}

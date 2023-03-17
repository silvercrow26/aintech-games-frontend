import React from 'react'

export const DMCA = () => {

    const web = 'Aintech.online';
    const autores = 'autores/as';
    const correo = 'aintechsoftware@gmail.com'

    return (
        <div className='container mt-5 p-5 cardDetailGame'>
            <h4 className='text-center mb-5'>DMCA</h4>
            <p> {web} pone en conocimiento de las personas autoras, en adelante "{autores}", el presente documento de
                Ley de derechos de autor del milenio digital (DMCA).</p>

            <p>La lectura del mismo permitirá a los {autores} conocer el modo en que {web} recopila y trata la información publicada en la página web.</p>

            <p>{web} recopila información de sus publicaciones de diversos sitios de internet, incluyendo steam, para
                luego mostrar dicha información a los usuarios. Entre la información recopilada
                se encuentra el nombre del título(videojuego), requerimientos, especificaciones, desarrolladores, enlaces <b>externos</b> de
                compra y descarga, esto quiere decir que, {web} en ningun momento aloja
                en sus servidores dichos enlaces.
            </p>
            <p>
                {web} no es responsable del contenido de videojuegos alojado en sitios web de terceros.
                Por lo tanto, los avisos de infracción de derechos de autor deben dirigirse a los sitios web de terceros
                responsables donde se aloja el contenido. Si cree que alguno de los contenidos anteriores tiene enlaces a
                contenido que infringe sus derechos de autor, comuníquese con los sitios web de terceros correspondientes
                para eliminar su contenido de Internet.
            </p>
            <p>{web} no se responsabiliza por el uso indebido o la mala interpretación que se haga sobre la información mostrada en {web}, para más detalles, revise los
                terminos y condiciones de uso en el siguiente enlace: https://aintech.online/terminos-y-condiciones. {web} tampoco es
                responsable del material al que se pueda acceder mediante los enlaces a tercernos, esa responsabilidad recae únicamente en dichos sitios web.</p>

            <p>Si los {autores} presentes están en disconformidad o sienten que se están infringiendo sus
                derechos, puede comunicarse con nosotros mediante el correo electrónico: {correo}.</p>
        </div>
    )
}

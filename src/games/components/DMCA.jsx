import React from 'react'

export const DMCA = () => {

    const web = 'aintech.online';
    const autores = 'autores/as';

    return (
        <div className='container mt-5 p-5 cardDetailGame'>
            <h4 className='text-center mb-5'>DMCA</h4>
            <p> {web} pone en conocimiento de las personas autoras, en adelante "{autores}", el presente documento de Ley de derechos de autor del milenio digital (DMCA).</p>

            <p>La lectura del mismo permitirá a los {autores} conocer el modo en que {web} recopila y trata la información publicada en la página web.</p>

            <p><b>Recolección de información</b></p>
            <p>{web} recopila información de las publicaciones de diversos sitios, incluyendo steam, para presentarla a los usuarios de una forma diferente, adjuntando links
                externos para adquirir los videojuegos publicados, así como también links de descarga, los cuales no se encuentran alojados en los servidores de {web} esto
                quiere decir que la información que alojamos no tiene archivos que puedan tener derechos de autor.</p>


        </div>
    )
}

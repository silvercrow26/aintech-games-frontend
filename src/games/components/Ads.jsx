import React, { useEffect } from 'react'
import { Adsense } from '@ctrl/react-adsense';
export const Ads = () => {

    return (
        <>
            <div className='imagenMostWanted'>
                <Adsense
                    className="adsbygoogle"
                    style={{ display: 'block' }}
                    format="fluid"
                    layout="-c3-g+h+bq-mp"
                    client="ca-pub-4288271666568125"
                    slot="2204313702" />
            </div>

        </>
    )
}

import React, { useEffect } from 'react'
import { Adsense } from '@ctrl/react-adsense';
export const Ads = () => {

    return (
        <>
            <div className='imagenMostWanted'>
                <Adsense
                    className="adsbygoogle"
                    style={{ display: 'block' }}
                    format="auto"
                    responsive='true'
                    client="ca-pub-4288271666568125"
                    slot="8836458590" />
            </div>

        </>
    )
}

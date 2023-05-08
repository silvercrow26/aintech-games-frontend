import React, { useEffect } from 'react'
import { Adsense } from '@ctrl/react-adsense';

export const Ads = () => {


    return (
        <>
            <Adsense
                client="ca-pub-4288271666568125"
                slot="2204313702"
                style={{ display: 'block' }}
                layout="-c3-g+h+bq-mp"
                format="fluid"
            />
        </>
    )
}

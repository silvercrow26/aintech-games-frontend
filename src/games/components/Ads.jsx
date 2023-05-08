import React, { useEffect } from 'react'

export const Ads = () => {

    const componentDidMount = () => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    useEffect(() => {
        componentDidMount();
    }, [])

    return (
        <>
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-format="fluid"
                data-ad-layout-key="-c3-g+h+bq-mp"
                data-ad-client="ca-pub-4288271666568125"
                data-ad-slot="2204313702"></ins>
        </>
    )
}

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
                data-ad-client="ca-pub-4288271666568125"
                data-ad-slot="8298384110"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </>
    )
}

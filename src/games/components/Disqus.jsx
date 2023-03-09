import { DiscussionEmbed } from 'disqus-react'
import React from 'react'

export const Disqus = ({ url, id, name }) => {

  return (
    <div className="text-light container">
      <DiscussionEmbed
        shortname='aintechonline'
        config={
          {
            url: url,
            identifier: id,
            title: name,
            language: 'es_ES',

          }
        }
      />
    </div>
  )
}

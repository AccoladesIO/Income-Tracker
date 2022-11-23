import React from 'react'

const DisplayList = ({income}) => {
  return (
    <article className="display-article">
        <header className="heading-main">
            <span className="color">
                Total Income
            </span>
            <span className="color">${income}</span>
        </header>
        <div className="article">

        </div>
    </article>
  )
}

export default DisplayList
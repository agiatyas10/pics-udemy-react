import React from 'react'

function ImageShow({ image }) {
    return (
        <div>
            <img src={image.urls.small} alt={image.alt_desctiption} />
        </div>
    )
}


export default ImageShow

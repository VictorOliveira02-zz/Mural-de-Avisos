import React from 'react'
import { Post, BtnDelete } from './style'


const Body = () => {
    return (
        <>
            <Post>
                <h1 className="post-title">TITULO DO AVISO</h1>
                <p className="post-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.</p>
                <BtnDelete>
                    <img src="trash.webp" alt="trash icon" width="40" height="40" />
                </BtnDelete>
            </Post>
        </>
    )
}

export default Body;
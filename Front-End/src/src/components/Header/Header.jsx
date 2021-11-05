import React, { useState } from 'react'
import { Segment, InputTitle, Form, TextArea, BtnSubmit, BoxRigth, DivImgs } from './style'
import postApi from '../../api/data.api'

const InitialState = {
    title: '',
    description: ''
}

const Header = () => {
    const [newPost, setNewPost] = useState({ ...InitialState })

    const newPosts = async () => {
        try {
            const response = await postApi.addPost(newPost.title, newPost.description)
            setNewPost(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Segment>
                <BoxRigth>
                    <h1>Mural de Avisos</h1>
                    <img src="icon.webp" alt="Logo" width="100" height="100" />
                    <img src="board.webp" alt="Logo" width="100" height="100" />
                    <DivImgs>
                        <a
                            href="https://github.com/VictorOliveira02/Mural-de-Avisos"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ "cursor": 'pointer' }}
                        >
                            <img src="github.png" alt="Logo-Github" width="50" height="40" />
                        </a>
                    </DivImgs>

                </BoxRigth>
                <Form onSubmit={newPosts}>
                    <InputTitle
                        required
                        placeholder='Digite o Título'
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                        value={newPost.title}
                    />
                    <TextArea
                        required
                        placeholder='Digite o Aviso...'
                        onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
                        value={newPost.description}
                    />
                    <BtnSubmit type="submit">Avisar!</BtnSubmit>
                </Form>
            </Segment>
        </>
    )
}
export default Header;
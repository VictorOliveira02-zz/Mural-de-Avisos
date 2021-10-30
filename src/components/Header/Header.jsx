import React from 'react'
import { Segment, InputTitle, Form, TextArea, BtnSubmit, BoxRigth } from './style'

const Header = () => {
    return (
        <>
            <Segment>
                <BoxRigth>
                    <h1>Mural de Avisos</h1>
                    <img src="icon.webp" alt="Logo" width="100" height="100" />
                </BoxRigth>
                <Form>
                    <InputTitle placeholder='Digite o Título' ></InputTitle>
                    <TextArea placeholder='Digite o Aviso' ></TextArea>
                    <BtnSubmit type="submit" >Avisar!</BtnSubmit>
                </Form>
            </Segment>
        </>
    )
}

export default Header;
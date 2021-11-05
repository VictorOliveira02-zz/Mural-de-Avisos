import styled from 'styled-components'

export const Segment = styled.div`
    background-image: linear-gradient(to right, #574AE8 , #3EA1DB);
    height: 200px;
    width: 100%;
    border-radius: 0px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;

    @media (max-width: 768px) {

    }
`;

export const BoxRigth = styled.div`
    display: block;
`;

export const DivImgs = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
`;

export const Form = styled.form`
    width:100%;
    height:100%;
    display: grid;
`;


export const InputTitle = styled.input`
    height: 50%;
    width: 50%;
    border-radius: 5px;
    margin-top: 10px;

    @media (max-width: 768px) {
        width: 80%;
}
`;

export const TextArea = styled.textarea`
    height: 85%;
    width: 80%;
    margin-top: -15px;
    margin-bottom: 0;
    border-radius: 5px;
`;

export const BtnSubmit = styled.button`
    background-color: #23CF5C;
    margin-top: 0px;
    height: 50%;
    width: 80%;
    font-size: 1.5em;
    color: white;
    cursor: pointer;
`;
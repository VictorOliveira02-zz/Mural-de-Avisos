import styled from 'styled-components'


export const Post = styled.div`
    background: #F3F5F7;
    border-radius: 10px;
    height: 195px;
    max-width: 900px;
    margin-left: 18%;
    margin-top: 25px;
    border: black solid 1px;
    align-content: center;
    display: grid;

    > .post-title{
        text-align: center;
    }

    > .post-content{
        text-align: center;
    }

    @media (max-width: 768px) {
        height: 100%;
        width: 95%;
        margin: 5px;
    }
`;

export const BtnDelete = styled.button`
    cursor: pointer;
    background: #ff5252;
        :hover{
            background: red;
        }
        text-align: center;
`;
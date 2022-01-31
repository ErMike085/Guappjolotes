import styled from 'styled-components'

export const ContForm = styled.form`
    width: 300px;
    background: white;
    border-radius: 10px;
    border: 1px solid black;
    margin: auto;
    padding: 2%;
    display: flex;
    flex-direction: column;
`
export const Titulo = styled.h2`
    color:#030303 ;
    text-align: center;
`
export const ContImg = styled.div`
    width: 120px;
    height: 120px;
    margin: auto;
`
export const Logo = styled.img`
    width: 100%;

`
export const Inputs = styled.input`
    border-radius: 6px;
    border: 2px solid #aaaaaa;
    padding: 1%;
    text-align: center;
    font-weight: bolder;
    width: 60%;
    margin: auto;
    margin-bottom: 2%;
    :focus{
        border: 2px solid #FA4A0C;
    }
`
export const BotonIngresar = styled.button`
    width: 60%;
    margin: auto;
    border-radius: 6px;
    background: transparent;
    border: 2px solid #FA4A0C;
    color: #FA4A0C;
    font-weight: bolder;
    :focus{
        border: 2px solid transparent;
        background: #FA4A0C;
        color: white;
    }
`
export const CrearC = styled.p`
    text-align: center;
`
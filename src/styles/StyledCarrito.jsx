import styled from 'styled-components'

export const Cont = styled.div`
    width: 360px;
    padding:1%;
    margin:auto;
    text-align:center;
    border:1px solid black;
`
export const MiniCards = styled.ul`
    width:320px;
    border-radius:8px;
    margin-top:10%;
    
`
export const CardMini = styled.li`
    list-style:none;
    display:flex;
    flex-direction:row;
    
    
`
export const ImgProd = styled.img`
    width:60px;
`
export const NombreP = styled.h2`
    font-size:1rem;
    margin:auto;
`
export const PrecioP = styled.p`
    color:#FA4A0C;
    margin:auto;
`
export const ContTotal = styled.div`
    width:300px;
    border-radius:8px;
    background:white;
    margin:auto;
    
`
export const TotalT = styled.h2`
    font-size:1rem;
    text-align:center;
    
`
export const PrecioTotal = styled.span`
    color:#FA4A0C;
`
export const BtnPagar = styled.button`
    font-weight:bolder;
    font-size:1.05rem;
    width:260px;
    margin:auto;
    color:white;
    background:#FA4A0C;
    border-radius:12px;
    border:none;
    padding:1%;
`
export const BtnEliminar = styled.button`
    float:right;
    text-decoration: none;
  color: #FA4A0C;
  border-radius: 4px;
  border:2px solid #FA4A0C ;
  padding: 1%;
  background:white;
`
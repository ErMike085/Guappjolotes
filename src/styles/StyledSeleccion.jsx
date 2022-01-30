import styled from "styled-components";

export const Cont = styled.div`
  width: 360px;
  margin: auto;
  padding: 1%;
  border: 1px solid black;
`;
export const Navb = styled.nav`
  height: 5vh;
  padding: 2%;
  padding-top: 5%;
`;
export const Atras = styled.button`
  border: none;
  padding: 1%;
  border-radius: 100%;
  :hover {
    background: #75747458;
  }
`;
export const ContProduct = styled.div`
  width: 200px;
  margin: auto;
`;
export const Product = styled.img`
  width: 100%;
`;
export const NombreProd = styled.h3`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
`;
export const PrecioProd = styled.h4`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #fa4a0c;
`;
export const Contador = styled.div`
  width: 130px;
  display: flex;
  background: white;
  border-radius: 8px;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
export const BotonesCont = styled.button`
  margin: 3%;
  font-size: 19px;
  border: none;
  background: white;
  color: #a1a1a1;
  cursor: pointer;
  :focus {
    color: black;
  }
`;
export const Cantidad = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 2%;
  margin: auto;
`;
export const Subtitulo = styled.h4`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-left: 4%;
`;
export const ContSabores = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
export const Sabores = styled.img`
  width: 64px;
  margin: auto;
  opacity: 0.4;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;
export const SegSubtitulo = styled.h4`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-left: 1%;
`;
export const Descrip = styled.p`
  color: grey;
  text-align: start;
`;
export const ContAdicion = styled.form`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 0.5rem;
  padding: 2%;
`;
export const ItemBebidas = styled.div`
  width: 142px;
  border-radius: 8px;
  background: white;
  padding: 3%;
  margin: auto;
  cursor: pointer;
`;
export const Check = styled.input`
  float: right;
`;
export const Bebida = styled.img`
  width: 64px;
`;
export const NombreBe = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.9rem;
`;
export const PrecioBe = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.8rem;
  color: #fa4a0c;
`;
export const BotonAgregar = styled.button`
  width: 300px;
  background: #fa4a0c;
  color: white;
  border-radius: 15px;
  border: none;
  margin: auto;
  padding: 4%;
  :focus {
    background: #f13202;
  }
`;

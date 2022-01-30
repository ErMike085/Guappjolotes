import React from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import { BsPlusCircle } from 'react-icons/bs'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { Atras, Bebida, BotonAgregar, BotonesCont, Cantidad, Check, Cont, ContAdicion, Contador, ContProduct, ContSabores, Descrip, ItemBebidas, Navb, NombreBe, NombreProd, PrecioBe, PrecioProd, Product, Sabores, SegSubtitulo, Subtitulo } from '../styles/StyledSeleccion';

const Seleccion = () => {

    return (

        <Cont>
            <Navb>
                <Atras ><IoIosArrowBack /></Atras>
            </Navb>
            <ContProduct>
                <Product src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642714718/guappjolota/G-VERDE_ktkshe.png" alt="Prod" />   
            </ContProduct>
            <center>
                <NombreProd>Guajolota de Tamal Verde</NombreProd>
                <PrecioProd>$25 MXN</PrecioProd>
            </center>
            <Contador>
                <BotonesCont><AiOutlineMinusCircle /></BotonesCont>
                <Cantidad>0</Cantidad>
                <BotonesCont><BsPlusCircle /></BotonesCont>
            </Contador>

            <Subtitulo>Sabor</Subtitulo>
            <ContSabores>
                <Sabores src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642715052/guappjolota/verde_syxdii.png" alt="Sabor" />
                <Sabores src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642715053/guappjolota/mole_endv5y.png" alt="Sabor" />
                <Sabores src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642715053/guappjolota/rajas_tbfmg1.png" alt="Sabor" />
                <Sabores src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642715053/guappjolota/pi%C3%B1a_ank3us.png" alt="Sabor" />
                <Sabores src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642715053/guappjolota/pasas_v8wwvy.png" alt="Sabor" />
                <Sabores src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642715052/guappjolota/guayaba_njp1fu.png" alt="Sabor" />
            </ContSabores>
            <SegSubtitulo>Guajolocombo</SegSubtitulo>
            <Descrip>Selecciona la bebida que más te guste y disfruta de tu desayuno</Descrip>
            <ContAdicion>
                <ItemBebidas>
                    <Check type="checkbox" name="" id="" />
                    <Bebida src="https://res.cloudinary.com/dzyyi4p7x/image/upload/v1636767989/Guappjolotes%20-%20Sprint%202/bebidas/bebida-champurrado_rgdbrt.png" alt="bebida" />
                    <NombreBe>Champurrado</NombreBe>
                    <PrecioBe>+ $12 MXN</PrecioBe>
                </ItemBebidas>
                <ItemBebidas>
                <Check type="checkbox" name="" id="" />
                    <Bebida src="https://res.cloudinary.com/dzyyi4p7x/image/upload/v1636767989/Guappjolotes%20-%20Sprint%202/bebidas/bebida-arroz_ogcu5h.png" alt="bebida" />
                    <NombreBe>Atole de Arroz</NombreBe>
                    <PrecioBe>+ $12 MXN</PrecioBe>

                </ItemBebidas>
                <ItemBebidas>
                    <Check type="checkbox" name="" id="" />
                    <Bebida src="https://res.cloudinary.com/dzyyi4p7x/image/upload/v1636767989/Guappjolotes%20-%20Sprint%202/bebidas/bebida-chocolate_ovrnuj.png" alt="bebida" />
                    <NombreBe>Chocolate caliente</NombreBe>
                    <PrecioBe>+ $12 MXN</PrecioBe>

                </ItemBebidas>
                <ItemBebidas>
                    <Check type="checkbox" name="" id="" />
                    <Bebida src="https://res.cloudinary.com/dzyyi4p7x/image/upload/v1636767989/Guappjolotes%20-%20Sprint%202/bebidas/bebida-cafe_njxxpz.png" alt="bebida" />
                    <NombreBe>Café negro</NombreBe>
                    <PrecioBe>+ $12 MXN</PrecioBe>

                </ItemBebidas>
                <BotonAgregar>Agregar </BotonAgregar>
            </ContAdicion>
        </Cont>
    );
};

export default Seleccion;

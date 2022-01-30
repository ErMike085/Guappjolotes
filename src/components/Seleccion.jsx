import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";

const Seleccion = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button>
          <IoIosArrowBack />
        </button>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642714718/guappjolota/G-VERDE_ktkshe.png" alt="Prod" />
      </div>
      <center>
        <h3>Guajolota de Tamal Verde</h3>
        <h4>$25 MXN</h4>
      </center>
      <div>
        <AiOutlineMinusCircle />
        <p></p>
        <BsPlusCircle />
      </div>

      <h5>Sabor</h5>
      <div>
        <img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642715052/guappjolota/verde_syxdii.png" alt="" />
        <img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642715053/guappjolota/mole_endv5y.png" alt="" />
        <img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642715053/guappjolota/rajas_tbfmg1.png" alt="" />
        <img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642715053/guappjolota/pi%C3%B1a_ank3us.png" alt="" />
        <img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642715053/guappjolota/pasas_v8wwvy.png" alt="" />
        <img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642715052/guappjolota/guayaba_njp1fu.png" alt="" />
      </div>
      <h5>Guajolocombo</h5>
      <p>Selecciona la bebida que más te guste y disfruta de tu desayuno</p>
      <div>
        <div>
          <img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642714719/guappjolota/B-CHAMPURRADO_d4bgmp.png" alt="" />
          <p>Champurrado</p>
          <p>+ $12 MXN</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642714718/guappjolota/B-ARROZ_CON_LECHE_cgf6zu.png" alt="" />
          <p>Atole de Arroz</p>
          <p>+ $12 MXN</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642714718/guappjolota/B-CHOCOLATE_jzyh84.png" alt="" />
          <p>Chocolate caliente</p>
          <p>+ $12 MXN</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642714718/guappjolota/B-CAFE_gughuk.png" alt="" />
          <p>Café negro</p>
          <p>+ $12 MXN</p>
        </div>
        <button>Agregar </button>
      </div>
    </div>
  );
};

export default Seleccion;

import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;
const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;
const Precio = styled.p`
  font-size: 50px;
  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;
  return (
    <ResultadoDiv>
      <Precio>
        El precio es: <span>{resultado.PRICE}</span>
      </Precio>
      <Info>
        El precio mas alto del dia: <span>{resultado.HIGHDAY}</span>
      </Info>
      <Info>
        El precio mas bajo del dia: <span>{resultado.LOWDAY}</span>
      </Info>
      <Info>
        Variacion ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Ultima actualizacion: <span>{resultado.LASTUPDATE}</span>
      </Info>
    </ResultadoDiv>
  );
};

Cotizacion.propTypes = {
  resultado: PropTypes.object.isRequired,
};

export default Cotizacion;

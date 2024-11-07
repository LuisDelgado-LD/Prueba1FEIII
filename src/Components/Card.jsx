import React from "react";

const Card = ({estudiante}) => {
  return <div>Hola {estudiante.nombre}, pronto iniciara tu carrera de {estudiante.carrera}</div>;
};

export default Card;
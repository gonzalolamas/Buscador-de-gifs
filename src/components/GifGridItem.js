import React from "react";

export const GifGridItem = ({ title, url }) => {
  //console.log(id, title, url)
  return (
    <div className="card animate__animated animate__bounce animate__faster">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

/* 
Configurar

1. Enzyme
2. Enzyme to Json
3. debe de mostrar el componente correctamente
  * shallow
  * wrapper
  * wrapper .toMatchSnapshot()

Esto lo hacemos en setupTests, counterApp hicimos estas configuraciones
*/

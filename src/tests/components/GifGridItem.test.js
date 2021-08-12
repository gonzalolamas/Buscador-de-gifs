import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { GifGridItem } from "../../components/GifGridItem";

const title = "Hola, soy el título del componente";
const url = "https://imagenredireccion.svg";

const wrapper = shallow(<GifGridItem title={title} url={url} />);

describe("Pruebas en GifGridItem", () => {
  test("debe de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener un párrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe de tener la imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    //console.log(img.prop('src'))
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test('debe de tener animate__faster', () => {
      
    const div = wrapper.find('div');
    //const className = div.prop('className');
    //animate__faster

    expect(div.hasClass('animate__faster')).toBe(true)
    //expect(className.includes('animate__faster')).toBe(false)
})
  
});

import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper= shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  })


  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola value";
    input.simulate("change", {
      target: { value },
    });

    expect(wrapper.find('span').text().trim()).toBe(value)
  });

  test('No debe de postear la info con submit ', () => {
    wrapper.find('form').simulate('submit', {preventDefault(){}})

    expect(setCategories).not.toHaveBeenCalled();
  })

  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    // 1- simular el inputChange
    
    const value = 'Hola value'
    wrapper.find('input').simulate('change', {
      target: {value}
    })

    // 2- simular el submit del form
    wrapper.find('form').simulate('submit', {preventDefault: ()=>{},})

    // 3- setCategories se debe de haber llamado
    expect(setCategories).toHaveBeenCalled()
    expect(setCategories).toHaveBeenCalledTimes(1)
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function))


    // 4- el valor del input debe de estar vacio ''
    expect(wrapper.find('input').text().trim()).toBe('')
  })
});

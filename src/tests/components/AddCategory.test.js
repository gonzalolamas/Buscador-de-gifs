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
  
});

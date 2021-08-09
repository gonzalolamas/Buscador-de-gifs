import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'

import {GifGridItem} from '../../components/GifGridItem';

const title = 'un titulo'
const url = 'https://localhost/algo.jpg'

describe('Pruebas en GifGridItem', () => {
    test('debe de mostrar el componente correctamente', () => {

        const title = 'Hola, soy el título del componente'

        const url = 'https://imagenredireccion.svg'
        
        const wrapper = shallow(<GifGridItem title={title} url={url}/>)

        expect(wrapper).toMatchSnapshot()
    })
    
})
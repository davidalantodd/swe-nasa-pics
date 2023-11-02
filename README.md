# Nasa Pics

## Coach Notes

This week is all about UI testing. The big idea is that testing UI is about ensuring the components function as they should, and that this is a natural place to initiate end-to-end and integration tests.

There are many tools which are aimed at simulating user interaction directly, and many more which test components programatically. Several of these are compatible with familiar tools like jest and mocha.

[MDOC recording](https://drive.google.com/file/d/1VTdThreBb0FAAEhvUSYZGXbZHgiSZ1Vh/view)

## Things to see and do

The file has been configured to run Jest with React Testing Library. Some starter unit tests have been provided for you, but you shoudl feel empowered to add more! A few ideas:
- Create some additional unit tests that test functionality like:
    - Fetching a new picture for a new date and updating the corresponding mock data.
    - Testing that an image resizes when the slider value updates
    - Testing how errors are handled.
- Explore how to write end-to-end, integration, and component tests using [Cypress](https://docs.cypress.io/guides/overview/why-cypress).

### Some example test files

#### SizeSlider.test.js
```
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SizeSlider from '../components/SizeSlider';
import App from '../App';

test('renders size slider component',()=>{
    const mockSetSize = jest.fn()
    render(<SizeSlider size={50} setSize={mockSetSize}/>);
    const sliderElement = screen.getByRole('slider');
    expect(sliderElement).toBeInTheDocument();
})

test('size value set by props',()=>{
    const mockSetSize = jest.fn()
    render(<SizeSlider size={50} setSize={mockSetSize}/>);
    const sliderElement = screen.getByRole('slider');
    expect(sliderElement).toHaveValue('50')
})

test('size value reflects user input',()=>{
    render(<App/>);
    const sliderElement = screen.getByRole('slider');
    fireEvent.change(sliderElement, {target: {value:'100'}})
    expect(sliderElement).toHaveValue('100')
})
```

#### NasaImage.test.js
```
import { render, screen, fireEvent } from '@testing-library/react';
import format from 'date-fns/format';
import App from '../App';

test('default image loads', async () => {
    render(<App />);
    const image = screen.getByRole('img');
    expect(image.src).toContain('loading.jpeg');
});

test('image changes when new date is selected', async () =>{
    render(<App/>);
    const date = format(new Date('07/04/2023'), 'MM/dd/yyy');
    const datePickerElement = screen.getByLabelText('nasa date picker');
    fireEvent.change(datePickerElement, {target: {value:date}});
    const imageElement = await screen.findByAltText('Aurora over Icelandic Waterfall');
    expect(imageElement.src).toContain('https://apod.nasa.gov/apod/image/2307');
})
```

#### Header.test.js
```
import React from 'react';
import {render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('render header component', () =>{
    render(<Header/>);
    const headerElement = screen.getByRole('heading');
    expect(headerElement).toContainHTML('NASA Images');
})
```

#### DatePicker.test.js
```
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import format from 'date-fns/format';
import App from '../App';

test('renders date picker component', ()=>{
    render(<App/>);
    const datePickerElement = screen.getByLabelText('nasa date picker');
    expect(datePickerElement).toBeInTheDocument();
})

test('change date when user selects a new date', () => {
    render(<App/>);
    const date = format(new Date('07/04/2023'), 'MM/dd/yyy');
    const datePickerElement = screen.getByLabelText('nasa date picker');
    fireEvent.change(datePickerElement, {target: {value:date}});
    const updatedDate = screen.getByDisplayValue('07/04/2023');
    expect(updatedDate).toBeInTheDocument();
})
```

## Next steps

Apprentices will be invited to choose a testing framework which corresponds to what is being used at work. There could be a decent chunk falling back to Jest and React Testing Library as there isn't much UI development at work. For several popular frameworks, some suggested front end testing libraries/frameworks have been provided.

Apprentices will be encouraged to get a project set up and start experimenting with the different levels of testing (unit, integration, and/or end-to-end). There is an assignment to test the Pokeverse application that they have been building throughout the last two weeks.

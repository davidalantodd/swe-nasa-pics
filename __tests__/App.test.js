// App.test.js
/** @jest-environment jsdom */
import { render, screen, fireEvent } from "@testing-library/react";
import { MOCK_ONE_NASA_DATA } from "../mocks/mockNasaData";
import App from "../src/App";
import Header from "../src/components/Header";
import SizeSlider from "../src/components/SizeSlider";
import format from 'date-fns/format';
const initialFetch = window.fetch;

describe("App", () => {
  
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve(MOCK_ONE_NASA_DATA),
      })
    );
  });

  afterEach(() => {
    window.fetch = initialFetch;
  });

  // integration test (ensures that multiple components within the App work together and that the Control Panel is rendered)
  test("renders Control Panel component", async () => {
    render(<App />);
    const text = await screen.findByText(/Control Panel/i);
    expect(text).toBeInTheDocument();
  });

  // unit test (focuses on testing the Header component in isolation)
  test('render header component', () =>{
      render(<Header/>);
      const headerElement = screen.getByRole('heading');
      expect(headerElement).toContainHTML('NASA Images');
  })

  // ?
  test('renders date picker component', ()=>{
      render(<App/>);
      const datePickerElement = screen.getByLabelText('nasa date picker');
      expect(datePickerElement).toBeInTheDocument();
  })

  // ?
  test('change date when user selects a new date', () => {
      render(<App/>);
      const date = format(new Date('07/04/2023'), 'MM/dd/yyy');
      const datePickerElement = screen.getByLabelText('nasa date picker');
      fireEvent.change(datePickerElement, {target: {value:date}});
      const updatedDate = screen.getByDisplayValue('07/04/2023');
      expect(updatedDate).toBeInTheDocument();
  })

  // ?
  test('renders size slider component',()=>{
      const mockSetSize = jest.fn()
      render(<SizeSlider size={50} setSize={mockSetSize}/>);
      const sliderElement = screen.getByRole('slider');
      expect(sliderElement).toBeInTheDocument();
  })

  // ?
  test('size value set by props',()=>{
      const mockSetSize = jest.fn()
      render(<SizeSlider size={50} setSize={mockSetSize}/>);
      const sliderElement = screen.getByRole('slider');
      expect(sliderElement).toHaveValue('50')
  })

  // ?
  test('size value reflects user input',()=>{
      render(<App/>);
      const sliderElement = screen.getByRole('slider');
      fireEvent.change(sliderElement, {target: {value:'100'}})
      expect(sliderElement).toHaveValue('100')
  })

  // ?
  test('default image loads', async () => {
      render(<App />);
      const image = screen.getByRole('img');
      expect(image.src).toContain('loading.jpeg');
  });
  
});
// App.test.js
/** @jest-environment jsdom */
import { render, screen, fireEvent } from "@testing-library/react";
import { MOCK_ONE_NASA_DATA } from "../mocks/mockNasaData";
import App from "../src/App";
import format from 'date-fns/format';
import ControlPanel from "../src/components/ControlPanel";
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

  test("renders Control Panel component", async () => {
    render(<App />);
    const text = await screen.findByText(/Control Panel/i);
    expect(text).toBeInTheDocument();
  });

  test("renders Header component", async () => {
    render(<App />);
    const text = await screen.findByText(/Nasa Images/i);
    expect(text).toBeInTheDocument();
  });

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
  
});
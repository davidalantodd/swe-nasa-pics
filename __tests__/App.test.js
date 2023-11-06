// App.test.js
/** @jest-environment jsdom */
import { render, screen, fireEvent } from "@testing-library/react";
import { MOCK_ONE_NASA_DATA } from "../mocks/mockNasaData";
import App from "../src/App";
import ControlPanel from "../src/components/ControlPanel";
import SizeSlider from "../src/components/SizeSlider";
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

  it("renders Control Panel component", async () => {
    render(<App />);
    const text = await screen.findByText(/Control Panel/i);
    expect(text).toBeInTheDocument();
  });

  it("renders Header component", async () => {
    render(<App />);
    const text = await screen.findByText(/Nasa Images/i);
    expect(text).toBeInTheDocument();
  });
  
  it('renders Header, ControlPanel, and DisplayPanel', async () => {
    render(<App />);
    
    const headerElement = await screen.findByText(/Nasa Images/i);
    const controlPanelElement = await screen.findByText(/Control Panel/i);
    const displayPanelElement = await screen.findByText(/Display Panel/i);
    
    expect(headerElement).toBeInTheDocument();
    expect(controlPanelElement).toBeInTheDocument();
    expect(displayPanelElement).toBeInTheDocument();
  });

  // unit test
  test('ControlPanel component renders correctly', () => {
    const date = new Date();
    const setDate = jest.fn();
    const size = 100;
    const setSize = jest.fn();
  
    const { getByText } = render(
      <ControlPanel date={date} setDate={setDate} size={size} setSize={setSize} />
    );
  
    expect(getByText('Control Panel')).toBeInTheDocument();
    expect(getByText('Date')).toBeInTheDocument();
    expect(getByText('Size')).toBeInTheDocument();
  });

  // integration test
  test('size value reflects user input',()=>{
      render(<App/>);
      const sliderElement = screen.getByRole('slider');
      fireEvent.change(sliderElement, {target: {value:'100'}})
      expect(sliderElement).toHaveValue('100')
  })

  // functional test
  test('size value set by props',()=>{
      const mockSetSize = jest.fn()
      render(<SizeSlider size={50} setSize={mockSetSize}/>);
      const sliderElement = screen.getByRole('slider');
      expect(sliderElement).toHaveValue('50')
  })
});
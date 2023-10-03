// App.test.js
/** @jest-environment jsdom */
import { render, screen, fireEvent } from "@testing-library/react";
import { MOCK_ONE_NASA_DATA } from "../mocks/mockNasaData";
import App from "../src/App";
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
  
});
// App.test.js
/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { MOCK_ONE_NASA_DATA } from "../mocks/mockNasaData";
import App from "../src/App";
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

  it("renders App component", async () => {
    render(<App />);
    const text = await screen.findByText(/Control Panel/i);
    expect(text).toBeInTheDocument();
  });

  
});
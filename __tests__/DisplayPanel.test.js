// App.test.js
/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { MOCK_ONE_NASA_DATA } from "../mocks/mockNasaData";
import DisplayPanel from "../src/components/DisplayPanel";
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

  it("renders image", async () => {
    const date = new Date()
    render(<DisplayPanel date = {date}  size = "100"/>);
    const image = screen.getByTestId('nasa-image');
    expect(image).toBeInTheDocument();

  });
});
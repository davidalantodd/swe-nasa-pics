# Nasa Pics

## Coach Notes

This week is all about UI testing. The big idea is that testing UI is about ensuring the components function as they should, and that this is a natural place to initiate end-to-end and integration tests.

There are many tools which are aimed at simulating user interaction directly, and many more which test components programatically. Several of these are compatible with familiar tools like jest and mocha.

[MDOC recording](https://drive.google.com/file/d/1VTdThreBb0FAAEhvUSYZGXbZHgiSZ1Vh/view)

## Things to see and do

The file has been configured to run Jest with React Testing Library. Some starter unit tests have been provided for you, but you should feel empowered to add more!

### Unit Tests
Unit tests focus on testing individual units or components of the software in isolation, such as functions or methods. These tests verify that each unit performs its specific function correctly and often involve providing specific inputs and checking expected outputs. Unit tests are typically fast, precise, and are used to catch low-level bugs in code. In this case, you are testing the ControlPanel component in isolation. You are rendering the component and then making assertions to check if specific elements with certain text content are present in the rendered output. This test does not involve the interaction with external dependencies or other parts of the application, which is a characteristic of unit tests.

### Integration Tests
Integration tests come into play when multiple units or components of the software need to work together as a cohesive system. They ensure that these components interact correctly with each other. Integration tests check the communication, data flow, and compatibility between units and can uncover issues that arise when these components come together. The test 'size value reflects user input' an example of an integration test. It renders the App component, interacts with a slider element within that component by simulating a change event using fireEvent, and then checks if the value of the slider element is updated correctly.

### Functional Tests
Functional tests, also known as end-to-end tests, examine the application from a user's perspective. They test the entire system, simulating real user interactions and verifying that the software functions as expected. Functional tests focus on the behavior of the application and can uncover user experience and business logic issues. The test 'size value set by props' is an example of a functional test. It renders a component (SizeSlider) with certain props and checks if the rendered component behaves as expected. It verifies that the sliderElement has a value of '50' when the component is rendered with the size prop set to 50.

A few extension ideas:
- Create some additional unit tests that test functionality like:
    - Fetching a new picture for a new date and updating the corresponding mock data.
    - Testing that an image resizes when the slider value updates
    - Testing how errors are handled.
- Explore how to write end-to-end, integration, and component tests using [Cypress](https://docs.cypress.io/guides/overview/why-cypress).

## Next steps

Apprentices will be invited to choose a testing framework which corresponds to what is being used at work. There could be a decent chunk falling back to Jest and React Testing Library as there isn't much UI development at work. For several popular frameworks, some suggested front end testing libraries/frameworks have been provided.

Apprentices will be encouraged to get a project set up and start experimenting with the different levels of testing (unit, integration, and/or end-to-end). There is an assignment to test the Pokeverse application that they have been building throughout the last two weeks.

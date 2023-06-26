# Nasa Pics

Note that the `.env` file is included with with a key for Nasa'a API.

This is bad practice but seems worth it for the convenience of not having every
coach get their own key.

## Coach Notes

Some teams create their own component frameworks from scratch; some will use
something off-the-shelf; many will do a blend of the two.

The big idea to get across here though is that components are **encapsulated**.
This is a key concept in software engineering, and has a strong presence in OOP
too. The data and state of the component can be modified using an interface (in
many frameworks, this is done by using _props_), which the component responds to
using its internal logic.

## Things to see and do

### Break it down

Run `npm i && npm run dev` and open the app.

Let the apprentices break this app down into components. How do they think it
might be broken down? Which bits do they think are components? What might the
family tree look like?

### A11y

The image has no alt text! Check the developer console for the log of the data
returned by the api. Is there something in there we could use for the alt text?
Let's do it!

Any other a11y concerns? (What is it like interacting with this site using
keyboard only? Is tabbing good?)

### Add some components

The [MUI 5](https://mui.com/material-ui/) library is installed. You can see we
have used a date picker component and a slider component. All we had to do was
hook it up.

Have some fun playing with different components such as
[buttons](https://mui.com/material-ui/react-button/),
[ratings](https://mui.com/material-ui/react-rating/),
[accordions](https://mui.com/material-ui/react-accordion/) and more.

E.g. head to `src/components/ControlPanel` and add

```js
import Button from '@mui/material/Button'
```

at the top, then

```js
<Button variant='contained'>Click me</Button>
```

somewhere in the returned `jsx`.

What do apprentices think about these components? Will it save them time? Have
any of them used components at work, whether home-made or an external library?
Do they think the material aesthetic is attractive?

### Ask about last week

Last week, apprentices had a look at themse such as accessibility and design
principles. What connections can they make between the idea of component
frameworks and the things they were looking at last week?

How can they help with consistency? Branding? Accessibility?

### Theming

Many frameworks will get us to choose standard
[colors](https://mui.com/material-ui/customization/color/),
[fonts](https://mui.com/material-ui/customization/typography/) and so on. This
plays very nicely with the wireframing and mock-up work the designers do.

## Next steps

Apprentices will be invited to choose a framework which corresponds to what is
being used at work. There could be a decent chunk falling back to React as there
isn't much UI development at work. For several popular frameworks, some
suggested libraries for CSS / Components systems are provided, but they might be
using something else at work.

Apprentices will be encouraged to get a project set up and start experimenting
with the different features and components on offer. There is an assignment to
display the results of a Pokemon API which they should be encouraged to tweak
and change.

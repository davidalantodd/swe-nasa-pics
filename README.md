# Nasa Pics

## Coach Notes

This week marks a shift towards using a state management pattern in apprentice
UI's. The big idea is that handing pieces of state from parent to child,
component to component, gets very complex and repetetive. In a state management
pattern, the state is stored in one place, and components can proactively read
or modify that state without needing to accept it from another component. This
might be done, for example, by importing a reference to the state from a
separate file.

## Things to see and do

In React, the state itself does still tend to live in a parent component, but
access to that state is now managed by the `useContext` hook instead of props.

### Investigate the date

The refactoring has already been done for the piece of state called `date`. You
can take a look at how this was achieved by looking at `contexts/DateContext.js`
where the context is created. Now in `App.js` the `date` and `setDate` are
provided to the `<DisplayPanel />` and `<ControlPanel />` and, crucially, **all
of their descendents**!

Note that `components/ControlPanel.js` doesn't include any reference to `date`
whatsoever, it doesn't care. However, its child `components/DatePicker.js` cares
very much. The key lines are

```js
import { DateContext } from '../contexts/DateContext'
import { useContext } from 'react'
// ...
const { date, setDate } = useContext(DateContext)
```

Meaning we can get access to this context without props.

Where else do we thing the date context might be getting consumed? Can
apprentices come up with some ideas? Do these other please need read and write
access, or just read?

### Refactoring the size

The `size` and `setSize` context are still being passed around as props!

Refactor this now to use `useContext()` instead.

- Create `contexts/SizeContext.js` and create the context
- Head to `App.js` and import the new `SizeContext`, then wrap
  `<ControlPanel />` and `<DisplayPanel />` in a `<SizeContext.Provider>`. We
  can remove the props from `<ControlPanel />` and `<DisplayPanel />` too!
- In `ControlPanel.jsx` and `SizeSlider.jsx`, remove the accepted props.
  `SizeSlider.jsx` can get `size` and `setSize` from `useContext` now (see
  `DatePicker.jsx` as a guide).
- In `DisplayPanel.jsx` and `NasaImage.jsx`, remove the props. `NasaImage.jsx`
  can get `size` from `useContext` instead.

This refactor should demo the difference between props and context nicely.

### Date in the header

What if we wanted to display the date of the displayed image in the
`Header.jsx`? Would this work as is? What would we need to do? (N.b. the
`<Header />` element is not nested inside the `<DateContext.Provider />` -
without refactoring `App.jsx` so that this is the case, `useContext` will not
work.)

### What are the benefits

Discuss what the benefits of this refactor might be. Is it worth the effort?
What do we have to gain from this? Can the apprentices themselves think of any
reason why passing props isn't the best way?

It might help to consider a more complex app like Twitter. It might also help to
think about what they did last week: component based design tends to use lots of
nested components.

## Next steps

A list of state management strategies has been provided for the more common
frameworks. For the most part, there seems to be a lightweight built-in solution
(e.g. `useContext`) and a heavyweight library (e.g. Redux). We're nudging them
towards the lightweight solution, but apprentices might need to, or be
interested to, explore a state management library.

Some of the documentation is a bit terse (Angular in particular) so they could
search for a more user friendly guide to help them get going.

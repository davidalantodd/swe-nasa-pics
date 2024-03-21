# Nasa Pics

## Demo Discussion Questions

#### Questions
* What is state management?
* What can state do in React that local variables cannot?
* How is the useContext() hook different from useState()?
* When would you use one hook over the other?

#### What is State Management?
* Part of the dynamic information of an app
* The memory of a component  - able to be recalled as needed 
* A local variable won't trigger renders - state does
* A local variable is limited to that component's scope - state is not

#### What are some use cases of State Management?
* Something that needs to be updated when there is a change -> button that tracks when clicked
* Update the UI in response to form handling (change the size of an image from a user inputting a slider)
* Share data across many components (a context that tracks shopping cart or dark mode)
* Ensure that the user always sees the most current data across componenents

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

Try refactoring this now to use `useContext()` instead.

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

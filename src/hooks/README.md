# React Hooks

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

Hooks allow us to "hook" into React features such as state and lifecycle methods.

## Rules

There are 3 rules for hooks:

* Hooks can only be called inside React function components.
* Hooks can only be called at the top level of a component.
* Hooks cannot be conditional

## useState

The React useState Hook allows us to track state in a function component. State generally refers to data or propert
ies that need to be tracking in an application.

The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these. We could create multiple state Hooks to track individual values.

## useEffect

The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

```
useEffect(<function>, <dependency>)
```

## useCallback

## useMemo


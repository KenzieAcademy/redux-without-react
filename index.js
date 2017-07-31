// Redux was included using a CDN, so it's just a global variable
const {createStore} = Redux;

// Action creator to communicate the user's intent to increment the count
const increment = () => ({
  type: "INCREMENT"
});

// Action creator to communicate the user's intent to increment the count
const decrement = () => ({
  type: "DECREMENT"
});

// Reducers take the application's previous state (or an initial state), an
// action to perform, and returns a new application state based on that action.
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

// A store is where the application state lives, and gives us access to some
// helper methods for manipulating the state, since we can't do so directly.
const store = createStore(reducer);


// A span with the id of count, which we'll use to display current state
const count = document.getElementById("count");

// When the increment button is clicked, we dispatch the "INCREMENT" action
// (using the increment action creator) and set the text content of the count
// span to the current application state.
document.getElementById("increment").addEventListener("click", e => {
  store.dispatch(increment());
  count.textContent = store.getState();
});

// When the decrement button is clicked, we dispatch the "DECREMENT" action
// (using the increment action creator) and set the text content of the count
// span to the current application state.
document.getElementById("decrement").addEventListener("click", e => {
  store.dispatch(decrement());
  count.textContent = store.getState();
});

const {createStore} = Redux;

const increment = () => ({
  type: "INCREMENT"
});

const decrement = () => ({
  type: "DECREMENT"
});

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
const store = createStore(reducer);


const count = document.getElementById("count");
document.getElementById("increment").addEventListener("click", e => {
  store.dispatch(increment());
  count.textContent = store.getState();
});

document.getElementById("decrement").addEventListener("click", e => {
  store.dispatch(decrement());
  count.textContent = store.getState();
});

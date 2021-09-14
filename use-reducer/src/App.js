// using  good example of useReducer

import React, { useReducer } from 'react'


const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1};
    case 'type':
      return { firstName: action.firstName, count: state.count + 1};
    default:
      return state;
  }

}

export default function App() {

  const [{ count, firstName }, dispatch] = useReducer(reducer, {
    count: 0,
    firstName: ""
  });

  return (
    <>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <div>count: {count}</div>

        <input
          value={firstName}
          onChange={e => {
            const firstName = e.target.value;
            dispatch({ type: "type", firstName });
          }}
        />
      </div>
    </>
  )


}


// UseReducer use case

// import React, { useReducer } from 'react'

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return initialState;
//     default:
//       return state;
//   }

// }

// export default function App() {

//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <div>
//         <p> Count: {count} </p>
//         <button onClick={() => dispatch('increment')}>Increment</button>
//         <button onClick={() => dispatch('decrement')}>Decrement</button>
//         <button onClick={() => dispatch('reset')}>Reset</button>

//       </div>
//     </>
//   )


// }


// using useState

// import React, { useState } from 'react'


// export default function App() {

//  const [ count, setCount] = useState(0);

//  function increment() {
//    setCount(prevCount => prevCount + 1);
//  }

//  function decrement() {
//   setCount(prevCount => prevCount - 1);
// }

// function reset() {
//   setCount(0);
// }


//   return (
//     <>
//       <div>
//         <p> Count: {count} </p>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//         <button onClick={reset}>Reset</button>

//       </div>
//     </>
//   )


// }



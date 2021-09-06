import React, { useState, useEffect, useRef } from 'react'

export default function App() {
  const [name, setName] = useState('');
  const prevName = useRef();

 useEffect(() => {
   prevName.current = name;
 }, [name])
 
  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)}/>
      <div>My name is {name} and it used to be {prevName.current}</div>
    </>
  )


}


// import React, { useState, useEffect, useRef } from 'react'

// export default function App() {
//   const [name, setName] = useState('');
//   const inputRef = useRef();

//  function focus() {
//    inputRef.current.focus();
//    inputRef.current.value = 'Some value'
//  }

 
//   return (
//     <>
//       <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
//       <div>My name is {name}</div>
//       <button onClick={focus}>Focus</button>
//     </>
//   )


// }


// import React, { useState, useEffect, useRef } from 'react'

// export default function App() {
//   const [name, setName] = useState('');
//   const renderCount = useRef(0);

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1;
//     console.log(renderCount.current);
//   })

 
//   return (
//     <>
//       <input value={name} onChange={e => setName(e.target.value)}/>
//       <div>My name is {name}</div>
//       <div>I rendered {renderCount.current} times</div>
//     </>
//   )


// }


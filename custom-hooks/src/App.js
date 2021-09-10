import React from 'react'
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';

export default function App() {
  const [name, setName] = useLocalStorage('name', 'abcde');
  useUpdateLogger(name);

  return (
    <input
      type="text"
      value={name}
      onChange={e => setName(e.target.value)}
    />
  )

}


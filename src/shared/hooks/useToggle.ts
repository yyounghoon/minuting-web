import { useState } from 'react';

export default function useToggle(initialValue = false) {
  const [toggle, setToggle] = useState(initialValue);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return {
    toggle,
    onToggle,
    setToggle,
  };
}

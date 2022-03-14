import { useState } from "react";

/**
 * Хук булевого значения
 */
const useBoolean = (initialValue: boolean = false) => {
  const [value, setValue] = useState(initialValue);

  const setTrue = () => {
    setValue(true);
  };

  const setFalse = () => {
    setValue(false);
  };

  return {
    value,
    setTrue,
    setFalse,
    toggle: value ? setFalse : setTrue,
  };
};

export default useBoolean;

import {useEffect} from "react";

export const useLocalStorage = <T,>(key:string, value: T, setValue: (value: T) => void) => {

  const setLocalStorage = () => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  const getFromLocalStorage = () => {

    const valueString = localStorage.getItem(key)
    if (valueString) {
      const newValueString: T = JSON.parse(valueString);
      setValue(newValueString)
    }
  }

  useEffect(() => {
    getFromLocalStorage()
  }, []);

  return {setLocalStorage}
};

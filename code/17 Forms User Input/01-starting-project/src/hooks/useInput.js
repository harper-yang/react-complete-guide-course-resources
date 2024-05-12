import {useState} from "react";

export const useInput = (defaultValue, isValidFn) => {
  const [enteredValue, setEnteredValue] = useState(defaultValue)
  const [didEdit, setDidEdit] = useState(false)

  const isValid = isValidFn(enteredValue);

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }
  const handleInputBlur = () => {
    setDidEdit(true)
  }

  return {
    value: enteredValue,
    handleInputBlur,
    handleInputChange,
    hasError: didEdit && !isValid,
  }
}

import { useState } from "react";

export const useShowPass = () => {
  const [showPass, setShowPass] = useState(false);

    const heandleShowPass = () => {
    setShowPass(!showPass);
  };
  return{
    showPass,
    heandleShowPass
  }
}
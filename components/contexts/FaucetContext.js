import { createContext, useState } from 'react';

export const FaucetContext = createContext();

export const FaucetProvider = ({ children }) => {
  const [showFaucet, setShowFaucet] = useState(false);

  return (
    <FaucetContext.Provider value={{ showFaucet, setShowFaucet }}>
      {children}
    </FaucetContext.Provider>
  );
}
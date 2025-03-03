import { createContext, useState, useContext } from "react";

// Criando o contexto
const BudgetContext = createContext();

// Criando o provider
export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState({});

  return (
    <BudgetContext.Provider value={{ budget, setBudget }}>
      {children}
    </BudgetContext.Provider>
  );
};

// Hook para facilitar o uso do contexto
export const useBudget = () => useContext(BudgetContext);

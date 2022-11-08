import React, { createContext, useMemo, useReducer } from 'react';

const SET_TRANSACTIONS = 'SET_TRANSACTIONS';
const SET_MEDICINES = 'SET_MEDICINES';
const ADD_TO_CART = 'ADD_TO_CART';

const MedicineContext = createContext();

function medicineReducer(state, action) {
  switch (action.type) {
    case SET_MEDICINES:
      return {
        ...state,
        medicines: action.data,
      };
    default: {
      return {
        medicines: [],
      };
    }
  }
}

function MedicineContextProvider({ children }) {
  const [state, dispatch] = useReducer(medicineReducer, {
    medicines: [],
  });

  const medicineContext = useMemo(
    () => ({
      setMedicines: async (data) => {
        dispatch({ type: SET_MEDICINES, data: data });
      },
      medicines: state.medicines,
    }),
    [state]
  );

  return (
    <MedicineContext.Provider value={medicineContext}>
      {children}
    </MedicineContext.Provider>
  );
}

function useMedicineContext() {
  const context = React.useContext(MedicineContext);
  if (context === undefined) {
    throw new Error(
      'useMedicineContext must be used within a MedicineContextProvider'
    );
  }
  return context;
}

export { MedicineContextProvider, useMedicineContext };

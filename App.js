import * as React from 'react';

import Main from './screens';

import { AuthContextProvider } from './context/authContext';
import { MedicineContextProvider } from './context/medicineContext';

export default function App() {
  return (
    <AuthContextProvider>
      <MedicineContextProvider>
        <Main />
      </MedicineContextProvider>
    </AuthContextProvider>
  );
}

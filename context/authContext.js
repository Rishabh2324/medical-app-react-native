import React, { createContext, useContext, useMemo, useReducer } from 'react';

const AuthContext = createContext();

function authReducer(state, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isSignout: false,
        userToken: action.token,
      };
    default: {
      return {
        isSignout: true,
        userToken: null,
      };
    }
  }
}

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    isSignout: true,
    userToken: null,
  });

  const authContext = useMemo(
    () => ({
      signIn: async (userId) => {
        dispatch({ type: 'SIGN_IN', token: userId });
      },
      isSignout: state.isSignout,
      userId: state.userToken,
    }),
    [state]
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
}

function useAuthContext() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthContextProvider');
  }
  return context;
}

export { AuthContextProvider, AuthContext, useAuthContext };

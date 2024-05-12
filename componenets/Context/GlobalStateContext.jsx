import React, { createContext, useContext, useReducer } from 'react';
import CitasJson from '../../dinamico.json'

const DataContext = createContext();

const initialState = {
    citasPendientes: CitasJson.citas,
    citasAgendadas:[],

  };
  
const dataReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DATE':
      return {
        ...state,
        citasPendientes: [...state.citasPendientes, action.payload],
      };
    case 'REMOVE_DATE':
      return {
        ...state,
        citasPendientes: state.citasPendientes.filter(cita => cita.id !== action.payload),
      };
      case 'CONFIRM_DATE_REQUEST':
        return{
          ...state,
        citasAgendadas: [...state.citasAgendadas, state.citasPendientes.find(cita => cita.id === action.payload)],
        };

    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
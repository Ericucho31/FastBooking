import React, { createContext, useContext, useReducer } from 'react';
import CitasJson from '../../dinamico.json'
import CitaPendienteAAgendada from '../Handler/CItaPendienteAAgendada';
import agregarCita from '../Handler/CitaAgendada';
import eliminarCitaPorIdYFecha from '../Handler/EliminarCitaAgendada';

const DataContext = createContext();

const initialState = {
  citasPendientes: CitasJson.citas,
  citasAgendadas: {}

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
        citasPendientes:
         state.citasPendientes.filter(cita => cita.id !== action.payload),
      };
    case 'CONFIRM_DATE_REQUEST':
      const citaPendiente = state.citasPendientes.find(cita => cita.id === action.payload); //encuentra la cita pendiente para después pasarla a cita agendada
      return {
        ...state,
        citasAgendadas: agregarCita(state.citasAgendadas, citaPendiente),
      };
    case 'REMOVE_DATE_BOOKED':
      return {
        ...state,
        citasAgendadas: eliminarCitaPorIdYFecha(state.citasAgendadas, action.payload.fecha, action.payload.id),
        //state.citasAgendadas.filter(cita => cita.id !== action.payload),
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
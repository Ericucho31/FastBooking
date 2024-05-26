import React, { createContext, useContext, useEffect, useReducer } from 'react';
import agregarCita from '../Handler/CitaAgendada';
import eliminarCitaPorIdYFecha from '../Handler/EliminarCitaAgendada';
import { GetAllAvailableDates, GetDateById, GetUserInfoById } from "../Handler/API/APIHandler";

const DataContext = createContext();

const initialState = {
  id:1000,
  userData:{},
  citasPendientes: [],
  citasAgendadas: {}
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'SET_INITIAL_DATA':
      return {
        ...state,
        citasPendientes: action.payload,
      };
      case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.payload,
      };

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
      case 'ID_INCREMENT':
      return {
        ...state,
        id: state.id++,
        //state.citasAgendadas.filter(cita => cita.id !== action.payload),
      };
      case 'CREATE_NEW_DATE':
      const newId = state.id + 1; // calcula el nuevo id
      const newCita = {
        ...action.payload,
        id: newId, // usa el nuevo id en la nueva cita
      };
      return {
        ...state,
        citasAgendadas: agregarCita(state.citasAgendadas, newCita),
        id: newId, // actualiza el id en el estado
      };

    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDatesData = await GetDateById({ id: 2 });
        dispatch({ type: 'SET_INITIAL_DATA', payload: userDatesData });
        const userData = await GetUserInfoById({ id: 2 });
        dispatch({ type: 'SET_USER_DATA', payload: userData });
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
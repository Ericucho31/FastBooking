import React, { createContext, useContext, useEffect, useReducer } from 'react';
import agregarCita from '../Handler/CitaAgendada';
import eliminarCitaPorIdYFecha from '../Handler/EliminarCitaAgendada';
import { GetAllAvailableDates, GetDateById, GetUserInfoById, GetUserInfoByToken } from "../Handler/API/APIHandler";

const DataContext = createContext();

const initialState = {
  token: null,
  userData: {},
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
    case 'GET_DATES_BOOKED':
      const nuevasCitasAgendadas = action.payload.reduce((acc, date) => {
        return agregarCita(acc, date);
      }, {});
      return {
        ...state,
        citasAgendadas: nuevasCitasAgendadas,
      };
    case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.payload,
      };

    case 'SET_USER_TOKEN':
      return {
        ...state,
        token: action.payload,
      };

    case 'LOG_OUT':
      return {
        ...state,
        token: null,
        userData: {},
        citasPendientes: [],
        citasAgendadas: {}
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
      if (state.token) {
        try {
          const userData = await GetUserInfoByToken({ token: state.token });
          console.log(userData)
          dispatch({ type: 'SET_USER_DATA', payload: userData });

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    fetchData();
  }, [state.token]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
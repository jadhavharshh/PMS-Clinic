/**
 * API Routes for the PMS Clinic application
 */

// Base URL from environment variables
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Auth endpoints
export const AUTH_ROUTES = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  REFRESH: `${API_BASE_URL}/auth/refresh`,
};

// Patient endpoints
export const PATIENT_ROUTES = {
  GET_ALL: `${API_BASE_URL}/patients`,
  GET_BY_ID: (id: string) => `${API_BASE_URL}/patients/${id}`,
  CREATE: `${API_BASE_URL}/patients`,
  UPDATE: (id: string) => `${API_BASE_URL}/patients/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/patients/${id}`,
};

// Appointment endpoints
export const APPOINTMENT_ROUTES = {
  GET_ALL: `${API_BASE_URL}/appointments`,
  GET_BY_ID: (id: string) => `${API_BASE_URL}/appointments/${id}`,
  CREATE: `${API_BASE_URL}/appointments`,
  UPDATE: (id: string) => `${API_BASE_URL}/appointments/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/appointments/${id}`,
  GET_BY_PATIENT: (patientId: string) => `${API_BASE_URL}/patients/${patientId}/appointments`,
};

// Medical records endpoints
export const MEDICAL_RECORD_ROUTES = {
  GET_ALL: `${API_BASE_URL}/medical-records`,
  GET_BY_ID: (id: string) => `${API_BASE_URL}/medical-records/${id}`,
  CREATE: `${API_BASE_URL}/medical-records`,
  UPDATE: (id: string) => `${API_BASE_URL}/medical-records/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/medical-records/${id}`,
  GET_BY_PATIENT: (patientId: string) => `${API_BASE_URL}/patients/${patientId}/medical-records`,
};
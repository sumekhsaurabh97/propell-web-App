import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const token = sessionStorage.getItem("authToken")
  return token ? <Outlet /> : <Navigate to='/' />;
}

export {
  ProtectedRoute,
}


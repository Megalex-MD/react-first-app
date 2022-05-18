import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/context";
import { privatRoutes, publicRoutes } from "../router/router";
import Loader from "./UI/loading/loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)

  if (isLoading) {
    return <Loader />
  }

  return (
    isAuth
      ?
      <Routes>
        {privatRoutes.map(route =>
          <Route
            path={route.path}
            element={route.element}
            key={route.path}
          />
        )}
        <Route path="*" element={<Navigate to="/posts" replace />} />
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route
            path={route.path}
            element={route.element}
            key={route.path}
          />
        )}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
  )
}

export default AppRouter
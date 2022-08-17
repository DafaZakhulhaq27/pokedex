import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DetailPage, HomePage } from '../pages'
import { DETAIL, HOME } from './routesName'

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={HOME}
          element={
            <HomePage />
          }
        />
        <Route
          path={DETAIL}
          element={
            <DetailPage />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation
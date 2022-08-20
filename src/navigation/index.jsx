import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { DetailPage, HomePage } from '../pages'
import { DETAIL, HOME } from './routesName'

const Navigation = () => {
  return (
    <HashRouter>
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
    </HashRouter>
  )
}

export default Navigation
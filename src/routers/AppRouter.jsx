import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import AuthRouter from './AuthRouter';
import JournalScreen from '../components/journal/JournalScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/auth"
            element={<AuthRouter />}
          />

          <Route
            path="/"
            element={<JournalScreen />}
          />

          <Route
            path="*"
            element={<Navigate to="/auth/login" replace />}
          />

        </Routes>
      </div>
    </Router>
  )
}

export default AppRouter
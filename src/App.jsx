import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);
  

  return isRefreshing ? (
    <strong>Getting user data please wait</strong>) : (
      <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={
          <RestrictedRoute redirectTo="/contacts">
            <RegisterPage />
          </RestrictedRoute>
          } />
          <Route path="/login" element={
          <RestrictedRoute redirectTo="/contacts">
            <LoginPage />
          </RestrictedRoute>
          } />
          <Route path="/contacts" element={
              <PrivateRoute redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
          } />
        </Routes>
      </Suspense>
    </Layout>
    
  );
}
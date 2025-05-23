import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { disconnectSocket } from '@/settings/socket.js';
import useAuth from '@/lib/hooks/useAuth';

/*Routes*/
import Login from '@/pages/Login.jsx'
import Recover from '@/pages/Recover.jsx'
import Reset from '@/pages/Reset.jsx'
import Register from '@/pages/Register.jsx'
import Dashboard from '@/pages/Dashboard.jsx'
import Transactions from '@/pages/Transactions.jsx'
import Users from '@/pages/Users.jsx'
import Folders from '@/pages/Folders.jsx'
import Tasks from '@/pages/Tasks.jsx'
import Reports from '@/pages/Reports.jsx'
import Team from '@/pages/Team.jsx'
/*End::Routes*/

/*Layouts*/
import DashboardLayout from '@/lib/layouts/siteLayout.jsx';
/*END::Layouts*/

/*Routes Protection*/
const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  if (auth === null) return <Navigate to="/" />;
  return children;
};
/*End::Routes Protection*/

function App() {
  const location = useLocation();
  const auth = useAuth();

  useEffect(() => {
    if (!auth) return;

    const handleDisconnect = () => {
      disconnectSocket();
    };

    window.addEventListener('beforeunload', handleDisconnect);

    return () => {
      window.removeEventListener('beforeunload', handleDisconnect);
      handleDisconnect();
    };
  }, [auth, location.pathname]);

  return (
    <>
      <Routes>

        /*PUBLIC ROUTES*/
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<Recover />} />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/register" element={<Register />} />
        /*END::PUBLIC ROUTES*/
          
        /* PRIVATE ROUTES */
          <Route
            path="/dashboard"
            element={
              //<ProtectedRout e>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              //</ProtectedRout>
            }
          />

          <Route
            path="/transactions"
            element={
              //<ProtectedRout e>
                <DashboardLayout>
                  <Transactions />
                </DashboardLayout>
              //</ProtectedRout>
            }
          />

          <Route
            path="/users"
            element={
              //<ProtectedRout e>
                <DashboardLayout>
                  <Users />
                </DashboardLayout>
              //</ProtectedRout>
            }
          />

          <Route
            path="/folders"
            element={
              //<ProtectedRout e>
                <DashboardLayout>
                  <Folders />
                </DashboardLayout>
              //</ProtectedRout>
            }
          />

          <Route
            path="/tasks"
            element={
              //<ProtectedRout e>
                <DashboardLayout>
                  <Tasks />
                </DashboardLayout>
              //</ProtectedRout>
            }
          />

          <Route
            path="/reports"
            element={
              //<ProtectedRout e>
                <DashboardLayout>
                  <Reports />
                </DashboardLayout>
              //</ProtectedRout>
            }
          />

          <Route
            path="/contacts"
            element={
              //<ProtectedRout e>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              //</ProtectedRout>
            }
          />

          <Route
            path="/team"
            element={
              //<ProtectedRout e>
                <DashboardLayout>
                  <Team />
                </DashboardLayout>
              //</ProtectedRout>
            }
          />

          <Route
            path="/properties"
            element={
              //<ProtectedRout e>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              //</ProtectedRout>
            }
          />

          <Route
            path="/funnel"
            element={
              //<ProtectedRout e>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              //</ProtectedRout>
            }
          />
        /*END::PRIVATE ROUTES */

        /*404*/
          <Route path="*" element={<Navigate to="/" />} />
        /*END::404 */

      </Routes>
    </>
  )
}

export default App

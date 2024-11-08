import React, { useContext, useEffect, useState } from 'react';
import Login from './Components/Auth/Login';
import AdminDashbord from './Components/Dashborad/AdminDashbord';
import EmployeeDashboard from './Components/Dashborad/EmployeeDashboard';
import { AuthContext } from './Context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [LoggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      if (userData.data) {
        setLoggedInUserData(userData.data);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      alert('Admin login successful');
    } else if (authData && authData.employees) {
      const employee = authData.employees.find((e) => e.email === email && e.password === password);
      if (employee) {
        setUser('employees');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employees', data: employee }));
        alert('Employee login successful');
      } else {
        alert('Invalid email or password');
      }
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <>
          {user === 'admin' ? <AdminDashbord changeUser={setUser} /> : null}
          {user === 'employees' ? <EmployeeDashboard  changeUser={setUser} data={LoggedInUserData} /> : null}
        </>
      )}
    </>
  );
};

export default App;


import { useEffect, useState } from 'react';

// Import Components
import Navbar from './components/Navbar';
import NotificationBar from './components/NotificationBar';
import Hero from './components/Hero';
import LoginForm from './components/LoginForm';


function App() {

  // Notification Bar
  let [notificationBarShown, setNotificationBarShown] = useState(true);

  const closeNotificationBar = () => {
    setNotificationBarShown(false);
  }

  // Home and Login Page Toggle
  const [home, setHome] = useState(false);
  const [login, setLogin] = useState(true);

  // Close Login Page
  const handleClose = () => {
    console.log('Closed!');
    setHome(!home);
    setLogin(!login);
  }

  // Open Login Page
  const handleLogin = () => {
    setHome(false);
    setLogin(true);
  }

  return (
    <div className="App">
      {login && <LoginForm handleClose={handleClose} />}
      {home && <div>
        {notificationBarShown && <NotificationBar text="Tyche is currently in development." handleClose={() => closeNotificationBar()} />}
        <Navbar handleLogin={handleLogin} />
        <Hero />
      </div>}
    </div>
  );
}

export default App;

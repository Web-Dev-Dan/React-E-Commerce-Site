
import { useEffect, useState } from 'react';

// Import Components
import Navbar from './components/Navbar';
import NotificationBar from './components/NotificationBar';
import Hero from './components/Hero';
import LoginForm from './components/LoginForm';
import Categories from './components/Categories';
import Offers from './components/Offers';


function App() {

  // Notification Bar
  let [notificationBarShown, setNotificationBarShown] = useState(true);

  const closeNotificationBar = () => {
    setNotificationBarShown(false);
  }

  // Home and Login Page Toggle
  const [home, setHome] = useState(true);
  const [login, setLogin] = useState(false);
  // const [createAccount, setCreateAccount] = useState(false);

  // Close Login Page
  const handleCloseLogin = () => {
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
      {login && <LoginForm handleClose={handleCloseLogin} />}
      {home && <div>
        {notificationBarShown && <NotificationBar text="Tyche is currently in development." handleClose={() => closeNotificationBar()} />}
        <Navbar handleLogin={handleLogin} />
        {home && <Hero />}
        {home && <Categories />}
        {home && <Offers />}
      </div>}
    </div>
  );
}

export default App;

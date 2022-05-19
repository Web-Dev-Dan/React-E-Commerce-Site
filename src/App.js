
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
  const [home, setHome] = useState(true);
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      {login && <LoginForm />}
      {home && <div>
        {notificationBarShown && <NotificationBar text="Tyche is currently in development." handleClose={() => closeNotificationBar()} />}
        <Navbar />
        <Hero />
      </div>}
    </div>
  );
}

export default App;

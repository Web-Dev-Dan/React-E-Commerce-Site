
import { useState } from 'react';

// Import Components
import Navbar from './components/Navbar';
import NotificationBar from './components/NotificationBar';


function App() {

  // Notification Bar
  let [notificationBarShown, setNotificationBarShown] = useState(true);

  const closeNotificationBar = () => {
    setNotificationBarShown(false);
  }

  return (
    <div className="App">
      {notificationBarShown && <NotificationBar text="Tyche is currently in development." handleClose={() => closeNotificationBar()} />}
      <Navbar />
    </div>
  );
}

export default App;

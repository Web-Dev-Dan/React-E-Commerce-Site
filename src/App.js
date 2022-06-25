
import { useEffect, useState } from 'react';

// Import Components
import Navbar from './components/Navbar';
import NotificationBar from './components/NotificationBar';
import Hero from './components/Hero';
import LoginForm from './components/LoginForm';
import Categories from './components/Categories';
import Offers from './components/Offers';
import ShoppingPage from './components/ShoppingPage';


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
  const [shoppingPage, setShoppingPage] = useState(false);
  const [shoppingCategory, setShoppingCategory] = useState();

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
    setShoppingPage(false);
  }

  const openShoppingPage = (title) => {
    console.log(`ID: ${title}`)
    setHome(!home);
    setShoppingPage(!shoppingPage);
    setShoppingCategory(title.toLowerCase());
    window.scrollTo(0, 0);
  }

  const closeShoppingPage = () => {
    setHome(!home);
    setShoppingPage(!shoppingPage);
    console.log('working')
  }

  const returnToHomePage = () => {
    console.log('Home')
  }


  return (
    <div className="App">
      {login && <LoginForm handleClose={handleCloseLogin} />}
      {/* {notificationBarShown && <NotificationBar text="Tyche is currently in development." handleClose={() => closeNotificationBar()} />} */}
      {!login && <Navbar returnToHomePage={() => returnToHomePage()} handleLogin={handleLogin} />}
      {home && <div>
        <Hero />
        <Categories
          openShoppingPage={(title) => openShoppingPage(title)}
        />
        <Offers />
      </div>}


      {shoppingPage &&
        <ShoppingPage
          category={shoppingCategory}
          closeShoppingPage={() => closeShoppingPage()}
        />}
    </div>
  );
}

export default App;


import { useEffect, useState } from 'react';

// Import Components
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Basket from './components/Basket';
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
  const [modalShown, setModalShown] = useState(false);
  const [modalId, setModalId] = useState();

  const [basketShown, setBasketShown] = useState(false);
  const [itemsInBasket, setItemsInBasket] = useState([]);
  const [totalBasketPrice, setTotalBasketPrice] = useState(0);

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

  const openShoppingPage = (title, shoppingCategory) => {
    setHome(!home);
    setShoppingPage(!shoppingPage);
    setShoppingCategory(title.toLowerCase());
    window.scrollTo(0, 0);
  }

  const closeShoppingPage = () => {
    setHome(!home);
    setShoppingPage(!shoppingPage);
  }

  const returnToHomePage = () => {
    console.log('Home')
    setHome(true);
    setLogin(false);
    setShoppingPage(false);
    setModalShown(false);
    setBasketShown(false);
  }

  const openShopItemModal = (id) => {
    setModalShown(true);
    setModalId(id);
    console.log(`Opened modal! ID: ${id}`)
  }

  const closeShopItemModal = () => {
    setModalShown(false);
  }

  const addToBasket = (id, imgSrc, title, price) => {
    console.log(`BOOM! Added id ${id}`)
    console.log(`${title} is $${price}`)
    console.log(imgSrc)

    const newBasket = [...itemsInBasket];
    newBasket.push({
      'id': id,
      'title': title,
      'imgSrc': imgSrc,
      'price': price
    });
    setItemsInBasket(newBasket);
    setTotalBasketPrice(prev => prev += price);
    console.log('TOTAL BASKET PRICE:' + totalBasketPrice);
    console.log(itemsInBasket);
  }

  useEffect(() => {
    console.log(itemsInBasket);
  }, [itemsInBasket]);

  const openBasket = () => {
    setBasketShown(true);
  }

  const closeBasket = () => {
    setBasketShown(false);
  }

  const removeItem = () => {
    console.log('Item removed!');
  }

  return (
    <div className="App">
      {/* Modal */}
      {modalShown &&
        <Modal
          closeModalClicked={() => closeShopItemModal()}
          id={modalId}
          addToBasket={(id, imgSrc, title, price) => addToBasket(id, imgSrc, title, price)}
        />}

      {login && <LoginForm handleClose={handleCloseLogin} />}
      {notificationBarShown && <NotificationBar text="Tyche is currently in development." handleClose={() => closeNotificationBar()} />}
      {!login && <Navbar
        returnToHomePage={() => returnToHomePage()}
        handleLogin={handleLogin}
        itemsInBasket={itemsInBasket}
        openBasket={() => openBasket()}
      />}
      {/* Basket */}
      {basketShown && <Basket
        itemsInBasket={itemsInBasket}
        closeBasket={() => closeBasket()}
        numberOfItems={itemsInBasket}
        totalBasketPrice={totalBasketPrice}
        removeItem={() => removeItem()}
      />}

      {home && <div>
        <Hero
          openShoppingPage={(title) => openShoppingPage(title, shoppingCategory)}
        />
        <Categories
          openShoppingPage={(title) => openShoppingPage(title, shoppingCategory)}
        />
        <Offers />
      </div>}


      {shoppingPage &&
        <ShoppingPage
          category={shoppingCategory}
          closeShoppingPage={() => closeShoppingPage()}
          moreDetailsClick={(id) => openShopItemModal(id)}
          addToBasket={(id, imgSource, title, price) => addToBasket(id, imgSource, title, price)}
        />}
    </div>
  );
}

export default App;

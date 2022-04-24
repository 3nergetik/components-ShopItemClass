// import logo from './logo.svg';
import './App.css';
import './css/main.css';
import PropTypes from 'prop-types';

import { ShopItemClass } from './ShopItemClass';
import ItemCard from './ItemCard';

function App() {
  const item = new ShopItemClass({
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: 'GBP'
  });

  return ItemCard(item);
}

ShopItemClass.propTypes = {
  item: PropTypes.instanceOf(ShopItemClass).isRequired
}

export default App;

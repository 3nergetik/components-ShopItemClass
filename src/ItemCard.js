import React from 'react';
import PropTypes from 'prop-types';
import { ShopItemClass } from './ShopItemClass';

export default function ItemCard(item) {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        < ShopItem item={item} />
      </div>
    </div>
  )
}

class ShopItem extends React.Component {

  static propTypes = {
    item: PropTypes.instanceOf(ShopItemClass).isRequired
  }

  render () {
    const {item} = this.props;
    return (
    <div className="ItemCard">
      <div className="description">{item.brand}</div>
      <h1 className="h1">{item.title}</h1>
      <h3 className="h3">{item.description}</h3>
      <p className="description-full">{item.descriptionFull}</p>
      <div className="divider"></div>
      <div className="CardBottom">
       {/* eslint-disable-next-line no-undef */}
        <div className="price">{Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: item.currency,
          currencyDisplay: 'symbol',
        }).format(item.price)}</div>
        <button className="CardAddToBasket">ДОБАВИТЬ В КОРЗИНУ</button>
      </div>
    </div>
    );
  }
}

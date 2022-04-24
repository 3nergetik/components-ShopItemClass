export class ShopItemClass {
  constructor(entity) {
    Object.assign(this, {
      brand: 'Item brand',
      title: 'Item title',
      description: 'Itm description',
      descriptionFull: 'Item full description',
      price: 0,
      currency: 'GBP'
    }, entity);
  }
}

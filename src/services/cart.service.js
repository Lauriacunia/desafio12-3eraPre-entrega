import { BaseService } from "./base.service.js";
import getDAOS from "../daos/daos.factory.js";
const { cartDao, productDao } = getDAOS();

export class CartService extends BaseService {
  constructor() {
    super(cartDao);
  }

  async addManyOfTheSameProduct(cart, product, quantity) {
    try {
      const cartUpdated = await cartDao.addManyOfTheSameProduct(
        cart,
        product,
        quantity
      );
      return cartUpdated;
    } catch (err) {
      throw new Error(err);
    }
  }

  async updateProductsOfOneCart(cart, products) {
    try {
      const cartUpdated = await cartDao.updateProductsOfOneCart(cart, products);
      return cartUpdated;
    } catch (err) {
      throw new Error(err);
    }
  }

  async removeProduct(cart, product) {
    try {
      const cartUpdated = await cartDao.removeProduct(cart, product);
      return cartUpdated;
    } catch (err) {
      throw new Error(err);
    }
  }

  async emptyCart(cart) {
    try {
      const cartUpdated = await cartDao.emptyCart(cart);
      return cartUpdated;
    } catch (err) {
      throw new Error(err);
    }
  }
}

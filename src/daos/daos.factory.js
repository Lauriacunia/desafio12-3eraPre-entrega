import CONFIG from "../config/config.js";

let productDao;
let cartDao;
let chatDao;
let userDao;

switch (CONFIG.DATASOURCE) {
  case "MEMORY": {
    // TODO: completar lo que falta
    break;
  }
  case "MONGO": {
    const { ProductMongoDao } = await import("./mongo/product.mongo.dao.js");
    productDao = new ProductMongoDao();
    const { CartMongoDao } = await import("./mongo/cart.mongo.dao.js");
    cartDao = new CartMongoDao();
    const { ChatMongoDao } = await import("./mongo/chat.mongo.dao.js");
    chatDao = new ChatMongoDao();
    const { UserMongoDao } = await import("./mongo/user.mongo.dao.js");
    userDao = new UserMongoDao();
    break;
  }
  default: {
    throw new Error(
      "Debes elegir un tipo de persistencia válido: MEMORY o MONGO"
    );
  }
}

const getDAOS = () => {
  return {
    productDao,
    cartDao,
    chatDao,
    userDao,
  };
};

export default getDAOS;

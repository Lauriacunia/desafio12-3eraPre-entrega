import { BaseService } from "./base.service";
import getDAOS from "../daos/daos.factory.js";
const { userDao } = getDAOS();

export class UserService extends BaseService {
  constructor() {
    super(userDao);
  }
}

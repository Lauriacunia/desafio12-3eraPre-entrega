import { BaseService } from "./base.service";
import getDAOS from "../daos/daos.factory.js";
const { chatDao } = getDAOS();

export class ChatService extends BaseService {
  constructor() {
    super(chatDao);
  }
}

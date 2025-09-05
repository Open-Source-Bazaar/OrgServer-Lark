import { clear } from 'idb-keyval';
import { HTTPClient } from 'koajax';
import { observable } from 'mobx';
import { BaseListModel, DataObject, persist, restore, toggle } from 'mobx-restful';
import { sleep } from 'web-utility';

import { API_Host, isServer } from '../utility/configuration';

export type User = DataObject;
export type SignInData = DataObject;

export class UserModel extends BaseListModel<User> {
  baseURI = 'user';
  restored = !isServer() && restore(this, 'User');

  @persist()
  @observable
  accessor session: User | undefined;

  client = new HTTPClient({
    baseURI: `${API_Host}/api/`,
    responseType: 'json',
  }).use(async ({ request }, next) => {
    await this.restored;

    if (this.session?.token)
      request.headers = {
        ...request.headers,
        Authorization: `Bearer ${this.session.token}`,
      };

    return next();
  });

  @toggle('uploading')
  async signIn(data: SignInData) {
    const { body } = await this.client.post<User>(`${this.baseURI}/session`, data);

    return (this.session = body!);
  }

  async signOut() {
    this.session = undefined;

    await sleep(1);

    await clear();
  }
}

export default new UserModel();

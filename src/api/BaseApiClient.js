import { db } from '../config/api.config';
import { getId } from './helpers/api.helpers';
import { ref, get, set, child, update, remove } from 'firebase/database';

export class BaseApiClient {
  constructor(modelPath) {
    this._db = db;
    this._modelPath = modelPath;
  }

  get db() {
    return this._db;
  }

  get modelPath() {
    return this._modelPath;
  }

  getModelRef(url = '') {
    return child(this.getDbRef(), `${this.modelPath}${url}`);
  }

  getDbRef() {
    return ref(this.db);
  }

  async get() {
    const snap = await get(this.getModelRef());
    if (snap.exists()) {
      return snap.val();
    } else {
      throw new Error('Data not found');
    }
  }

  async getById(id) {
    if (!id) {
      throw new Error('ID parameter is required');
    }
    const snap = await get(this.getModelRef(`/${id}`));
    if (snap.exists()) {
      return snap.val();
    } else {
      throw new Error('Data by id not found');
    }
  }

  create(model) {
    if (!model) {
      throw new Error('Model parameter is required');
    }

    const id = getId();

    return set(this.getModelRef(`/${id}`), model);
  }

  update(updates) {
    return update(this.getModelRef(), updates);
  }

  remove(id) {
    return remove(this.getModelRef(`/${id}`));
  }
}

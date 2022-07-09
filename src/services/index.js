import { delay, clone } from '../helper';

import { buyer } from './data/buyer';
import { orders } from './data/orders';
import { stores } from './data/stores';
import { products } from './data/products';
import { categories } from './data/categories';

const data = {
  buyer,
  orders,
  stores,
  products,
  categories
};

export const getData = async (name) => {
  await delay(500);
  return clone(data[name]);
};

export const getDataInstant = (name) => {
  return clone(data[name]);
};

export const getDataById = async (from, id) => {
  await delay(500);
  if (!data[from]) return {};
  const selected = data[from].filter((v) => v._id === id)[0];
  if (!selected) return {};
  return clone(selected);
};

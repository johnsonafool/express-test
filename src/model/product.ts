import fs from 'fs';
import path from 'path';
import type { IProduct } from 'src/types';

import { getRootDir } from '../utils/path';

const p = path.join(getRootDir, 'data', 'products.json');

// TODO fix 6th line json callback function cannot sent outside
const getProductsFromFile = (cb: any) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent.toString()));
    }
  });
};

export class Product implements IProduct {
  public title: string;

  public imageUrl: string;

  public description: string;

  public price: number;

  constructor({ title, imageUrl, description, price }: { title: string; imageUrl: string; description: string; price: number }) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products: IProduct[]) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        if (err) throw err;
      });
    });
  }

  static fetchAll(cb: ReturnType<IProduct[] | any>) {
    getProductsFromFile(cb);
  }
}

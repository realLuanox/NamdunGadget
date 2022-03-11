export interface Alcohol {
  degree: number;
  amount: number;
  englishName: string;
  name: string;
  image: string;
  description?: string;
}

export interface Whiskey extends Alcohol {
  type: 'single' | 'blended';
  age?: number;
}


export interface StorePrice {
  storeName: string;
  object: Alcohol;
  price: number;
}


const a: StorePrice = {
  storeName: '석진상회',
  price: 60000,
  object: {} as Whiskey,
}

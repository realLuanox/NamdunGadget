export interface Alcohol {
  type: string | 'whiskey' | 'tequila' | 'vodka' | 'rum' | 'liquor' | 'sake' | 'gin' | 'china'
  degree: number;
  amount: number;
  englishName: string;
  name: string;
  image: string;
  description?: string;
}

export interface Whiskey extends Alcohol {
  whiskeyType: string | 'single malt' | 'blended malt' | 'blended' | 'grain' | 'rye';
  notes?: string [];
  age?: number;
}


export interface StorePrice {
  storeName: string;
  object: Alcohol;
  price: number;
  priceType?: string;
  etc?: string
}

export interface Cocktail {
  ingredient: Alcohol[];
  method: string | 'build' | 'stir' | 'shake' | "float" | 'blend';
  glass: string | 'old fashioned' | 'highball' | 'martini' | 'flute' | 'wine' | 'Hurricane' | 'saucer' | 'shot' | 'magarita' | 'collins' | 'toddy' | 'tiki mug' | 'copper cup';
  is_oz: boolean;
  description?:string;
  name:string;
  englishName:string;
  degree: number;
  amount: number;
  bartender? :string;
}

const a: StorePrice = {
  storeName: '석진상회',
  price: 60000,
  object: {} as Whiskey,
}

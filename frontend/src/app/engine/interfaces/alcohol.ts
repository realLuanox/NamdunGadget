


export interface Alcohol {
  type: string | 'whiskey' | 'tequila' | 'vodka' | 'rum' | 'liquor' | 'sake' | 'gin' | 'china'
  degree: number;
  amount: number;
  englishName: string;
  name: string;
  image: string;
  description?: string;
  whiskeyType?: string | 'single malt' | 'blended malt' | 'blended' | 'grain' | 'rye';
  alcoholType?: string;
  age?: 'N/A' | number;
  storePrices: StorePrice[];
}

export interface StorePrice {
  buyDate: string;
  amount: number;
  storeName: string;
  price: number;
  priceType?: string;
  etc?: string;
}



export interface Cocktail {
  ingredient: Alcohol[];
  method: string []| 'build' | 'stir' | 'shake' | "float" | 'blend';
  glass: string | 'old fashioned' | 'highball' | 'martini' | 'flute' | 'wine' | 'Hurricane' | 'saucer' | 'shot' | 'magarita' | 'collins' | 'toddy' | 'tiki mug' | 'copper cup';
  is_oz: boolean;
  ice: 'crushed' | 'cubed' | 'none' ;
  description?:string;
  name:string;
  englishName:string;
  degree: number;
  amount: number;
  bartender? :string;
}

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




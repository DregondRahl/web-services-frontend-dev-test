export type Hero = {
  id: number;
  name: string;
  slug: string;
  images: any;
  biography: HeroBiography;
  appearance: HeroAppearance;
  powerstats: HeroPowerstats;
};

export type HeroBiography = {
  fullName: string;
  alignment: string;
  publisher: string;
};

export type HeroAppearance = {
  race: string;
};

export type HeroPowerstats = {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
};

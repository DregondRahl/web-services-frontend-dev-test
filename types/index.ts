export type Hero = {
  id: number;
  name: string;
  slug: string;
  images: any;
  biography: HeroBiography;
  appearance: HeroAppearance;
  powerstats: HeroPowerstats;
  tags: string[];
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

export type UserLocalStorage = [
  record: any,
  setRecord: (value: any) => boolean,
  removeRecord: () => void
];

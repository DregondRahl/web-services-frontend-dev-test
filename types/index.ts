export type Hero = {
  id: number;
  name: string;
  slug: string;
  images: any;
  biography: HeroBiography;
  appearance:HeroAppearance;
};

export type HeroBiography = {
  fullName: string;
  alignment: string;
  publisher: string;
};

export type HeroAppearance = {
  race: string;
};

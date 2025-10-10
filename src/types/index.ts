export interface CarouselCard {
  id: string;
  type: 'match' | 'promo';
  cat?: string;
  time?: string;
  team1?: string;
  team2?: string;
  odd1?: string;
  odd2?: string;
  offerText?: string;
  buttonText?: string;
  isLive?: boolean;
  description?: string;
}

export type GameFilterItem = {
  label: string;
  value: string;
  img: string;
}
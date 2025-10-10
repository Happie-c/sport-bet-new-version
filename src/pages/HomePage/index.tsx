import React from "react";
import { Carousel, LiveMatch, TopBets, LiveFixture, LanguageSelector } from "../../components";
import { FilterProvider } from "../../contexts";
// import { useTranslation } from "../../hooks";
import "./index.scss";

export const HomePage: React.FC = () => {
  // const { t } = useTranslation();

  const carouselData = [
    {
      id: "0",
      type: "match" as const,
      time: "15",
      team1: "Panathinaikos",
      team2: "FC Bayern Munich",
      odd1: "1.20",
      odd2: "5.80",
      isLive: true,
      cat: "tennis",
      round: "2",
    },
    {
      id: "1",
      type: "match" as const,
      time: "21:30",
      team1: "Baskonia Vitoria",
      team2: "Olympiacos",
      odd1: "3.30",
      odd2: "1.43",
      isLive: false,
      cat: "soccer",
    },
    {
      id: "2",
      type: "match" as const,
      time: "21:30",
      team1: "Baskonia Vitoria",
      team2: "Olympiacos",
      odd1: "3.30",
      odd2: "1.43",
      isLive: false,
      cat: "basketball",
    },
    {
      id: "3",
      type: "match" as const,
      time: "21:30",
      team1: "Baskonia Vitoria",
      team2: "Olympiacos",
      odd1: "3.30",
      odd2: "1.43",
      isLive: false,
      cat: "basketball",
    },
    {
      id: "4",
      type: "promo" as const,
      team1: "Baskonia",
      team2: "Olympiacos",
      offerText: "10€ Free Bet*",
      buttonText: "Learn more",
    },
    {
      id: "5",
      type: "promo" as const,
      team1: "Baskonia",
      team2: "Olympiacos",
      offerText: "10€ Free Bet*",
      buttonText: "Learn more",
    },
    {
      id: "6",
      type: "promo" as const,
      team1: "Baskonia",
      team2: "Olympiacos",
      description: "Your golden game changer",
      offerText: "Golden Sub",
      buttonText: "Learn more",
    },
    {
      id: "7",
      type: "promo" as const,
      team1: "Baskonia",
      team2: "Olympiacos",
      description: 'Novileague Champion',
      offerText: "5000€ In Cash*",
      buttonText: "Learn more",
    },
    {
      id: "8",
      type: "promo" as const,
      description: "This is our game",
      offerText: "NBA • Novibet",
      buttonText: "Learn more",
    },
  ];

  return (
    <div className="w-full h-full overflow-y-scroll">
      <div className="absolute top-4 right-4 z-50">
        <LanguageSelector variant="minimal" />
      </div>



      <Carousel cards={carouselData} />
      <FilterProvider>
        <LiveMatch />
      </FilterProvider>
      <FilterProvider>
        <div className="mt-10">
          <TopBets />
        </div>
      </FilterProvider>
      <FilterProvider>
        <div className="mt-10">
          <LiveFixture />
        </div>
      </FilterProvider>
    </div>
  );
};

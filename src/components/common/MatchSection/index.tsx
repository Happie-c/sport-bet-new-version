import React, { useState } from "react";
import MatchTable from "../MatchTable";
import InfoSVG from "../../../assets/images/info_circle_empty.svg";
import './index.scss';
import { liveMatchCats } from "../../../utils/const";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface MatchSectionProps {
  title: string;
  buttonText: string;
  variant?: 'default' | 'white';
  route?: string;
  comp?: string;
}

export const MatchSection: React.FC<MatchSectionProps> = ({
  title,
  buttonText,
  variant = 'default',
  route = '/',
  comp = 'livefixture'
}) => {
  const [activeCat, setActiveCat] = useState<string>("football");
  const navigate = useNavigate();
  return (
    <div className={`flex flex-col gap-4 match-section-container mx-5 mt-2 items-center ${variant === 'white' ? 'white-variant' : ''}`}>
      <div className="left pl-3 flex items-center gap-6 w-full">
        <div className="flex items-center gap-2">
          <div className="home-caption">{title}</div>
          <div className="flex items-center">
            <button type="button">
              <img
                src={InfoSVG}
                width={20}
                height={20}
                className="opacity-60 flex items-center justify-center "
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-[2px]">
          {
            liveMatchCats.map((cat) => (
              <div key={cat.name} className={`flex items-center justify-center gap-2 match-cat ${activeCat === cat.name ? 'active' : ''}`} onClick={() => setActiveCat(cat.name)}>
                <img src={cat.img} alt={cat.name} />
              </div>
            ))
          }
        </div>
        <div className="right ml-auto">
          <button type="button" className="all-fixtures-button" onClick={() => navigate(route)}>
            <div className="flex items-center leading-4">
              {buttonText} <ChevronRightIcon className="w-[15px] h-[15px] ml-2" />
            </div>
          </button>
        </div>
      </div>
      <div className={`w-full ${variant === 'white' ? 'bg-white rounded-2xl' : ''}`}>

        <MatchTable variant={variant} comp={comp} />
      </div>
    </div>
  );
};

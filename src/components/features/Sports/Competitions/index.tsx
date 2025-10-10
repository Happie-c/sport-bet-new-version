import React from 'react';
import { SearchCompetitions } from '../SearchCompetitions';
import { Leagues } from '../Leagues';
import { popularLeaguesData, leaguesData } from '@utils/const';
import "./index.scss";
import { useSport } from '@contexts/SportContext';

export const Competitions: React.FC = () => {
    const { sportState } = useSport();
    const { isSearchFocused } = sportState;
    return (
        <div className='competitions-container bg-white '>
            <SearchCompetitions />
            {(!!!isSearchFocused && <>
                <div className="opacity-50 text-md font-semibold text-[#333] px-2">Popular competitions</div>
                <Leagues data={popularLeaguesData} />
            </>
            )}
            <div className="opacity-50 text-md font-semibold text-[#333] px-2">All competitions</div>
            <Leagues data={leaguesData} />

        </div>
    )
}

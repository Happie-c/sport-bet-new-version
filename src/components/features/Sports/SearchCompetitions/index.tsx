import React from 'react';
import SearchIcon from '@assets/images/search-new.svg';
import LeftArrowIcon from '@assets/images/arrow-left-detailed.svg';
import { useSport } from '@contexts/SportContext';
import "./index.scss";

export const SearchCompetitions: React.FC = () => {
    const { sportState, setSearchFocus } = useSport();
    const { isSearchFocused } = sportState;
    return (
        <div className='search-competitions-container'>
            <div className='search-competitions-content'>
                <div className='w-12 h-12 flex items-center justify-center'>
                    {
                        isSearchFocused ? (<div style={{ maskImage: `url(${LeftArrowIcon})` }} className='w-12 h-12 flex items-center justify-center left-arrow-icon cursor-pointer' onClick={() => setSearchFocus(false)}></div>) : (
                            <img src={SearchIcon} alt='Search' className='search-competitions-icon' style={{ maskImage: `url(${SearchIcon})` }} />

                        )
                    }
                </div>
                <input type='text' placeholder='Search country or competition' className='search-competitions-input w-full' onFocus={() => setSearchFocus(true)} />
            </div>
        </div>
    )
}

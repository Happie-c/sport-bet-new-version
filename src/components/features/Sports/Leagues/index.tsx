import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlusImg from '@assets/images/plus.svg';
import CheckedImg from '@assets/images/check_circle.svg';
import { leaguesData } from '@utils/const';
import { useSport, LeagueData } from '@contexts/SportContext';
import "./index.scss";


export const LeaguesItem: React.FC<{ league: LeagueData }> = ({ league }) => {
    const navigate = useNavigate();
    const { toggleLeagueInCoupon, isLeagueInCoupon } = useSport();
    const isChecked = isLeagueInCoupon(league.id);

    const handleToggle = () => {
        toggleLeagueInCoupon(league);
    };

    return (
        <div className='league-item-container' onClick={() => navigate(`/sports/competitions`)}>
            <div className='flex items-center'>
                <div className='w-12 h-full flex items-center justify-center'>
                    <img src={league.countryFlag} alt={league.countryName} width={24} height={24} className='rounded'/>
                </div>
                <div className='flex flex-col justify-center flex-1'>
                    <div className='country-name'>
                        {league.countryName}
                    </div>
                    <div className='league-name'>
                        {league.leagueName}
                    </div>
                </div>
            </div>
            <div className='plus-icon' onClick={handleToggle}>
                {
                    isChecked ? <img src={CheckedImg} alt="Checked" width={20} height={20} /> : <img src={PlusImg} alt="Plus" width={14} height={14} />
                }
            </div>
        </div>
    )
}
interface LeaguesProps {
    data?: LeagueData[];
}

export const Leagues: React.FC<LeaguesProps> = ({ data = leaguesData }) => {
    return (
        <div className='leagues-container'>
            {data.map(league => (
                <LeaguesItem key={league.id} league={league} />
            ))}
        </div>
    )
}
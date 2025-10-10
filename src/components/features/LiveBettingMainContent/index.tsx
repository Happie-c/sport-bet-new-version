import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';


import FraIcon from '@assets/images/france.png';
import StatImg from '@assets/images/statistics-bars.svg'
import BellImg from '@assets/images/bell.svg'
import Team1Img from '@assets/images/team1.png';
import Team2Img from '@assets/images/team2.png';
import CornerImg from '@assets/images/corner.svg';
import StatsImg from '@assets/images/stats.svg';
import FootballImg from '@assets/images/football.svg';
import AllCollapseImg from '@assets/images/all-collapse.svg';
import AllExpandImg from '@assets/images/all-expand.svg';


import { Transition } from '@headlessui/react';
import './index.scss';
import { SwitchComponent, MatchResultItem, NavigableSwiper } from '@/components/common';
import { BackButton } from '@/components';

const TeamItem: React.FC<{ logo: string }> = ({ logo }) => {
    return (
        <div className='flex flex-col items-center mb-4 h-14'>
            <div className='flex items-center gap-2  bg-white relative rounded-full p-2'>
                <img src={logo} alt={'logo'} className='w-10 h-10 rounded-full' />
                <div className='absolute bottom-0 right-0 bg-blue-400 rounded-full p-1'>
                    <img src={StatImg} className='w-2 h-2' style={{ filter: 'brightness(0) invert(1)' }} />
                </div>
            </div>
        </div>
    )

}

const MatchResult: React.FC<{ isDetail: boolean }> = ({ isDetail }) => {
    const results = [
        { time: 90, team: 2, name: 'Asociacion Deportiva Sarchi', state: 'yellow' },
        { time: 83, team: 1, name: 'Inter San Carlos', state: 'red' },
        { time: 59, team: 1, name: 'Inter San Carlos', state: 'yellow' },
        { time: 45, team: 1, name: 'Inter San Carlos', state: 'goal' },
    ]
    return (
        <Transition
            show={isDetail}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as="div"
            className='w-full'
        >
            <div className='flex flex-col items-center gap-2 justify-center w-full'>
                <div className='text-[14px] flex items-center rounded justify-center px-3 py-2 bg-[var(--bg-card)] w-full'>Second Half 2-0</div>
                <div className='w-full'>
                    {results.map((result, index) => (
                        <div key={index} className={`flex w-full p-2 items-center gap-2 ${result.team == 2 ? 'justify-end' : 'justify-start'}`}>
                            <div className='text-[14px]'>{result.time}'</div>
                            {result.state === 'yellow' && <div className='w-3 h-4 bg-yellow-400 rounded' />}
                            {result.state === 'red' && <div className='w-3 h-4 bg-red-400 rounded' />}
                            {result.state === 'goal' && <img src={FootballImg} className='w-4 h-4' />}
                            <div className='text-[14px] font-bold'>{result.name}</div>
                        </div>
                    ))}
                </div>
                <div className='text-[14px] flex items-center rounded justify-center px-3 py-2 bg-[var(--bg-card)] w-full'>First Half 2-0</div>
                <div className='w-full'>
                    {results.map((result, index) => (
                        <div key={index} className={`flex w-full p-2 items-center gap-2 ${result.team == 2 ? 'justify-end' : 'justify-start'}`}>
                            <div className='text-[14px]'>{result.time}'</div>
                            {result.state === 'yellow' && <div className='w-3 h-4 bg-yellow-400 rounded' />}
                            {result.state === 'red' && <div className='w-3 h-4 bg-red-400 rounded' />}
                            {result.state === 'goal' && <img src={FootballImg} className='w-4 h-4' />}
                            <div className='text-[14px] font-bold'>{result.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Transition>
    )
}



const MatchStatItem: React.FC<{ xG: string, yellowCard: string, corner: string }> = ({ xG, yellowCard, corner }) => {
    return (
        <div className='flex items-center gap-2 justify-center'>
            <div className="text-[12px] ">
                xG {xG}
            </div>
            <div className='flex items-center gap-1 text-[12px]'>

                <div className='bg-yellow-400 rounded-sm w-3 h-4'>
                </div>
                {yellowCard}
            </div>
            <div className='flex items-center gap-1 text-[12px]'>
                <img src={CornerImg} className="w-4 h-4" />
                {corner}
            </div>
        </div>)
}

export const LiveBettingMainContent: React.FC = () => {
    const [isDetail, setIsDetail] = useState(false);
    const [allCollapse, setAllCollapse] = useState(false);
    const [accordionStates, setAccordionStates] = useState<boolean[]>([false, false, false])
    const [activeTab, setActiveTab] = useState('all');
    const [enabled, setEnabled] = useState(true);
    const [favorites, setFavorites] = useState<Set<string>>(new Set());
    const [collapseKey, setCollapseKey] = useState(0);

    const baseTabs = ['all', 'main', 'goals', 'asianLines'];
    const tabs = favorites.size > 0 ? ['favoriteMarkets', ...baseTabs] : baseTabs;

    const handleToggleAllAccordions = () => {
        const newCollapseState = !allCollapse;
        setAllCollapse(newCollapseState);
        setAccordionStates(accordionStates.map(() => newCollapseState));
        // Increment key to force re-render of MatchResultItems
        setCollapseKey(prev => prev + 1);
    };

    const handleToggleFavorite = (id: string) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(id)) {
                newFavorites.delete(id);
            } else {
                newFavorites.add(id);
            }
            return newFavorites;
        });
    };

    const matchResultItems = [
        { id: 'fulltime', title: "Full Time result 🚀", col: 3, oddValues: [{ label: 'Bangladesh', odd: '1.24' }, { label: 'Draw', odd: '1.24' }, { label: 'India', odd: '1.24' }] },
        { id: 'goals', title: "Goals Over/Under 🚀", col: 2, oddValues: [{ label: 'Over 5.5', odd: '1.24' }, { label: 'Under 5.5', odd: '1.24' }, { label: 'Over 6.5', odd: '1.24' }, { label: 'Under 6.5', odd: '1.24' }] },
        { id: 'teamscore', title: "Team to Score Goal (6) 🚀", col: 3, oddValues: [{ label: 'Bangladesh', odd: '1.24' }, { label: 'No Goals', odd: '1.24' }, { label: 'India', odd: '1.24' }] }
    ];

    const displayedItems = activeTab === 'favoriteMarkets' 
        ? matchResultItems.filter(item => favorites.has(item.id))
        : matchResultItems;

    return (
        <div className='live-betting-main-content'>
            <div className='header flex justify-between items-center'>
                <BackButton />
                <div className='flex items-center gap-2'>
                    <img src={FraIcon} alt="Fra" className='w-6 h-6 rounded-full' />
                    <div className='text-[var(--text-secondary)] text-xs'>
                        France - Pro A, Match day 13
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <button type='button' className="btn rounded-full bg-[var(--bg-card)] p-2 hover:bg-[var(--bg-card-hover)]">
                        <img src={StatsImg} className='w-5 h-5 opacity-70' style={{ filter: 'brightness(0) invert(1)' }} />
                    </button>
                    <button type='button' className="btn rounded-full bg-[var(--bg-card)] p-2 hover:bg-[var(--bg-card-hover)]">
                        <img src={BellImg} className='w-5 h-5 opacity-70' style={{ filter: 'brightness(0) invert(1)' }} />
                    </button>
                </div>
            </div>
            <div className='content'>
                <TeamItem logo={Team1Img} />
                <div>
                    <div className="text-sm bg-[var(--bg-card)] rounded px-3 py-2 font-bold flex">
                        Match Finished
                    </div>
                </div>
                <TeamItem logo={Team2Img} />
                <div className="text-[16px] fond-bold flex  w-full text-center justify-center h-16">
                    Mirassol SP
                </div>
                <div className="text-[32px] leading-8 font-extrabold flex items-start justify-center h-16">
                    2 - 1
                </div>
                <div className='text-[16px] font-bold flex  w-full justify-center h-16'>
                    Fluminense RJ
                </div>
                <MatchStatItem xG="1.24" yellowCard="3" corner="5" />
                <div className='text-[14px] font-bold flex justify-center text-[var(--text-secondary)]'>
                    HT 1-0
                </div>
                <MatchStatItem xG="1.24" yellowCard="3" corner="5" />
            </div>
            <div className='flex justify-center flex-col items-center gap-4 w-full mt-7'>
                <div className={`flex transition-all duration-300 w-full max-h-[300px] overflow-y-auto pr-2`}>
                    <MatchResult isDetail={isDetail} />
                </div>
                <div className="close-btn" onClick={() => { setIsDetail(!isDetail) }}>
                    {!isDetail ? <>
                        90' <div className='bg-yellow-400 rounded-sm w-3 h-4' /> Asociacion Deportiva Sarchi
                    </> : <>Close</>}
                    {
                        isDetail ? <ChevronUpIcon className='w-4 h-4' /> : <ChevronDownIcon className='w-4 h-4' />
                    }
                </div>
            </div>
            <div className='flex w-full justify-between mt-8'>
                <NavigableSwiper
                    items={tabs}
                    keyExtractor={(tab) => tab}
                    renderSlide={(tab) => (
                        <button 
                            type='button' 
                            className={`tab-btn capitalize ${activeTab === tab ? 'active' : ''}`} 
                            onClick={() => { setActiveTab(tab) }}
                        >
                            {tab === 'favoriteMarkets' ? 'favorite markets' : tab}
                        </button>
                    )}
                    className='mr-1'
                />
                <div className='flex items-center gap-2'>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <SwitchComponent enabled={enabled} setEnabled={setEnabled} />
                        <div className='text-[10px] uppercase font-bold opacity-60 flex items-center'>
                            bet builder
                        </div>
                    </div>
                    <div onClick={handleToggleAllAccordions} className={`opacity-60  hover:opacity-100 cursor-pointer ${allCollapse ? 'active' : ''}`}>
                        <img src={allCollapse ? AllCollapseImg : AllExpandImg} alt="all collapse" />
                    </div>
                </div>
            </div>
            <div className="tab-content flex flex-col gap-2">
                {displayedItems.map((item) => (
                    <MatchResultItem 
                        key={`${item.id}-${collapseKey}`}
                        id={item.id}
                        title={item.title}
                        col={item.col}
                        oddValues={item.oddValues}
                        isCollapsed={allCollapse}
                        isFavorite={favorites.has(item.id)}
                        onToggleFavorite={handleToggleFavorite}
                    />
                ))}
            </div>




        </div>
    )
}
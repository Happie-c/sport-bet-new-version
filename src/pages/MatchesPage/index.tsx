import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './index.scss';
import './index.scss';
import { BackButton, MatchResultItem, SwitchComponent } from '@/components';
import WTAImg from '../../assets/images/wta.png';
import { SportRightAccordion } from '../../components/features';
import StatsImg from '../../assets/images/stats.svg';
import BellImg from "../../assets/images/bell.svg";
import CzImg from "../../assets/images/cz.png";
import FrImg from "../../assets/images/france.png";
import StreamImg from "../../assets/images/stream.svg";
import TennisImg from "../../assets/images/tennis_hard.svg";
import AllCollapseImg from '@assets/images/all-collapse.svg';
import AllExpandImg from '@assets/images/all-expand.svg';
import ArrowLeftImg from '@assets/images/arrow-left-new.svg';
import ArrowRightImg from '@assets/images/arrow-right-new.svg';

const MatchesPageHeader: React.FC = () => {
    return (
        <div className="flex items-center justify-between gap-2">
            <BackButton variant='white' />
            <div className="flex gap-1 text-[11px] items-center text-[var(--bg-primary)] ">
                <img src={WTAImg} alt="WTA" className="w-5 h-5 rounded-full" />
                WTA 1000 - Wuhan (W) - Matches, Quarter final, Hard
            </div>
            <div className="flex gap-2">
                <div className='flex items-center justify-center cursor-pointer p-2 bg-[#0d38591a] rounded-full'>
                    <img src={StatsImg} alt="Stats" className="w-5 h-5 opacity-70" />
                </div>
                <div className='flex items-center justify-center cursor-pointer p-2 bg-[#0d38591a] rounded-full'>
                    <img src={BellImg} alt="Bell" className="w-5 h-5 opacity-70" />
                </div>

            </div>
        </div>

    )
}

const MatchDetail: React.FC = () => {
    const [allCollapse, setAllCollapse] = useState(false);
    const [accordionStates, setAccordionStates] = useState<boolean[]>([false, false, false])
    const [activeTab, setActiveTab] = useState('all');
    const [enabled, setEnabled] = useState(true);
    const [collapseKey, setCollapseKey] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(true);

    const baseTabs = ['main', 'aces', 'double faults', 'service markets', 'breaks', 'duration', 'sets', 'games'];

    const handleToggleAllAccordions = () => {
        const newCollapseState = !allCollapse;
        setAllCollapse(newCollapseState);
        setAccordionStates(accordionStates.map(() => newCollapseState));
        // Increment key to force re-render of MatchResultItems
        setCollapseKey(prev => prev + 1);
    };

    const matchResultItems = [
        {
            id: 'fulltime',
            title: "Aces 🚀",
            col: 1,
            oddValues: [{ label: 'over 3.5', odd: '1.24' }, { label: 'over 4.5', odd: '1.24' }, { label: 'over 5.5', odd: '1.24' }]
        },
        {
            id: 'goals',
            title: "Katerina Siniakova - Aces 🚀",
            col: 1,
            oddValues: [{ label: 'Over 5.5', odd: '1.24' }, { label: 'Under 5.5', odd: '1.24' }, { label: 'Over 6.5', odd: '1.24' }, { label: 'Under 6.5', odd: '1.24' }]
        },
        {
            id: 'teamscore',
            title: "Jessica Pegula - Aces 🚀",
            col: 1,
            oddValues: [{ label: 'Bangladesh', odd: '1.24' }, { label: 'No Goals', odd: '1.24' }, { label: 'India', odd: '1.24' }]
        }
    ];


    return (
        <div>
            <div className='flex w-full justify-between mt-8'>
                <div className='tabs-swiper-container'>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={4}
                        slidesPerView="auto"
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        onSlideChange={(swiper) => {
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                    >
                        {baseTabs.map((tab) => (
                            <SwiperSlide key={tab} style={{ width: 'auto' }}>
                                <button
                                    type='button'
                                    className={`tab-btn capitalize ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => { setActiveTab(tab) }}
                                >
                                    {tab === 'favoriteMarkets' ? 'favorite markets' : tab}
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {!(isBeginning && isEnd) && (
                        <div className='swiper-navigation-buttons mr-1'>
                            {!isBeginning && (
                                <button
                                    type='button'
                                    className='swiper-btn-prev'
                                    onClick={() => swiperRef.current?.slidePrev()}
                                >
                                    <img src={ArrowLeftImg} alt="Previous" />
                                </button>
                            )}
                            {!isEnd && (
                                <button
                                    type='button'
                                    className='swiper-btn-next'
                                    onClick={() => swiperRef.current?.slideNext()}
                                >
                                    <img src={ArrowRightImg} alt="Next" />
                                </button>
                            )}
                        </div>
                    )}
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <SwitchComponent enabled={enabled} setEnabled={setEnabled} enabledBgColor='#53a5aa' disabledBgColor='#0d385933' enabledBallColor='#fff' disabledBallColor='#fff' />
                        <div className='text-[10px] uppercase font-bold text-[var(--bg-primary)] opacity-60 flex items-center'>
                            bet builder
                        </div>
                    </div>
                    <div onClick={handleToggleAllAccordions} className={`opacity-60  hover:opacity-100 cursor-pointer ${allCollapse ? 'active' : ''}`} >
                        <img src={allCollapse ? AllCollapseImg : AllExpandImg} alt="all collapse" style={{filter: 'brightness(0) invert(0)'}} />
                    </div>
                </div>
            </div>
            <div className="tab-content flex flex-col gap-2 mt-4">
                {matchResultItems.map((item) => (
                    <MatchResultItem
                        key={`${item.id}-${collapseKey}`}
                        id={item.id}
                        title={item.title}
                        col={item.col}
                        oddValues={item.oddValues}
                        isCollapsed={allCollapse}
                        variant='white'
                        favoriteVisible={false}
                    />
                ))}
            </div>

        </div>
    )
}

const MatchesPageLogo: React.FC = () => {
    return (
        <div className="logo-section">
            <div className="w-full flex items-center justify-center gap-2">
                <img src={CzImg} alt="Cz" className="w-12 h-12" />
            </div>
            <div className="flex items-center justify-center gap-2">
                <img src={StreamImg} alt="Stream" className="w-5 h-5" />
                <img src={TennisImg} alt="Tennis" className="w-5 h-5" />
            </div>
            <div className="w-full flex items-center justify-center gap-2">
                <img src={FrImg} alt="Fr" className="w-12 h-12" />
            </div>
            <div className='flex items-start justify-center gap-2 text-[12px] text-[var(--bg-primary)]'>
                Katerina Siniakova
            </div>
            <div className="flex items-center justify-center ">
                <div className=" text-[12px] bg-[#0d38591a] text-[var(--bg-primary)] h-8 rounded-lg px-3 py-2">
                    Fri 06:00
                </div>
            </div>
            <div className='flex items-start justify-center gap-2 text-[12px] text-[var(--bg-primary)]'>
                essica Pegula
            </div>

        </div>
    )
}


export const MatchesPage: React.FC = () => {
    return (
        <div className="matches-page">
            <div className="left-section">
                <div className="left-section-content gap-8">
                    <MatchesPageHeader />
                    <div className='flex items-center justify-center w-full'>
                        <MatchesPageLogo />
                    </div>
                    <MatchDetail />
                </div>
            </div>

            <div className="right-section">
                <div className="right-section-content">
                    <SportRightAccordion title="Soccer" />
                    <SportRightAccordion title="Basketball" />
                </div>
            </div>
        </div >
    );
};


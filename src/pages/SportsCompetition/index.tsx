import React, { useState } from 'react';
import './index.scss';
import { SportRightAccordion } from '@/components/features';
import { BackButton, Filter } from '@/components';
import WorldCupImg from '@assets/images/worldcup.png';
import { NavigableSwiper } from '@/components/common';
import { FilterProvider } from '@/contexts';
import { CouponDataItem } from '@/components/features/Sports/CouponContent/CouponDataItem';
import FrFlagImg from '@assets/images/france.png';

export const SportsCompetition: React.FC = () => {
    const tabs = ['Matches- Qualitying UEFA', 'Matches - Qualifying CONCACAF', 'Matches - Qualifying CAF', "Matches - Qualifying AFC", "Outrights", "Outrights UEFA"]
    const [activeTab, setActiveTab] = useState(tabs[0])
    return (
        <FilterProvider>

            <div className='sports-competition'>
                <div className="left-section">
                    <div className="left-section-content">
                        <div className='sports-competition-header flex flex-col gap-4'>
                            <div>
                                <BackButton />
                            </div>
                            <div className='flex items-center gap-3'>
                                <img src={WorldCupImg} alt="World Cup" className='w-9 h-9' />
                                <div className='flex flex-col items-start'>
                                    <div className='text-[13px] text-white opacity-70'>
                                        World
                                    </div>
                                    <div className='text-[18px] font-bold text-white '>
                                        World Cup 2026
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center  gap-2'>

                                <NavigableSwiper
                                    items={tabs}
                                    renderSlide={(tab) => (
                                        <button
                                            type='button'
                                            className={`tab-btn capitalize ${activeTab === tab ? 'active' : ''}`}
                                            onClick={() => { setActiveTab(tab) }}
                                        >
                                            {tab}
                                        </button>
                                    )}
                                    className='mr-1'
                                />
                                <Filter />
                            </div>


                            <div className='content'>
                                <CouponDataItem
                                    flagImage={FrFlagImg}
                                    flagAlt="France"
                                    leagueName="Czech Republic - Liga Pro"
                                    marketLabels={[
                                        'Match Winner',
                                        'Match Total Points',
                                        'Asian Handicap - Match Games'
                                    ]}
                                    comp="other"
                                    variant="white"
                                />
                                <CouponDataItem
                                    flagImage={FrFlagImg}
                                    flagAlt="France"
                                    leagueName="Czech Republic - Liga Pro"
                                    marketLabels={[
                                        'Match Winner',
                                        'Match Total Points',
                                        'Asian Handicap - Match Games'
                                    ]}
                                    comp="other"
                                    variant="white"
                                />
                                <CouponDataItem
                                    flagImage={FrFlagImg}
                                    flagAlt="France"
                                    leagueName="Czech Republic - Liga Pro"
                                    marketLabels={[
                                        'Match Winner',
                                        'Match Total Points',
                                        'Asian Handicap - Match Games'
                                    ]}
                                    comp="other"
                                    variant="white"
                                />
                                <CouponDataItem
                                    flagImage={FrFlagImg}
                                    flagAlt="France"
                                    leagueName="Czech Republic - Liga Pro"
                                    marketLabels={[
                                        'Match Winner',
                                        'Match Total Points',
                                        'Asian Handicap - Match Games'
                                    ]}
                                    comp="other"
                                    variant="white"
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="right-section">
                    <div className="right-section-content">
                        <SportRightAccordion title="Soccer" />
                        <SportRightAccordion title="Basketball" />
                    </div>
                </div>
            </div>
        </FilterProvider>
    )
}

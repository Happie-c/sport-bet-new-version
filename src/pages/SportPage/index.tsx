import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SportCatSelect } from '@components/features';
import { useSport } from '@contexts/SportContext';
import "./index.scss";
import { SportProvider } from '@contexts/SportContext';
import { Competitions } from '@components/features';
import DelImg from '@assets/images/delete.svg';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { CouponContent, SportRightAccordion } from '@components/features';

export const SportPageContent: React.FC = () => {
    const { sport } = useParams<{ sport: string }>();
    const { sportState, setSelectedSport, clearCouponLeagues } = useSport();
    const { selectedSport, couponLeagues } = sportState;
    const [activeTab, setActiveTab] = useState<'competitions' | 'coupon'>('competitions');
    // Update selected sport when route param changes
    useEffect(() => {
        if (sport && sport !== selectedSport) {
            setSelectedSport(sport);
        }
    }, [sport, selectedSport, setSelectedSport]);

    return (
        <div className='sport-page'>

            <div className='sport-left-section p-4 gap-6 flex flex-col'>
                <SportCatSelect />

                {/* Display current sport state for debugging/demo */}
                <div className="flex items-center gap-2 bg-transparent justify-between">
                    <div className='flex items-center'>
                        <button type='button' className={`tab-button ${activeTab === 'competitions' ? 'active' : ''}`} onClick={() => setActiveTab('competitions')}>Competitions</button>
                        <button type='button' className={`tab-button ${activeTab === 'coupon' ? 'active' : ''}`} onClick={() => setActiveTab('coupon')}>Coupon</button>
                    </div>
                    <div className='flex items-center gap-2'>
                        {
                            couponLeagues.length > 0 && <>
                                <button type='button' className='btn p-2 bg-[#6df6ff0d]' onClick={() => clearCouponLeagues()}>
                                    <div className='w-5 h-5 opacity-60 hover:opacity-100 bg-white hover:bg-[#6df6ff] transition-all' style={{ mask: `url(${DelImg})` }} />
                                </button>
                                <button type='button' className='btn uppercase text-[13px] relative bg-[#008f93] px-3 py-0 rounded-lg h-9'>
                                    coupon <ChevronRightIcon className='w-4 h-4' />
                                    {

                                        <div className='absolute -top-3 -right-0 font-bold flex items-center justify-center text-[12px] w-5 h-5 p-0.5 rounded-full bg-[white] text-black'>{couponLeagues.length}</div>
                                    }
                                </button>
                            </>
                        }
                    </div>
                </div>
                {activeTab === 'competitions' && <Competitions />}
                {activeTab === 'coupon' && <CouponContent />}
            </div>
            <div className='sport-right-section w-[380px] pt-4'>
                <SportRightAccordion title="Soccer" />
                <SportRightAccordion title="Basketball" />
            </div>
        </div>
    );
};


export const SportPage: React.FC = () => {
    return (
        <SportProvider>
            <SportPageContent />
        </SportProvider>
    );
};


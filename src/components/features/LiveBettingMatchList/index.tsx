import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import './index.scss';
import { liveMatchCats, leaguesData } from '@/utils/const';
import { SportRightAccordionItem } from '@/components/features/Sports/SportRightAccordion';
import AllCollapseImg from '@/assets/images/all-collapse.svg';
import AllExpandImg from '@/assets/images/all-expand.svg';


export const MatchItem: React.FC<{ league: { id: string, leagueName: string, countryName: string, countryFlag: string }, allCollapse: boolean }> = ({ league, allCollapse }) => {
    return (
        <Disclosure key={String(allCollapse)} as="div" defaultOpen={!allCollapse}>
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transparent px-0 pl-2 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring ">
                        <div className="flex items-center gap-2">
                            <img src={league.countryFlag} alt={league.countryName} className="w-4 h-4 rounded-full" />
                            <div className="text-white font-medium text-[13px]">{league.countryName}-{league.leagueName}</div>
                            <div className='bg-[var(--border-dark)] rounded-full text-[11px] h-5 w-5 flex items-center justify-center'>1</div>

                        </div>

                        <div className="flex items-center gap-1">

                            <ChevronUpIcon
                                className={`${!open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-white`}
                            />
                        </div>


                    </Disclosure.Button>
                    <Disclosure.Panel className="p-2 text-s">
                        <div className='flex flex-col gap-0.5'>
                            <SportRightAccordionItem />
                            <SportRightAccordionItem />
                            <SportRightAccordionItem />
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export const LiveBettingMatchAccordion: React.FC<{ cat: { name: string, img: string } }> = ({ cat }) => {
    const [allCollapse, setAllCollapse] = useState(false);
    return (
        <Disclosure defaultOpen={true} as="div" >
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transparent pl-2 py-2 pb-0 text-left text-sm font-medium focus:outline-none focus-visible:ring ">
                        <div className="flex items-center gap-2">
                            <img src={cat.img} alt={cat.name} className="w-4 h-4" />
                            <div className="text-white font-bold text-md capitalize">{cat.name}</div>
                        </div>

                        <div className="flex items-center gap-1">
                            {
                                open && (
                                    <div onClick={(e) => {
                                        e.stopPropagation();
                                        setAllCollapse(!allCollapse);
                                    }} className={`opacity-60  hover:opacity-100 cursor-pointer ${allCollapse ? 'active' : ''}`}>
                                        <img src={allCollapse ? AllCollapseImg : AllExpandImg} alt="all collapse" />
                                    </div>
                                )
                            }
                            <ChevronUpIcon
                                className={`${!open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-white`}
                            />
                        </div>


                    </Disclosure.Button>
                    <Disclosure.Panel className="pl-2 pr-0  text-s">
                        {
                            leaguesData.map((league) => (
                                <MatchItem key={league.id} league={league} allCollapse={allCollapse} />
                            ))
                        }
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export const LiveBettingMatchList: React.FC = () => {
    return (
        <div className="w-full flex flex-col gap-2">
            {
                liveMatchCats.map((cat) => (
                    <LiveBettingMatchAccordion key={cat.name} cat={cat} />
                ))
            }
        </div>
    )
}

import React, { useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import StarImg from '@assets/images/star.svg'
import './index.scss'
import { OddItem } from '../MatchTable'

interface MatchResultItemProps {
    id: string
    title: string
    col: number
    oddValues: { label: string, odd: string }[]
    isCollapsed?: boolean
    isFavorite?: boolean
    onToggleFavorite?: (id: string) => void
    variant?: 'default' | 'white',
    favoriteVisible?: boolean
}

export const MatchResultItem: React.FC<MatchResultItemProps> = ({
    id,
    title,
    col,
    oddValues,
    isCollapsed = false,
    isFavorite = false,
    onToggleFavorite,
    variant = 'default',
    favoriteVisible = true
}) => {
    return (
        <div className={`match-result-item ${variant}`} style={{background: variant === 'white'? 'linear-gradient(0deg,#008f930d 0% 100%),#0d385914': 'bg-card'}}>
            <Disclosure defaultOpen={!isCollapsed}>
                {({ open, close }) => {
                    // Effect to control collapse state from parent
                    useEffect(() => {
                        if (isCollapsed && open) {
                            close();
                        } else if (!isCollapsed && !open) {
                            // We can't open from here without forcing a re-render
                            // So we'll use the key prop on the parent to reset
                        }
                    }, [isCollapsed]);

                    return (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg text-sm font-medium focus:outline-none focus-visible:ring ">
                                <span className={`text-[13px] pl-1 ${variant === 'white' ? 'text-black' : ''}`}>{title}</span>
                                <div className='flex items-center gap-1'>
                                    <button
                                        type='button'
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onToggleFavorite?.(id);
                                        }}
                                        className='star-btn'
                                    >
                                        {
                                            favoriteVisible && (
                                                <img
                                                    src={StarImg}
                                                    alt="star"
                                                    className={`w-4 h-4 ${isFavorite ? 'favorite' : ''}`}
                                                    style={{
                                                        filter: isFavorite
                                                            ? 'brightness(0) saturate(100%) invert(79%) sepia(98%) saturate(1456%) hue-rotate(358deg) brightness(102%) contrast(101%)'
                                                            : 'brightness(0) invert(1)'
                                                    }}
                                                />
                                            )
                                        }
                                    </button>
                                    <ChevronUpIcon
                                        className={`${!open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 ${variant === 'white' ? 'text-black' : 'text-white'}`}
                                    />
                                </div>
                            </Disclosure.Button>
                            <Disclosure.Panel className={`mb-2 mt-3 text-sm grid grid-cols-${col} gap-0.5 overflow-hidden rounded-lg`}>
                                {
                                    oddValues.map((oddValue) => (
                                        <OddItem key={oddValue.label} variant={variant} label={oddValue.label} value={oddValue.odd} />
                                    ))
                                }
                            </Disclosure.Panel>
                        </>
                    );
                }}
            </Disclosure>

        </div>



    )
}

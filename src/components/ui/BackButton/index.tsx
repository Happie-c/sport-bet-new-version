import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';

import './index.scss'

export const BackButton: React.FC<{variant?: 'default' | 'white'}> = ({variant = 'default'}) => {
    const navigate = useNavigate();
    return (
        <button type='button' className={`btn-back ${variant}`} onClick={() => { navigate('/') }}>
            <ChevronLeftIcon className='w-4 h-4' />
            <div className='flex items-center leading-4'>
                Back
            </div>

        </button>
    )
}
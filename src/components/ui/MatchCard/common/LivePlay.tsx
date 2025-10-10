import React from 'react';
import LivePlayIcon from '@/assets/images/stream.svg';
import './index.scss';
const LivePlay: React.FC = () => {
    return (
        <div className='live-play'>
            <img src={LivePlayIcon} alt='Live Play' />
        </div>
    )
}

export default LivePlay;
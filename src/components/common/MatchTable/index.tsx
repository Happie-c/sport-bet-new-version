import React from 'react';
import './index.scss'
import LiveBadge from '@/components/ui/MatchCard/common/LiveBadge';
import Team1Img from '@/assets/images/team1.png';
import Team2Img from '@/assets/images/team2.png';
import StatsIcon from '@/assets/images/stats.svg';
import Filter from '../Filter';
import { useFilter } from '@/contexts/FilterContext';
import { filterItems1, filterItems2, filterItems3 } from '@/utils/const';
import { useNavigate } from 'react-router-dom';

interface MatchTableProps {
    variant?: 'default' | 'white';
    comp?: string;
}

// Default headers when no filters are selected (using first item from each filter group)
const defaultHeaders = [
    filterItems1[0].label,  // 'Full Time Result'
    filterItems2[0].label,  // 'Goals Over/Under'
    filterItems3[0].label   // 'Both teams to Score 🚀'
]

export const TeamInfo = ({ logoSrc, teamName, }: { logoSrc: string, teamName: string }) => {
    return (
        <div className="team-info flex items-center gap-2">
            <div className="team-logo">
                <img src={logoSrc} alt={teamName} />
            </div>
            <div className="team-name">
                {teamName}
            </div>
        </div>
    )
}

export const OddItem = ({ label, value, variant = 'default' }: { label: string, value: string, variant?: 'default' | 'white' }) => {
    return (
        <div className={`odds-item ${variant}`}>
            <span className="odds-label">{label}</span>
            <span className="odds-value">{value}</span>
        </div>
    )
}

// Pixel Perfect Match Event Row - Based on Screenshot
export const MatchEventRow: React.FC<{ variant?: 'default' | 'white', comp?: string }> = ({ variant = 'default', comp = 'livefixture' }) => {
    const navigate = useNavigate();
    return (
        <div className={`match-event-row cursor-pointer ${variant === 'white' ? 'white-variant' : ''}`} onClick={() => comp === 'topbets' ? navigate(`/sports/matches`) : navigate(`/live-betting/1`)} >
            {/* Main row container */}
            {/* Left section - Team info and scores */}
            <div className="flex items-center gap-6 pr-2">
                <div className="team-section flex flex-col gap-1">
                    <TeamInfo
                        logoSrc={Team1Img}
                        teamName="Akritas Chlorakas"
                    />
                    <TeamInfo
                        logoSrc={Team2Img}
                        teamName="Doxa Katokopias"
                    />
                </div>
                <div className='flex flex-col h-full items-end min-h-[40px] justify-between'>
                    <div className='score'>1</div>
                    <div className='score'>0</div>
                </div>
                <div className="match-info">
                    <div className="stats-icon">
                        <img src={StatsIcon} alt="Stats" width={16} height={16} className='white-img' />
                    </div>
                    <div className="match-time">45:00</div>
                </div>
            </div>

            {/* Middle section - 1X2 odds */}
            <div className="odds-section grid-cols-3">
                <OddItem label="1" value="1.83" />
                <OddItem label="x" value="6.2" />
                <OddItem label="2" value="1.83" />
            </div>

            {/* Right section - Over/Under odds */}
            <div className="odds-section grid-cols-2">
                <OddItem label="O 5.5" value="1.73" />
                <OddItem label="U 5.5" value="1.83" />
            </div>

            {/* Far right section - Markets not available */}
            <div className="odds-section !flex items-center !gap-4">
                <div className="odds-container unavailable">
                    <span className="unavailable-text">Markets are not available</span>
                </div>
                {comp === 'topbets' || comp === "other" && (
                    <div className='text-[#333333] text-[13px]'>
                        +328
                    </div>
                )}
            </div>
        </div >
    );
};

export const Footer: React.FC = () => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="show-more-footer" onClick={handleClick}>
            <span className="show-more-text">
                {isExpanded ? "View All" : "Show more"}
            </span>
            <span className="arrow-icon">
                {isExpanded ? (
                    // Right arrow
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    // Down arrow
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </span>
        </div>
    );
};

export const MatchTable: React.FC<MatchTableProps> = ({ variant = 'default', comp = 'livefixture' }) => {
    const { selectedFilters } = useFilter()

    // Helper function to find label by value
    const findLabelByValue = (value: string | null, items: { label: string, value: string }[]): string => {
        if (!value) return ''
        const item = items.find(item => item.value === value)
        return item ? item.label : ''
    }

    // Get the display names for selected filters, fallback to default headers
    const header1 = findLabelByValue(selectedFilters.column1, filterItems1) || defaultHeaders[0]
    const header2 = findLabelByValue(selectedFilters.column2, filterItems2) || defaultHeaders[1]
    const header3 = findLabelByValue(selectedFilters.column3, filterItems3) || defaultHeaders[2]

    return (
        <div className={`table-container ${variant === 'white' ? 'white-variant' : ''}`}>
            <div className='table-header relative'>
                <div className='flex items-center gap-2'>
                    <div className='title'>
                        Matches
                    </div>
                    <LiveBadge />
                </div>
                <div className='table-header-item'>
                    {header1}
                </div>
                <div className='table-header-item'>
                    {header2}
                </div>
                <div className='table-header-item'>
                    {header3}
                </div>
                <div className='table-header-item absolute right-4'>
                    <Filter variant={variant} />
                </div>
            </div>
            <div className="table-body">
                <MatchEventRow variant={variant} comp={comp} />
                <MatchEventRow variant={variant} comp={comp} />
                <MatchEventRow variant={variant} comp={comp} />
                <MatchEventRow variant={variant} comp={comp} />
                <MatchEventRow variant={variant} comp={comp} />
                <MatchEventRow variant={variant} comp={comp} />
                <MatchEventRow variant={variant} comp={comp} />
                <MatchEventRow variant={variant} comp={comp} />
                <MatchEventRow variant={variant} comp={comp} />
                <MatchEventRow variant={variant} comp={comp} />
                <MatchEventRow variant={variant} comp={comp} />
            </div>
            <div className="table-footer">
                <Footer />
            </div>
        </div>
    )
}

export default MatchTable

import FootballImg from '../assets/images/football.svg';
import BasketballImg from '../assets/images/basketball.svg';
import TennisImg from '../assets/images/tennis.svg';
import VolleyballImg from '../assets/images/volley.svg';
import BaseballImg from '../assets/images/baseball.svg';
import HandballImg from '../assets/images/handball.svg';
import IceHockeyImg from '../assets/images/ice_hockey.svg';
import TableTennisImg from '../assets/images/table_tennis.svg';
import AmericanFootballImg from '../assets/images/american_football.svg';
import CricketImg from '../assets/images/cricket.svg';
import CounterStrikeImg from '../assets/images/counter_strike.svg';
import DOTA2Img from '../assets/images/dota.svg';
import FormulaImg from '../assets/images/formula_1.svg';
import MotorImg from '../assets/images/wrc.svg';
import LOLImg from '../assets/images/league_of_legends.svg';
import FutsalImg from '../assets/images/futsal.svg';
import MMAImg from '../assets/images/mma.svg';
import BoxingImg from '../assets/images/boxing.svg';
import WaterpoloImg from '../assets/images/water_polo.svg';
import DartsImg from '../assets/images/darts.svg';
import SnookerImg from '../assets/images/snooker.svg';
import RugbyLeagueImg from '../assets/images/rugby_league.svg';
import RugbyUnionImg from '../assets/images/rugby_union.svg';
import CyclingImg from '../assets/images/cycling.svg';
import HorseImg from '../assets/images/horse_race.svg';
import GolfImg from '../assets/images/golf.svg';
import GaelicFootballImg from '../assets/images/gaelic_football.svg';
import GaelicHurlingImg from '../assets/images/gaelic_hurling.svg';
import PoliticsImg from '../assets/images/politics.svg';
import OlympicsImg from '../assets/images/olympic_games.svg';
import EntertainmentImg from '../assets/images/entertainment.svg';
import StreamImg from '../assets/images/streaming.svg';
import FieldsImg from '../assets/images/field.svg';
import StatsImg from '../assets/images/stats.svg';
import StandingImg from '../assets/images/standings.svg';
import TimelineImg from '../assets/images/timeline.svg';

import { GameFilterItem } from '@/types';

export const liveMatchCats = [
    {
        name: 'football',
        img: FootballImg
    }, {
        name: 'basketball',
        img: BasketballImg
    }, {
        name: 'tennis',
        img: TennisImg
    }, {
        name: 'volleyball',
        img: VolleyballImg
    },
    {
        name: 'baseball',
        img: BaseballImg
    }, {
        name: 'handball',
        img: HandballImg
    }, {
        name: "ice-hockey",
        img: IceHockeyImg
    }
]


// Filter items data (same as in Filter component)
export const filterItems1: { label: string, value: string }[] = [
    {
        label: 'Full Time Result',
        value: 'full_time_result'
    },
    {
        label: 'Half Time Result 🚀',
        value: 'half_time_result'
    },
    {
        label: "Double Chance",
        value: 'double_chance'
    },
]

export const filterItems2: { label: string, value: string }[] = [
    { label: "Goals Over/Under", value: 'goals_over_under' },
    { label: "1st Half Goals Over/Under 🚀", value: 'first_half_goals_over_under' },
    { label: "Corners Over/Under 🚀", value: 'corners_over_under' },
]

export const filterItems3: { label: string, value: string }[] = [
    { label: "Both teams to Score 🚀", value: 'both_teams_to_score' },
    { label: "1st Half - Corners to Score 🚀", value: 'first_half_both_teams_to_score' },
    { label: "Yellow Cards Over/Under 🚀", value: 'yellow_cards_over_under' }
]

export const gameFilterItems: GameFilterItem[] = [
    { label: "Soccer", value: 'soccer', img: FootballImg },
    { label: "Basketball", value: 'basketball', img: BasketballImg },
    { label: "Tennis", value: 'tennis', img: TennisImg },
    { label: 'Table Tennis', value: 'table_tennis', img: TableTennisImg },
    { label: "Volleyball", value: 'volleyball', img: VolleyballImg },
    { label: "American Football", value: 'american_football', img: AmericanFootballImg },
    { label: "Baseball", value: 'baseball', img: BaseballImg },
    { label: "Ice Hockey", value: 'ice_hockey', img: IceHockeyImg },
    { label: "Cricket", value: 'cricket', img: CricketImg },
    { label: "Counter Strike", value: 'counter_strike', img: CounterStrikeImg },
    { label: "DOTA 2", value: 'dota_2', img: DOTA2Img },
]

export const timeFilterItems: { label: string, value: string | number }[] = [
    { label: "All", value: "all" },
    { label: '12 hours', value: 12 },
    { label: '3 hours', value: 3 },
    { label: '1 hour', value: 1 },
]

export const gameSelectItems: { label: string, value: string, img: string, badge: number }[] = [
    { label: "All matches", value: 'all', img: '', badge: 442 },
    { label: "Soccer", value: 'football', img: FootballImg, badge: 12 },
    { label: "Basketball", value: 'basketball', img: BasketballImg, badge: 23 },
    { label: "Tennis", value: 'tennis', img: TennisImg, badge: 33 },
    { label: 'Table Tennis', value: 'table_tennis', img: TableTennisImg, badge: 12 },
    { label: "Volleyball", value: 'volleyball', img: VolleyballImg, badge: 12 },
    { label: "American Football", value: 'american_football', img: AmericanFootballImg, badge: 55 },
    { label: "Baseball", value: 'baseball', img: BaseballImg, badge: 2 },
    { label: "Ice Hockey", value: 'ice_hockey', img: IceHockeyImg, badge: 1 },
    { label: "Cricket", value: 'cricket', img: CricketImg, badge: 2 },
    { label: "Counter Strike", value: 'counter_strike', img: CounterStrikeImg, badge: 3 },
    { label: "DOTA 2", value: 'dota_2', img: DOTA2Img, badge: 12 },
]


export const sportItems = [
    { id: 'soccer', name: 'Soccer', img: FootballImg },
    { id: 'basketball', name: 'Basketball', img: BasketballImg },
    { id: 'tennis', name: 'Tennis', img: TennisImg },
    { id: 'volleyball', name: 'Volleyball', img: VolleyballImg },
    { id: 'american_football', name: 'American Football', img: AmericanFootballImg },
    { id: 'baseball', name: 'Baseball', img: BaseballImg },
    { id: 'table_tennis', name: 'Table Tennis', img: TableTennisImg },
    { id: "formula1", name: "Formula 1", img: FormulaImg },
    { id: "motorsport", name: "Motorsport", img: MotorImg },
    { id: "league_of_legends", name: "League of Legends", img: LOLImg },
    { id: 'counter_strike', name: 'Counter Strike', img: CounterStrikeImg },
    { id: 'dota_2', name: 'DOTA 2', img: DOTA2Img },
    { id: 'ice_hockey', name: 'Ice Hockey', img: IceHockeyImg },
    { id: 'handball', name: 'Handball', img: HandballImg },
    { id: 'futsal', name: 'Futsal', img: FutsalImg },
    { id: 'mma', name: 'MMA', img: MMAImg },
    { id: 'boxing', name: 'Boxing', img: BoxingImg },
    { id: 'water_polo', name: 'Water Polo', img: WaterpoloImg },
    { id: 'cricket', name: 'Cricket', img: CricketImg },
    { id: 'darts', name: 'Darts', img: DartsImg },
    { id: 'snooker', name: 'Snooker', img: SnookerImg },
    { id: 'rugby_league', name: 'Rugby League', img: RugbyLeagueImg },
    { id: 'rugby_union', name: 'Rugby Union', img: RugbyUnionImg },
    { id: 'cycling', name: 'Cycling', img: CyclingImg },
    { id: 'horse_race', name: 'Horse Race', img: HorseImg },
    { id: 'golf', name: 'Golf', img: GolfImg },
    { id: 'gaelic_football', name: 'Gaelic Football', img: GaelicFootballImg },
    { id: 'gaelic_hurling', name: 'Gaelic Hurling', img: GaelicHurlingImg },
    { id: 'politics', name: 'Politics', img: PoliticsImg },
    { id: 'olympic_games', name: 'Olympic Games', img: OlympicsImg },
    { id: 'entertainment', name: 'Entertainment', img: EntertainmentImg },

]



export const leaguesData: { id: string, countryName: string, countryFlag: string, leagueName: string }[] = [
    {
        id: '1',
        countryName: 'France',
        countryFlag: 'https://flagcdn.com/w40/fr.png',
        leagueName: 'Pro A'
    },
    {
        id: '2',
        countryName: 'England',
        countryFlag: 'https://flagcdn.com/w40/gb-eng.png',
        leagueName: 'Premier League'
    },
    {
        id: '3',
        countryName: 'Spain',
        countryFlag: 'https://flagcdn.com/w40/es.png',
        leagueName: 'La Liga'
    },
    {
        id: '4',
        countryName: 'Germany',
        countryFlag: 'https://flagcdn.com/w40/de.png',
        leagueName: 'Bundesliga'
    },
    {
        id: '5',
        countryName: 'Italy',
        countryFlag: 'https://flagcdn.com/w40/it.png',
        leagueName: 'Serie A'
    },
    {
        id: '6',
        countryName: 'USA',
        countryFlag: 'https://flagcdn.com/w40/us.png',
        leagueName: 'NBA'
    },
    {
        id: '7',
        countryName: 'Netherlands',
        countryFlag: 'https://flagcdn.com/w40/nl.png',
        leagueName: 'Eredivisie'
    },
    {
        id: '8',
        countryName: 'Portugal',
        countryFlag: 'https://flagcdn.com/w40/pt.png',
        leagueName: 'Primeira Liga'
    },
    {
        id: '9',
        countryName: 'Greece',
        countryFlag: 'https://flagcdn.com/w40/gr.png',
        leagueName: 'Super League'
    },
    {
        id: '10',
        countryName: 'Brazil',
        countryFlag: 'https://flagcdn.com/w40/br.png',
        leagueName: 'Brasileirão'
    }
]

export const popularLeaguesData: { id: string, countryName: string, countryFlag: string, leagueName: string }[] = [
    {
        id: 'pop-1',
        countryName: 'England',
        countryFlag: 'https://flagcdn.com/w40/gb-eng.png',
        leagueName: 'Premier League'
    },
    {
        id: 'pop-2',
        countryName: 'Spain',
        countryFlag: 'https://flagcdn.com/w40/es.png',
        leagueName: 'La Liga'
    },
    {
        id: 'pop-3',
        countryName: 'Germany',
        countryFlag: 'https://flagcdn.com/w40/de.png',
        leagueName: 'Bundesliga'
    },
    {
        id: 'pop-4',
        countryName: 'Italy',
        countryFlag: 'https://flagcdn.com/w40/it.png',
        leagueName: 'Serie A'
    },
    {
        id: 'pop-5',
        countryName: 'Europe',
        countryFlag: 'https://flagcdn.com/w40/eu.png',
        leagueName: 'UEFA Champions League'
    },
    {
        id: 'pop-6',
        countryName: 'USA',
        countryFlag: 'https://flagcdn.com/w40/us.png',
        leagueName: 'NBA'
    },
    {
        id: 'pop-7',
        countryName: 'Europe',
        countryFlag: 'https://flagcdn.com/w40/eu.png',
        leagueName: 'UEFA Europa League'
    },
    {
        id: 'pop-8',
        countryName: 'France',
        countryFlag: 'https://flagcdn.com/w40/fr.png',
        leagueName: 'Ligue 1'
    }
]

export const livePanelIcons = [
    {
        id: 'streaming',
        img: StreamImg
    },
    {
        id: 'fields',
        img: FieldsImg
    },
    {
        id: 'stats',
        img: StatsImg
    },
    {
        id: 'standing',
        img: StandingImg
    },
    {
        id: 'timeline',
        img: TimelineImg
    }
]
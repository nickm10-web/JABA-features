import { useState } from 'react'
import './App.css'

// Icons as SVG components
const Icons = {
  Clipboard: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
      <path d="M9 12h6"/><path d="M9 16h6"/>
    </svg>
  ),
  Users: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Smile: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
      <line x1="9" y1="9" x2="9.01" y2="9"/>
      <line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>
  ),
  BarChart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10"/>
      <line x1="18" y1="20" x2="18" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="16"/>
    </svg>
  ),
  Building: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
      <path d="M9 22v-4h6v4"/>
      <line x1="8" y1="6" x2="8.01" y2="6"/>
      <line x1="16" y1="6" x2="16.01" y2="6"/>
      <line x1="12" y1="6" x2="12.01" y2="6"/>
      <line x1="8" y1="10" x2="8.01" y2="10"/>
      <line x1="16" y1="10" x2="16.01" y2="10"/>
      <line x1="12" y1="10" x2="12.01" y2="10"/>
      <line x1="8" y1="14" x2="8.01" y2="14"/>
      <line x1="16" y1="14" x2="16.01" y2="14"/>
      <line x1="12" y1="14" x2="12.01" y2="14"/>
    </svg>
  ),
  Sparkles: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/>
      <path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/>
    </svg>
  ),
  DollarSign: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  ChevronRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  ChevronLeft: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Bell: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
  Trash: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"/>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  TrendingUp: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  FileText: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  ),
  Wallet: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>
    </svg>
  ),
  Target: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  Search: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  Image: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
  ),
  Eye: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  Trophy: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
    </svg>
  ),
  Download: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  ),
  Share: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  ),
  Lightbulb: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
      <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7Z"/>
    </svg>
  ),
  Edit: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  ),
  MessageCircle: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
}

// Real data from JABA dashboard
const contacts = [
  { name: 'Maya Lopez', title: 'Sr. Brand Partnerships Manager', company: 'NIKE', industry: 'Apparel', email: 'maya.l@nike.com', phone: '(503) 555-0142', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
  { name: 'Cameron Vance', title: 'Global Partnerships Director', company: 'ADIDAS', industry: 'Apparel', email: 'c.vance@adidas.com', phone: '(971) 555-0198', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
  { name: 'Michael Thompson', title: 'Digital Marketing Director', company: 'GATORADE', industry: 'Beverage', email: 'm.thompson@gatorade.com', phone: '(312) 555-0167', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
  { name: 'Elena Rossi', title: 'Athlete Marketing Manager', company: 'NEW BALANCE', industry: 'Apparel', email: 'e.rossi@newbalance.com', phone: '(617) 555-0134', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
  { name: 'Jason Wu', title: 'Head of Sports Partnerships', company: 'PEPSI', industry: 'Beverage', email: 'j.wu@pepsi.com', phone: '(914) 555-0189', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
]

const athletes = [
  { id: '1', name: 'BRODY DALTON', sport: 'Football', school: 'University of JABA', marketability: 76, followers: '45K', engagement: '8.2%', avatar: '/brody-dalton.jpg' },
  { id: '2', name: 'JUDITH MOKOBE', sport: "Women's Track & Field", school: 'University of JABA', marketability: 72, followers: '32K', engagement: '11.4%', avatar: '/judith-mokobe.jpg' },
]

// Feature data - 6 features in priority order
const features = [
  // Priority 1
  {
    id: 'athlete-metrics',
    icon: Icons.BarChart,
    title: 'See All Athlete Metrics & Social Posts',
    description: 'Know every athlete\'s value in seconds. See followers, engagement, posts, and growth all in one place.',
    subFeatures: [
      { id: 'individual-profiles', title: 'Individual Athlete Profiles' },
      { id: 'leaderboards', title: 'Leaderboards & Rankings' },
      { id: 'benchmarks', title: 'Performance Benchmarks' },
    ]
  },
  {
    id: 'campaigns-deals',
    icon: Icons.Target,
    title: 'Manage Campaigns & Deals',
    description: 'All your deals in one place. Manage deliverables, track contracts, monitor progress. No more spreadsheets.',
    subFeatures: [
      { id: 'active-campaigns', title: 'Active Campaigns' },
      { id: 'deliverables-tasks', title: 'Deliverables & Tasks' },
      { id: 'quality-control', title: 'Quality Control & Tracking' },
      { id: 'contract-upload', title: 'Contract Upload' },
    ]
  },
  // Priority 2
  {
    id: 'content-hub',
    icon: Icons.Image,
    title: 'Content Hub',
    description: 'Find any post in seconds. See trending content, sponsored deals, and performance all together.',
    subFeatures: [
      { id: 'trending-content', title: 'Trending Content' },
      { id: 'sponsored-content', title: 'Sponsored Content Library' },
      { id: 'content-analysis', title: 'Content Analysis & Sorting' },
    ]
  },
  {
    id: 'brand-connections',
    icon: Icons.Smile,
    title: 'Brand Deal Connections & Outreach',
    description: 'Access every brand deal your athletes have done. Find decision-makers. Close more deals faster.',
    subFeatures: [
      { id: 'deal-directory', title: 'Brand Deal Directory' },
      { id: 'contact-mgmt', title: 'Contact Management' },
      { id: 'alumni-list', title: 'Alumni Decision Maker List' },
    ]
  },
  // Priority 3
  {
    id: 'text-assistant',
    icon: Icons.MessageCircle,
    title: 'Text Assistant',
    description: 'Stop chasing athletes for deliverables. Automated reminders handle follow-ups so you don\'t have to.',
    subFeatures: [
      { id: 'active-reminders', title: 'Active Reminders' },
      { id: 'sent-history', title: 'Sent History' },
      { id: 'new-reminders', title: 'Set New Reminders' },
    ]
  },
  {
    id: 'above-cap',
    icon: Icons.DollarSign,
    title: 'Above The Cap',
    description: 'Plan spending. Stay compliant. Model deal scenarios. Financial control at your fingertips.',
    subFeatures: [
      { id: 'cap-spend', title: 'Plan Above the Cap Spend' },
      { id: 'nil-defender', title: 'NIL Go Defender' },
      { id: 'deal-simulator', title: 'Deal Simulator' },
    ]
  },
]

// Feature Card Component
function FeatureCard({ feature, onClick }) {
  const Icon = feature.icon
  return (
    <div className="feature-card" onClick={onClick}>
      <div className="feature-card__icon">
        <Icon />
      </div>
      <h3 className="feature-card__title">{feature.title}</h3>
      <p className="feature-card__description">{feature.description}</p>
      <span className="feature-card__link">
        View details
        <Icons.ChevronRight />
      </span>
    </div>
  )
}

// Athlete Card Component - Dashboard Style
function AthleteCard({ athlete }) {
  return (
    <div className="athlete-card">
      <div className="athlete-card__image">
        <img src={athlete.avatar} alt={athlete.name} />
      </div>

      <div className="athlete-card__info-row" style={{ minHeight: '70px' }}>
        <img src="/jaba-logo.png" alt="University Logo" className="athlete-card__school-logo" />
        <div className="athlete-card__info">
          <h3 className="athlete-card__name">{athlete.name}</h3>
          <p className="athlete-card__sport">{athlete.sport} | {athlete.school}</p>
        </div>
      </div>

      <div className="marketability">
        <div className="marketability__header">
          <div className="marketability__label-group">
            <Icons.Trophy />
            <span className="marketability__label">MARKETABILITY</span>
          </div>
          <div className="marketability__score">{athlete.marketability}</div>
        </div>
        <div className="marketability__bar">
          <div className="marketability__fill" style={{ width: `${athlete.marketability}%` }} />
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-box">
          <div className="stat-box__value">{athlete.followers}</div>
          <div className="stat-box__label">Followers</div>
        </div>
        <div className="stat-box">
          <div className="stat-box__value">{athlete.engagement}</div>
          <div className="stat-box__label">Engagement</div>
        </div>
      </div>

      <button className="view-profile-btn">
        <Icons.Eye />
        View Profile
      </button>
    </div>
  )
}

// Priority 1 Content Components

function AthleteMetricsContent({ activeSubFeature }) {
  const [sortBy, setSortBy] = useState('Marketability Score')
  const [filterBy, setFilterBy] = useState('All Sports')
  const [leaderboardTab, setLeaderboardTab] = useState('league')
  const [positionFilter, setPositionFilter] = useState('All Positions')

  // Extended athletes data for leaderboards (Auburn athletes)
  const athletesData = [
    { name: 'Brody Dalton', sport: 'Football', position: 'QB', marketability: 76, engagement: 8.2, followers: 145000, growth: 12, lastMonth: 129464, school: 'Auburn', avatar: '/brody-dalton.jpg' },
    { name: 'Judith Mokobe', sport: 'Track & Field', position: 'Sprinter', marketability: 72, engagement: 11.4, followers: 98000, growth: 18, lastMonth: 83050, school: 'Auburn', avatar: '/judith-mokobe.jpg' },
    { name: 'Marcus Johnson', sport: 'Basketball', position: 'PG', marketability: 68, engagement: 9.1, followers: 182000, growth: -3, lastMonth: 187629, school: 'Auburn', avatar: '/Marcus-Johnson.png' },
    { name: 'Sarah Chen', sport: 'Volleyball', position: 'Setter', marketability: 65, engagement: 7.8, followers: 76000, growth: 8, lastMonth: 70370, school: 'Auburn', avatar: '/Sarah-chen.png' },
    { name: 'Tyler Brooks', sport: 'Baseball', position: 'Pitcher', marketability: 62, engagement: 6.5, followers: 54000, growth: 5, lastMonth: 51429, school: 'Auburn', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
    { name: 'Laila Wilcox', sport: 'Basketball', position: 'SG', marketability: 68, engagement: 12.1, followers: 25000, growth: 22, lastMonth: 20492, school: 'Auburn', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop' },
  ]

  // Conference leaderboard data (SEC schools)
  const conferenceData = [
    { name: 'Jaylen Carter', sport: 'Football', position: 'RB', marketability: 82, engagement: 9.4, followers: 234000, growth: 15, school: 'Georgia' },
    { name: 'DeVonta Williams', sport: 'Football', position: 'WR', marketability: 79, engagement: 8.8, followers: 198000, growth: 8, school: 'Alabama' },
    { name: 'Chris Anderson', sport: 'Basketball', position: 'SF', marketability: 74, engagement: 7.9, followers: 156000, growth: 6, school: 'Kentucky' },
    { name: 'Maya Thompson', sport: 'Volleyball', position: 'Outside Hitter', marketability: 71, engagement: 10.2, followers: 89000, growth: 11, school: 'Florida' },
    { name: 'Trey Mitchell', sport: 'Football', position: 'LB', marketability: 67, engagement: 7.2, followers: 112000, growth: 9, school: 'LSU' },
    { name: 'Darius Reed', sport: 'Basketball', position: 'PG', marketability: 70, engagement: 8.5, followers: 134000, growth: 14, school: 'Tennessee' },
    { name: 'Aaliyah Foster', sport: 'Track & Field', position: 'Sprinter', marketability: 66, engagement: 9.8, followers: 87000, growth: 20, school: 'Texas A&M' },
    { name: 'Jordan Hayes', sport: 'Baseball', position: 'Pitcher', marketability: 64, engagement: 7.1, followers: 72000, growth: 7, school: 'Vanderbilt' },
  ]

  // Position leaderboard data
  const positionData = [
    { name: 'Cameron Wright', sport: 'Football', position: 'QB', marketability: 78, engagement: 8.9, followers: 167000, growth: 10, school: 'Auburn' },
    { name: 'Malik Davis', sport: 'Football', position: 'RB', marketability: 75, engagement: 8.1, followers: 142000, growth: 13, school: 'Auburn' },
    { name: 'Treshawn Jackson', sport: 'Football', position: 'WR', marketability: 71, engagement: 9.3, followers: 118000, growth: 16, school: 'Auburn' },
    { name: 'Zoe Patterson', sport: 'Track & Field', position: 'Sprinter', marketability: 69, engagement: 10.7, followers: 91000, growth: 19, school: 'Auburn' },
    { name: 'Elijah Moore', sport: 'Basketball', position: 'PG', marketability: 73, engagement: 8.4, followers: 128000, growth: 11, school: 'Auburn' },
    { name: 'Mia Rodriguez', sport: 'Volleyball', position: 'Setter', marketability: 67, engagement: 9.2, followers: 84000, growth: 9, school: 'Auburn' },
    { name: 'Jake Sullivan', sport: 'Baseball', position: 'Pitcher', marketability: 63, engagement: 6.8, followers: 58000, growth: 6, school: 'Auburn' },
    { name: 'Destiny Clark', sport: 'Basketball', position: 'SG', marketability: 70, engagement: 11.5, followers: 95000, growth: 24, school: 'Auburn' },
    { name: 'Noah Bennett', sport: 'Football', position: 'LB', marketability: 66, engagement: 7.5, followers: 103000, growth: 8, school: 'Auburn' },
  ]

  // Leaderboard tabs
  const leaderboardTabs = [
    { id: 'league', label: 'LEAGUE LEADERBOARDS' },
    { id: 'conference', label: 'CONFERENCE LEADERBOARDS' },
    { id: 'position', label: 'POSITION LEADERBOARDS' },
    { id: 'movers', label: 'BIGGEST MOVERS' },
  ]

  // Position options
  const positions = ['All Positions', 'QB', 'RB', 'WR', 'LB', 'PG', 'SF', 'Setter', 'Outside Hitter', 'Pitcher', 'Sprinter', 'Long Jump']

  // Filter athletes by sport
  const filteredAthletes = filterBy === 'All Sports'
    ? athletesData
    : athletesData.filter(athlete => athlete.sport === filterBy)

  // Sort athletes based on selected criteria
  const sortedAthletes = [...filteredAthletes].sort((a, b) => {
    switch (sortBy) {
      case 'Marketability Score':
        return b.marketability - a.marketability
      case 'Engagement Rate':
        return b.engagement - a.engagement
      case 'Follower Count':
        return b.followers - a.followers
      case 'Growth':
        return b.growth - a.growth
      default:
        return 0
    }
  })

  // Get data for current leaderboard tab
  const getLeaderboardData = () => {
    switch (leaderboardTab) {
      case 'league':
        return sortedAthletes
      case 'conference':
        const confFiltered = filterBy === 'All Sports'
          ? conferenceData
          : conferenceData.filter(a => a.sport === filterBy)
        return [...confFiltered].sort((a, b) => b.marketability - a.marketability)
      case 'position':
        let posData = positionData
        if (positionFilter !== 'All Positions') {
          posData = positionData.filter(a => a.position === positionFilter)
        }
        if (filterBy !== 'All Sports') {
          posData = posData.filter(a => a.sport === filterBy)
        }
        return [...posData].sort((a, b) => b.marketability - a.marketability)
      case 'movers':
        const moversFiltered = filterBy === 'All Sports'
          ? athletesData
          : athletesData.filter(a => a.sport === filterBy)
        return [...moversFiltered].sort((a, b) => b.growth - a.growth)
      default:
        return sortedAthletes
    }
  }

  // Get description for current tab
  const getTabDescription = () => {
    switch (leaderboardTab) {
      case 'league': return 'See who\'s leading across the entire league'
      case 'conference': return 'Top athletes across the SEC conference'
      case 'position': return 'Top performers at each position'
      case 'movers': return 'Athletes with biggest growth this month'
      default: return ''
    }
  }

  switch (activeSubFeature) {
    case 'individual-profiles':
      return (
        <div className="feature-section" key="individual-profiles">
          <h2 className="feature-section__title">Individual Athlete Profiles</h2>
          <p className="feature-section__description">
            Deep dive into any athlete's profile. See their metrics, content performance, and deal history at a glance.
          </p>
          <div className="filter-section">
            <div className="filter-group">
              <label>Sport</label>
              <select className="filter-select" value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
                <option>All Sports</option>
                <option>Football</option>
                <option>Basketball</option>
                <option>Track & Field</option>
                <option>Volleyball</option>
                <option>Baseball</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Position</label>
              <select className="filter-select">
                <option>All Positions</option>
                <option>QB</option>
                <option>WR</option>
                <option>PG</option>
                <option>Sprinter</option>
              </select>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginTop: '20px' }}>
            {athletes.map(athlete => (
              <AthleteCard key={athlete.id} athlete={athlete} />
            ))}
          </div>
        </div>
      )
    case 'leaderboards':
      const currentData = getLeaderboardData()
      return (
        <div className="feature-section" key="leaderboards">
          <h2 className="feature-section__title">Leaderboards & Rankings</h2>
          <p className="feature-section__description">
            See who's rising, who's trending, and who's ready for their next big deal.
          </p>

          {/* Tab Navigation */}
          <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
            {leaderboardTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setLeaderboardTab(tab.id)}
                style={{
                  padding: '10px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  background: leaderboardTab === tab.id ? 'var(--jaba-accent)' : 'rgba(255,255,255,0.1)',
                  color: leaderboardTab === tab.id ? '#000' : 'var(--jaba-text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  fontWeight: leaderboardTab === tab.id ? '700' : '500',
                  letterSpacing: '0.5px',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Description */}
          <p style={{ fontSize: '0.85rem', color: 'var(--jaba-text-secondary)', marginBottom: '20px' }}>
            {getTabDescription()} • Updated real-time
          </p>

          {/* Filters */}
          <div className="filter-section">
            <div className="filter-group">
              <label>Filter By Sport</label>
              <select className="filter-select" value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
                <option>All Sports</option>
                <option>Football</option>
                <option>Basketball</option>
                <option>Track & Field</option>
                <option>Volleyball</option>
                <option>Baseball</option>
              </select>
            </div>
            {leaderboardTab === 'position' && (
              <div className="filter-group">
                <label>Filter By Position</label>
                <select className="filter-select" value={positionFilter} onChange={(e) => setPositionFilter(e.target.value)}>
                  {positions.map(pos => (
                    <option key={pos}>{pos}</option>
                  ))}
                </select>
              </div>
            )}
            {leaderboardTab !== 'movers' && (
              <div className="filter-group">
                <label>Sort By</label>
                <select className="filter-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option>Marketability Score</option>
                  <option>Engagement Rate</option>
                  <option>Follower Count</option>
                  <option>Growth</option>
                </select>
              </div>
            )}
          </div>

          {/* League & Conference Leaderboards Table */}
          {(leaderboardTab === 'league' || leaderboardTab === 'conference') && (
            <table className="data-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Athlete</th>
                  <th>Sport</th>
                  {leaderboardTab === 'conference' && <th>School</th>}
                  <th>Followers</th>
                  <th>Engagement</th>
                  <th>Growth</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((athlete, index) => (
                  <tr key={athlete.name + index}>
                    <td style={{ color: 'var(--jaba-accent)', fontWeight: 'bold' }}>{index + 1}</td>
                    <td>{athlete.name}</td>
                    <td>{athlete.sport}</td>
                    {leaderboardTab === 'conference' && (
                      <td style={{ color: athlete.school === 'Auburn' ? 'var(--jaba-accent)' : 'var(--jaba-text-secondary)' }}>
                        {athlete.school}
                      </td>
                    )}
                    <td>{(athlete.followers / 1000).toFixed(0)}K</td>
                    <td>{athlete.engagement}%</td>
                    <td>
                      <span style={{
                        color: athlete.growth > 0 ? '#22c55e' : athlete.growth < 0 ? '#ef4444' : 'var(--jaba-text-secondary)',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        {athlete.growth > 0 ? '↑' : athlete.growth < 0 ? '↓' : '→'}
                        {Math.abs(athlete.growth)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Position Leaderboards Table */}
          {leaderboardTab === 'position' && (
            <table className="data-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Athlete</th>
                  <th>Position</th>
                  <th>Sport</th>
                  <th>Followers</th>
                  <th>Engagement</th>
                  <th>Growth</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((athlete, index) => (
                  <tr key={athlete.name + index}>
                    <td style={{ color: 'var(--jaba-accent)', fontWeight: 'bold' }}>{index + 1}</td>
                    <td>{athlete.name}</td>
                    <td>
                      <span style={{
                        padding: '2px 8px',
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '4px',
                        fontSize: '0.8rem'
                      }}>
                        {athlete.position}
                      </span>
                    </td>
                    <td>{athlete.sport}</td>
                    <td>{(athlete.followers / 1000).toFixed(0)}K</td>
                    <td>{athlete.engagement}%</td>
                    <td>
                      <span style={{
                        color: athlete.growth > 0 ? '#22c55e' : athlete.growth < 0 ? '#ef4444' : 'var(--jaba-text-secondary)',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        {athlete.growth > 0 ? '↑' : athlete.growth < 0 ? '↓' : '→'}
                        {Math.abs(athlete.growth)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Biggest Movers Table */}
          {leaderboardTab === 'movers' && (
            <table className="data-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Athlete</th>
                  <th>Sport</th>
                  <th>Growth %</th>
                  <th>Growth</th>
                  <th>Current</th>
                  <th>Last Month</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((athlete, index) => (
                  <tr key={athlete.name + index}>
                    <td style={{ color: 'var(--jaba-accent)', fontWeight: 'bold' }}>{index + 1}</td>
                    <td>{athlete.name}</td>
                    <td>{athlete.sport}</td>
                    <td>
                      <span style={{
                        color: athlete.growth > 0 ? '#22c55e' : athlete.growth < 0 ? '#ef4444' : 'var(--jaba-text-secondary)',
                        fontWeight: 'bold',
                        fontSize: '1.1rem'
                      }}>
                        {athlete.growth > 0 ? '↑' : athlete.growth < 0 ? '↓' : '→'}
                        {Math.abs(athlete.growth)}%
                      </span>
                    </td>
                    <td style={{ color: athlete.growth > 0 ? '#22c55e' : athlete.growth < 0 ? '#ef4444' : 'var(--jaba-text-secondary)' }}>
                      {athlete.growth > 0 ? '+' : ''}{((athlete.followers - athlete.lastMonth) / 1000).toFixed(1)}K
                    </td>
                    <td>{(athlete.followers / 1000).toFixed(0)}K</td>
                    <td style={{ color: 'var(--jaba-text-secondary)' }}>{(athlete.lastMonth / 1000).toFixed(0)}K</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )
    case 'benchmarks':
      return (
        <div className="feature-section" key="benchmarks">
          <h2 className="feature-section__title">Performance Benchmarks</h2>
          <p className="feature-section__description">
            Compare your program against conference rivals, NCAA averages, and top programs nationwide.
          </p>
          <div className="metrics-grid">
            <div className="metric-card">
              <p className="metric-card__label">Your Program Avg</p>
              <p className="metric-card__value">8.2%</p>
              <p className="metric-card__change metric-card__change--positive">Engagement Rate</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Conference Avg</p>
              <p className="metric-card__value">6.8%</p>
              <p className="metric-card__change">+1.4% above</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">NCAA D1 Avg</p>
              <p className="metric-card__value">5.2%</p>
              <p className="metric-card__change metric-card__change--positive">+3.0% above</p>
            </div>
          </div>
          <div className="campaign-grid" style={{ marginTop: '24px' }}>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Follower Growth</p>
                  <p className="campaign-card__brand">Your Program vs Conference</p>
                </div>
                <span className="campaign-card__status campaign-card__status--active">+45% ahead</span>
              </div>
              <div className="campaign-card__progress">
                <div className="progress-bar">
                  <div className="progress-bar__fill" style={{ width: '85%' }} />
                </div>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Content Volume</p>
                  <p className="campaign-card__brand">Posts per athlete per week</p>
                </div>
                <span className="campaign-card__status campaign-card__status--active">4.2 avg</span>
              </div>
              <div className="campaign-card__progress">
                <div className="progress-bar">
                  <div className="progress-bar__fill" style={{ width: '70%' }} />
                </div>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Deal Conversion</p>
                  <p className="campaign-card__brand">Pitches to signed deals</p>
                </div>
                <span className="campaign-card__status campaign-card__status--active">32%</span>
              </div>
              <div className="campaign-card__progress">
                <div className="progress-bar">
                  <div className="progress-bar__fill" style={{ width: '65%' }} />
                </div>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Avg Deal Value</p>
                  <p className="campaign-card__brand">Compared to similar programs</p>
                </div>
                <span className="campaign-card__status campaign-card__status--pending">+12% above</span>
              </div>
              <div className="campaign-card__progress">
                <div className="progress-bar">
                  <div className="progress-bar__fill" style={{ width: '72%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    default:
      return null
  }
}

function ManageCampaignsDealsContent({ activeSubFeature }) {
  const activeCampaigns = [
    { title: 'Spring Collection Launch', brand: 'Nike', status: 'active', progress: 75, deliverables: 8, completed: 6, dueDate: 'Feb 15' },
    { title: 'Energy Series', brand: 'Red Bull', status: 'active', progress: 45, deliverables: 12, completed: 5, dueDate: 'Feb 28' },
    { title: 'Campus Takeover', brand: 'Chipotle', status: 'pending', progress: 20, deliverables: 6, completed: 1, dueDate: 'Mar 10' },
    { title: 'Tech Showcase', brand: 'Samsung', status: 'completed', progress: 100, deliverables: 4, completed: 4, dueDate: 'Jan 31' },
  ]

  const deliverables = [
    { type: 'Instagram Post', athlete: 'Brody Dalton', brand: 'Nike', dueDate: 'Feb 8', status: 'pending' },
    { type: 'TikTok Video', athlete: 'Judith Mokobe', brand: 'Red Bull', dueDate: 'Feb 10', status: 'in-progress' },
    { type: 'Instagram Story', athlete: 'Marcus Johnson', brand: 'Nike', dueDate: 'Feb 12', status: 'pending' },
    { type: 'Appearance', athlete: 'Brody Dalton', brand: 'Chipotle', dueDate: 'Feb 15', status: 'pending' },
    { type: 'Product Photo', athlete: 'Sarah Chen', brand: 'Samsung', dueDate: 'Feb 5', status: 'completed' },
  ]

  switch (activeSubFeature) {
    case 'active-campaigns':
      return (
        <div className="feature-section" key="active-campaigns">
          <h2 className="feature-section__title">Active Campaigns</h2>
          <p className="feature-section__description">
            All your campaigns in one view. Track progress, see what's due, and keep deals moving.
          </p>
          <div className="filter-section">
            <div className="filter-group">
              <label>Status</label>
              <select className="filter-select">
                <option>All Status</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Completed</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Brand</label>
              <select className="filter-select">
                <option>All Brands</option>
                <option>Nike</option>
                <option>Red Bull</option>
                <option>Chipotle</option>
                <option>Samsung</option>
              </select>
            </div>
          </div>
          <div className="campaign-grid" style={{ marginTop: '20px' }}>
            {activeCampaigns.map((campaign, i) => (
              <div className="campaign-card" key={i}>
                <div className="campaign-card__header">
                  <div>
                    <p className="campaign-card__title">{campaign.title}</p>
                    <p className="campaign-card__brand">{campaign.brand} • Due {campaign.dueDate}</p>
                  </div>
                  <span className={`campaign-card__status campaign-card__status--${campaign.status}`}>
                    {campaign.status}
                  </span>
                </div>
                <div className="campaign-card__progress">
                  <div className="progress-bar">
                    <div className="progress-bar__fill" style={{ width: `${campaign.progress}%` }} />
                  </div>
                  <span className="progress-label">{campaign.completed}/{campaign.deliverables} deliverables</span>
                </div>
              </div>
            ))}
          </div>
          <button className="search-btn" style={{ marginTop: '20px' }}>Create New Campaign</button>
        </div>
      )
    case 'deliverables-tasks':
      return (
        <div className="feature-section" key="deliverables-tasks">
          <h2 className="feature-section__title">Deliverables & Tasks</h2>
          <p className="feature-section__description">
            Every deliverable, every deadline, every athlete. Track what's due and what's done.
          </p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Deliverable Type</th>
                <th>Athlete</th>
                <th>Brand</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {deliverables.map((item, i) => (
                <tr key={i}>
                  <td>{item.type}</td>
                  <td>{item.athlete}</td>
                  <td>{item.brand}</td>
                  <td>{item.dueDate}</td>
                  <td>
                    <span className={`campaign-card__status campaign-card__status--${item.status === 'in-progress' ? 'active' : item.status === 'completed' ? 'completed' : 'pending'}`}>
                      {item.status === 'in-progress' ? 'In Progress' : item.status === 'completed' ? 'Completed' : 'Pending'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(226, 245, 0, 0.1)', borderRadius: '12px', border: '1px solid rgba(226, 245, 0, 0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <Icons.Bell />
              <strong style={{ color: 'var(--jaba-accent)' }}>NIL Go Reminder</strong>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--jaba-text-secondary)', margin: 0 }}>
              3 deliverables due this week. Text reminders will be sent to athletes 48 hours before deadline.
            </p>
          </div>
        </div>
      )
    case 'quality-control':
      return (
        <div className="feature-section" key="quality-control">
          <h2 className="feature-section__title">Quality Control & Tracking</h2>
          <p className="feature-section__description">
            Monitor delivery quality, track on-time rates, and catch issues before brands do.
          </p>
          <div className="metrics-grid">
            <div className="metric-card">
              <p className="metric-card__label">On-Time Delivery</p>
              <p className="metric-card__value">94%</p>
              <p className="metric-card__change metric-card__change--positive">+8% vs last month</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Quality Score</p>
              <p className="metric-card__value">4.8/5</p>
              <p className="metric-card__change metric-card__change--positive">Brand satisfaction</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Deals Completed</p>
              <p className="metric-card__value">47</p>
              <p className="metric-card__change">This quarter</p>
            </div>
          </div>
          <div className="campaign-grid" style={{ marginTop: '24px' }}>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Pending Review</p>
                  <p className="campaign-card__brand">Content awaiting approval</p>
                </div>
                <span className="campaign-card__status campaign-card__status--pending">5 items</span>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Quality Flags</p>
                  <p className="campaign-card__brand">Items needing attention</p>
                </div>
                <span className="campaign-card__status campaign-card__status--pending">2 items</span>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Late Deliveries</p>
                  <p className="campaign-card__brand">Past deadline</p>
                </div>
                <span className="campaign-card__status campaign-card__status--completed">0 items</span>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Brand Feedback</p>
                  <p className="campaign-card__brand">Recent responses</p>
                </div>
                <span className="campaign-card__status campaign-card__status--active">3 new</span>
              </div>
            </div>
          </div>
        </div>
      )
    case 'contract-upload':
      return (
        <div className="feature-section" key="contract-upload">
          <h2 className="feature-section__title">Contract Upload</h2>
          <p className="feature-section__description">
            Upload and manage contracts for all campaigns. Keep everything organized in one secure location.
          </p>

          {/* Upload Zone */}
          <div style={{
            border: '2px dashed rgba(226, 245, 0, 0.3)',
            borderRadius: '12px',
            padding: '40px',
            textAlign: 'center',
            background: 'rgba(226, 245, 0, 0.05)',
            marginBottom: '24px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}>
            <div style={{ marginBottom: '16px' }}>
              <Icons.FileText />
            </div>
            <p style={{ color: 'var(--jaba-text-primary)', fontWeight: '600', marginBottom: '8px' }}>
              Drag contracts here or click to upload
            </p>
            <p style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>
              Supports PDF, DOC, DOCX files up to 25MB
            </p>
            <button className="search-btn">Upload Contract</button>
          </div>

          {/* Uploaded Contracts List */}
          <h3 style={{ fontSize: '1rem', marginBottom: '16px', color: 'var(--jaba-text-primary)' }}>Uploaded Contracts</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Contract Name</th>
                <th>Upload Date</th>
                <th>Size</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: '600' }}>Nike Q4 Campaign.pdf</td>
                <td>Jan 28, 2025</td>
                <td>2.4 MB</td>
                <td><span className="campaign-card__status campaign-card__status--completed">Signed</span></td>
                <td>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--jaba-accent)', cursor: 'pointer', padding: '4px' }}><Icons.Download /></button>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--jaba-text-secondary)', cursor: 'pointer', padding: '4px' }}><Icons.Trash /></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: '600' }}>Gatorade Content Deal.pdf</td>
                <td>Jan 25, 2025</td>
                <td>1.8 MB</td>
                <td><span className="campaign-card__status campaign-card__status--completed">Signed</span></td>
                <td>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--jaba-accent)', cursor: 'pointer', padding: '4px' }}><Icons.Download /></button>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--jaba-text-secondary)', cursor: 'pointer', padding: '4px' }}><Icons.Trash /></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: '600' }}>Red Bull Appearance Agreement.pdf</td>
                <td>Jan 22, 2025</td>
                <td>3.1 MB</td>
                <td><span className="campaign-card__status campaign-card__status--pending">Pending</span></td>
                <td>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--jaba-accent)', cursor: 'pointer', padding: '4px' }}><Icons.Download /></button>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--jaba-text-secondary)', cursor: 'pointer', padding: '4px' }}><Icons.Trash /></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: '600' }}>Samsung Tech Showcase.docx</td>
                <td>Jan 18, 2025</td>
                <td>892 KB</td>
                <td><span className="campaign-card__status campaign-card__status--active">In Review</span></td>
                <td>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--jaba-accent)', cursor: 'pointer', padding: '4px' }}><Icons.Download /></button>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--jaba-text-secondary)', cursor: 'pointer', padding: '4px' }}><Icons.Trash /></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Summary Stats */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
            <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', flex: 1 }}>
              <p style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.8rem', marginBottom: '4px' }}>Total Contracts</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--jaba-accent)' }}>24</p>
            </div>
            <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', flex: 1 }}>
              <p style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.8rem', marginBottom: '4px' }}>Pending Signature</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FFA500' }}>3</p>
            </div>
            <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', flex: 1 }}>
              <p style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.8rem', marginBottom: '4px' }}>Total Value</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#22c55e' }}>$1.2M</p>
            </div>
          </div>
        </div>
      )
    default:
      return null
  }
}

// Priority 2 Content Components

function ContentHubContent({ activeSubFeature }) {
  const [platformFilter, setPlatformFilter] = useState('All')
  const [topicFilter, setTopicFilter] = useState('All')

  const socialPosts = [
    { id: 1, athlete: 'Brody Dalton', platform: 'Instagram', topic: 'Game Day', likes: 48200, comments: 892, date: 'Feb 1', image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400&h=400&fit=crop', trending: true },
    { id: 2, athlete: 'Judith Mokobe', platform: 'TikTok', topic: 'Training', likes: 125400, comments: 2341, date: 'Jan 30', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop', trending: true },
    { id: 3, athlete: 'Marcus Johnson', platform: 'Instagram', topic: 'Lifestyle', likes: 32100, comments: 445, date: 'Jan 29', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop', trending: false },
    { id: 4, athlete: 'Sarah Chen', platform: 'TikTok', topic: 'Game Day', likes: 89700, comments: 1203, date: 'Jan 28', image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&h=400&fit=crop', trending: true },
    { id: 5, athlete: 'Brody Dalton', platform: 'Instagram', topic: 'Sponsored', likes: 28400, comments: 367, date: 'Jan 27', image: 'https://images.unsplash.com/photo-1461896836934-480adeac82e9?w=400&h=400&fit=crop', trending: false },
    { id: 6, athlete: 'Laila Wilcox', platform: 'TikTok', topic: 'Training', likes: 67300, comments: 890, date: 'Jan 26', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=400&fit=crop', trending: false },
  ]

  const filteredPosts = socialPosts.filter(post => {
    const platformMatch = platformFilter === 'All' || post.platform === platformFilter
    const topicMatch = topicFilter === 'All' || post.topic === topicFilter
    return platformMatch && topicMatch
  })

  const topics = ['All', 'Game Day', 'Training', 'Lifestyle', 'Sponsored']

  switch (activeSubFeature) {
    case 'trending-content':
      return (
        <div className="feature-section" key="trending-content">
          <h2 className="feature-section__title">Trending Content</h2>
          <p className="feature-section__description">
            See what's performing best across all your athletes. Identify viral moments and capitalize on trends.
          </p>
          <div className="metrics-grid">
            <div className="metric-card">
              <p className="metric-card__label">Top Post This Week</p>
              <p className="metric-card__value">2.4M</p>
              <p className="metric-card__change metric-card__change--positive">Views</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Trending Topics</p>
              <p className="metric-card__value">Game Day</p>
              <p className="metric-card__change">Highest engagement</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Viral Potential</p>
              <p className="metric-card__value">8</p>
              <p className="metric-card__change">Posts trending up</p>
            </div>
          </div>

          {/* Platform Tabs */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '24px', marginBottom: '16px' }}>
            {['All', 'Instagram', 'TikTok'].map(platform => (
              <button
                key={platform}
                onClick={() => setPlatformFilter(platform)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: 'none',
                  background: platformFilter === platform ? 'var(--jaba-accent)' : 'rgba(255,255,255,0.1)',
                  color: platformFilter === platform ? '#000' : 'var(--jaba-text-primary)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: platformFilter === platform ? '600' : '400'
                }}
              >
                {platform}
              </button>
            ))}
          </div>

          {/* Topic Badges */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
            {topics.map(topic => (
              <span
                key={topic}
                onClick={() => setTopicFilter(topic)}
                style={{
                  padding: '4px 12px',
                  borderRadius: '12px',
                  background: topicFilter === topic ? 'rgba(226, 245, 0, 0.2)' : 'rgba(255,255,255,0.05)',
                  border: topicFilter === topic ? '1px solid var(--jaba-accent)' : '1px solid rgba(255,255,255,0.1)',
                  color: topicFilter === topic ? 'var(--jaba-accent)' : 'var(--jaba-text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}
              >
                {topic}
              </span>
            ))}
          </div>

          {/* Content Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
            {filteredPosts.map(post => (
              <div key={post.id} style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{ position: 'relative' }}>
                  <img src={post.image} alt={post.athlete} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                  {post.trending && (
                    <span style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      background: 'var(--jaba-accent)',
                      color: '#000',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      fontWeight: '700'
                    }}>TRENDING</span>
                  )}
                  <span style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: 'rgba(0,0,0,0.7)',
                    color: '#fff',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '0.7rem'
                  }}>{post.platform}</span>
                </div>
                <div style={{ padding: '12px' }}>
                  <p style={{ fontWeight: '600', marginBottom: '4px', fontSize: '0.9rem' }}>{post.athlete}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                    <span style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.8rem' }}>
                      ❤️ {(post.likes / 1000).toFixed(1)}K
                    </span>
                    <span style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.75rem' }}>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    case 'sponsored-content':
      return (
        <div className="feature-section" key="sponsored-content">
          <h2 className="feature-section__title">Sponsored Content Library</h2>
          <p className="feature-section__description">
            All brand-sponsored content in one place. Track performance and manage brand relationships.
          </p>

          {/* Summary Metrics */}
          <div className="metrics-grid" style={{ marginBottom: '24px' }}>
            <div className="metric-card">
              <p className="metric-card__label">Total Posts</p>
              <p className="metric-card__value">156</p>
              <p className="metric-card__change">Sponsored content</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Total Engagement</p>
              <p className="metric-card__value">4.2M</p>
              <p className="metric-card__change metric-card__change--positive">+18% vs organic</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Avg EMV/Post</p>
              <p className="metric-card__value">$8.4K</p>
              <p className="metric-card__change metric-card__change--positive">Above benchmark</p>
            </div>
          </div>

          <div className="campaign-grid">
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Nike Spring Campaign</p>
                  <p className="campaign-card__brand">12 posts • 3 athletes • 892K reach</p>
                </div>
                <span className="campaign-card__status campaign-card__status--active">Active</span>
              </div>
              <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
                <img src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=60&h=60&fit=crop" style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} />
                <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=60&h=60&fit=crop" style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} />
                <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=60&h=60&fit=crop" style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} />
                <span style={{ width: '50px', height: '50px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: 'var(--jaba-text-secondary)' }}>+9</span>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Red Bull Energy Series</p>
                  <p className="campaign-card__brand">8 posts • 2 athletes • 654K reach</p>
                </div>
                <span className="campaign-card__status campaign-card__status--active">Active</span>
              </div>
              <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
                <img src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=60&h=60&fit=crop" style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} />
                <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=60&h=60&fit=crop" style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} />
                <span style={{ width: '50px', height: '50px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: 'var(--jaba-text-secondary)' }}>+6</span>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Gatorade Hydration</p>
                  <p className="campaign-card__brand">6 posts • 4 athletes • 423K reach</p>
                </div>
                <span className="campaign-card__status campaign-card__status--completed">Completed</span>
              </div>
              <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
                <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=60&h=60&fit=crop" style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} />
                <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=60&h=60&fit=crop" style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} />
                <span style={{ width: '50px', height: '50px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: 'var(--jaba-text-secondary)' }}>+4</span>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Chipotle Campus Tour</p>
                  <p className="campaign-card__brand">4 posts • 2 athletes • 287K reach</p>
                </div>
                <span className="campaign-card__status campaign-card__status--completed">Completed</span>
              </div>
              <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
                <img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=60&h=60&fit=crop" style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} />
                <span style={{ width: '50px', height: '50px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: 'var(--jaba-text-secondary)' }}>+3</span>
              </div>
            </div>
          </div>
        </div>
      )
    case 'content-analysis':
      return (
        <div className="feature-section" key="content-analysis">
          <h2 className="feature-section__title">Content Analysis & Sorting</h2>
          <p className="feature-section__description">
            AI-powered content tagging and analysis. Find the right content for any brand pitch instantly.
          </p>

          <div className="filter-section">
            <div className="filter-group">
              <label>Content Type</label>
              <select className="filter-select">
                <option>All Types</option>
                <option>Game Day</option>
                <option>Training</option>
                <option>Lifestyle</option>
                <option>Sponsored</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Performance</label>
              <select className="filter-select">
                <option>All Performance</option>
                <option>Viral (1M+ views)</option>
                <option>High (100K+ views)</option>
                <option>Standard</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Time Period</label>
              <select className="filter-select">
                <option>This Week</option>
                <option>This Month</option>
                <option>Last 90 Days</option>
                <option>All Time</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Tone</label>
              <select className="filter-select">
                <option>All Tones</option>
                <option>Promotional</option>
                <option>Casual</option>
                <option>Lifestyle</option>
                <option>Athletic</option>
              </select>
            </div>
          </div>

          {/* AI Analysis Cards */}
          <div style={{ marginTop: '24px' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '16px', color: 'var(--jaba-text-primary)' }}>AI-Detected Content Themes</h3>
            <div className="campaign-grid">
              <div className="campaign-card">
                <div className="campaign-card__header">
                  <div>
                    <p className="campaign-card__title">Game Day Content</p>
                    <p className="campaign-card__brand">47 posts tagged • 12.4% avg engagement</p>
                  </div>
                  <span className="campaign-card__status campaign-card__status--active">Top Performer</span>
                </div>
              </div>
              <div className="campaign-card">
                <div className="campaign-card__header">
                  <div>
                    <p className="campaign-card__title">Training & Workout</p>
                    <p className="campaign-card__brand">38 posts tagged • 9.8% avg engagement</p>
                  </div>
                  <span className="campaign-card__status campaign-card__status--active">High Engagement</span>
                </div>
              </div>
              <div className="campaign-card">
                <div className="campaign-card__header">
                  <div>
                    <p className="campaign-card__title">Behind The Scenes</p>
                    <p className="campaign-card__brand">29 posts tagged • 8.2% avg engagement</p>
                  </div>
                  <span className="campaign-card__status campaign-card__status--pending">Growing</span>
                </div>
              </div>
              <div className="campaign-card">
                <div className="campaign-card__header">
                  <div>
                    <p className="campaign-card__title">Product Features</p>
                    <p className="campaign-card__brand">23 posts tagged • 6.1% avg engagement</p>
                  </div>
                  <span className="campaign-card__status campaign-card__status--pending">Steady</span>
                </div>
              </div>
            </div>
          </div>

          {/* Best Performing Content */}
          <div style={{ marginTop: '32px', padding: '20px', background: 'rgba(226, 245, 0, 0.05)', borderRadius: '12px', border: '1px solid rgba(226, 245, 0, 0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icons.TrendingUp /></span>
              <span style={{ fontWeight: '600', color: 'var(--jaba-accent)' }}>AI Insight</span>
            </div>
            <p style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
              Game Day content posted between 5-7 PM on Saturdays generates 2.3x more engagement than weekday posts. Consider scheduling brand content around these peak times.
            </p>
          </div>
        </div>
      )
    default:
      return null
  }
}

function BrandConnectionsContent({ activeSubFeature }) {
  const brandDeals = [
    { brand: 'Nike', athletes: 8, posts: 42, engagement: '1.2M', emv: '$142K', status: 'active' },
    { brand: 'Red Bull', athletes: 4, posts: 28, engagement: '856K', emv: '$98K', status: 'active' },
    { brand: 'Gatorade', athletes: 6, posts: 35, engagement: '743K', emv: '$87K', status: 'completed' },
    { brand: 'Beats by Dre', athletes: 3, posts: 18, engagement: '521K', emv: '$62K', status: 'active' },
    { brand: 'Chipotle', athletes: 5, posts: 22, engagement: '412K', emv: '$48K', status: 'completed' },
    { brand: 'Under Armour', athletes: 4, posts: 19, engagement: '387K', emv: '$45K', status: 'pending' },
  ]

  const alumniContacts = [
    { name: 'James Wilson', year: '08', title: 'VP Marketing', company: 'Nike', industry: 'Apparel', status: 'connected' },
    { name: 'Sarah Martinez', year: '12', title: 'Brand Director', company: 'Gatorade', industry: 'Beverage', status: 'reach-out' },
    { name: 'Michael Chen', year: '15', title: 'Partnerships Lead', company: 'Apple', industry: 'Tech', status: 'new' },
    { name: 'David Thompson', year: '10', title: 'CMO', company: 'Celsius', industry: 'Beverage', status: 'connected' },
    { name: 'Jessica Park', year: '14', title: 'Athlete Relations', company: 'Adidas', industry: 'Apparel', status: 'reach-out' },
    { name: 'Robert Kim', year: '11', title: 'Sports Marketing Dir', company: 'Samsung', industry: 'Tech', status: 'new' },
  ]

  switch (activeSubFeature) {
    case 'deal-directory':
      return (
        <div className="feature-section" key="deal-directory">
          <h2 className="feature-section__title">Brand Deal Directory</h2>
          <p className="feature-section__description">
            Complete history of every brand partnership. See which brands work, what performs, and where opportunities exist.
          </p>

          {/* Summary Metrics */}
          <div className="metrics-grid" style={{ marginBottom: '24px' }}>
            <div className="metric-card">
              <p className="metric-card__label">Total Posts</p>
              <p className="metric-card__value">164</p>
              <p className="metric-card__change">Across all brands</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Unique Brands</p>
              <p className="metric-card__value">12</p>
              <p className="metric-card__change metric-card__change--positive">+3 this quarter</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Total Engagement</p>
              <p className="metric-card__value">4.1M</p>
              <p className="metric-card__change metric-card__change--positive">+22% vs last year</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Total EMV</p>
              <p className="metric-card__value">$482K</p>
              <p className="metric-card__change metric-card__change--positive">Earned media value</p>
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-group">
              <label>Industry</label>
              <select className="filter-select">
                <option>All Industries</option>
                <option>Apparel & Footwear</option>
                <option>Beverages</option>
                <option>Technology</option>
                <option>Food & Restaurant</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Status</label>
              <select className="filter-select">
                <option>All Status</option>
                <option>Active</option>
                <option>Completed</option>
                <option>Pending</option>
              </select>
            </div>
          </div>

          {/* Brand Cards Grid */}
          <table className="data-table" style={{ marginTop: '20px' }}>
            <thead>
              <tr>
                <th>Brand</th>
                <th>Athletes</th>
                <th>Posts</th>
                <th>Engagement</th>
                <th>EMV</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {brandDeals.map((deal, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: '600' }}>{deal.brand}</td>
                  <td>{deal.athletes}</td>
                  <td>{deal.posts}</td>
                  <td>{deal.engagement}</td>
                  <td style={{ color: 'var(--jaba-accent)' }}>{deal.emv}</td>
                  <td>
                    <span className={`campaign-card__status campaign-card__status--${deal.status === 'active' ? 'active' : deal.status === 'completed' ? 'completed' : 'pending'}`}>
                      {deal.status.charAt(0).toUpperCase() + deal.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'contact-mgmt':
      return (
        <div className="feature-section" key="contact-mgmt">
          <h2 className="feature-section__title">Contact Management</h2>
          <p className="feature-section__description">
            Your complete CRM for brand relationships. Every contact, every interaction, all in one place.
          </p>

          {/* Quick Stats */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', flex: 1 }}>
              <p style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.8rem', marginBottom: '4px' }}>Total Contacts</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--jaba-accent)' }}>47</p>
            </div>
            <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', flex: 1 }}>
              <p style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.8rem', marginBottom: '4px' }}>Active Relationships</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--jaba-accent)' }}>23</p>
            </div>
            <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', flex: 1 }}>
              <p style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.8rem', marginBottom: '4px' }}>Follow-ups Due</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FFA500' }}>5</p>
            </div>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Company</th>
                <th>Email</th>
                <th>Last Contact</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, i) => (
                <tr key={i}>
                  <td>
                    <div className="contact-name-cell">
                      <img src={contact.avatar} alt={contact.name} className="contact-avatar" />
                      {contact.name}
                    </div>
                  </td>
                  <td>{contact.title}</td>
                  <td>{contact.company}</td>
                  <td style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.85rem' }}>{contact.email}</td>
                  <td>{['2 days ago', '1 week ago', 'Yesterday', '3 days ago', '5 days ago'][i % 5]}</td>
                  <td>
                    <span className={`campaign-card__status campaign-card__status--${['active', 'pending', 'completed', 'active', 'pending'][i % 5]}`}>
                      {['Active', 'Follow Up', 'Closed', 'Active', 'Follow Up'][i % 5]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <button className="search-btn">Add New Contact</button>
            <button className="search-btn" style={{ background: 'transparent', border: '1px solid var(--jaba-accent)', color: 'var(--jaba-accent)' }}>Import Contacts</button>
          </div>
        </div>
      )
    case 'alumni-list':
      return (
        <div className="feature-section" key="alumni-list">
          <h2 className="feature-section__title">Alumni Decision Maker List</h2>
          <p className="feature-section__description">
            Your secret weapon for closing deals. Alumni at top brands who share your school connection.
          </p>

          {/* Summary */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <div style={{ padding: '12px 20px', background: 'rgba(226, 245, 0, 0.1)', borderRadius: '8px', border: '1px solid rgba(226, 245, 0, 0.2)', flex: 1 }}>
              <p style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.8rem', marginBottom: '4px' }}>Alumni Matches</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--jaba-accent)' }}>34</p>
            </div>
            <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', flex: 1 }}>
              <p style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.8rem', marginBottom: '4px' }}>Connected</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#22c55e' }}>12</p>
            </div>
            <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', flex: 1 }}>
              <p style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.8rem', marginBottom: '4px' }}>New This Month</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--jaba-text-primary)' }}>6</p>
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-group">
              <label>Industry</label>
              <select className="filter-select">
                <option>All Industries</option>
                <option>Apparel & Footwear</option>
                <option>Beverages</option>
                <option>Technology</option>
                <option>Finance</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Status</label>
              <select className="filter-select">
                <option>All Status</option>
                <option>Connected</option>
                <option>Reach Out</option>
                <option>New Match</option>
              </select>
            </div>
          </div>

          <table className="data-table" style={{ marginTop: '20px' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Company</th>
                <th>Industry</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {alumniContacts.map((alumni, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: '600' }}>{alumni.name} '{alumni.year}</td>
                  <td>{alumni.title}</td>
                  <td>{alumni.company}</td>
                  <td>{alumni.industry}</td>
                  <td>
                    <span className={`campaign-card__status campaign-card__status--${alumni.status === 'connected' ? 'completed' : alumni.status === 'reach-out' ? 'pending' : 'active'}`}>
                      {alumni.status === 'connected' ? 'Connected' : alumni.status === 'reach-out' ? 'Reach Out' : 'New Match'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(226, 245, 0, 0.05)', borderRadius: '12px', border: '1px solid rgba(226, 245, 0, 0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icons.Sparkles /></span>
              <span style={{ fontWeight: '600', color: 'var(--jaba-accent)' }}>Pro Tip</span>
            </div>
            <p style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
              Alumni connections have a 3.2x higher response rate than cold outreach. Use your school connection to open doors faster.
            </p>
          </div>
        </div>
      )
    default:
      return null
  }
}

// Priority 3 Content Components

function TextAssistantContent({ activeSubFeature }) {
  const reminders = [
    { athlete: 'Brody Dalton', message: 'Nike post due in 48 hours', scheduledFor: 'Feb 6, 9:00 AM', status: 'pending', type: 'Deliverable' },
    { athlete: 'Judith Mokobe', message: 'Red Bull video deadline reminder', scheduledFor: 'Feb 8, 9:00 AM', status: 'pending', type: 'Deliverable' },
    { athlete: 'Marcus Johnson', message: 'Samsung appearance confirmation', scheduledFor: 'Feb 10, 10:00 AM', status: 'pending', type: 'Appearance' },
    { athlete: 'Sarah Chen', message: 'Gatorade contract review needed', scheduledFor: 'Feb 7, 2:00 PM', status: 'pending', type: 'Contract' },
    { athlete: 'Tyler Brooks', message: 'Chipotle content submission due', scheduledFor: 'Feb 9, 11:00 AM', status: 'pending', type: 'Deliverable' },
  ]

  const sentHistory = [
    { athlete: 'Brody Dalton', message: 'Contract signing reminder', sentAt: 'Feb 1, 9:00 AM', delivered: true, response: 'Confirmed' },
    { athlete: 'Sarah Chen', message: 'Photo shoot tomorrow at 2pm', sentAt: 'Jan 30, 3:00 PM', delivered: true, response: 'Acknowledged' },
    { athlete: 'Judith Mokobe', message: 'Please review brand guidelines', sentAt: 'Jan 28, 11:00 AM', delivered: true, response: 'No response' },
    { athlete: 'Marcus Johnson', message: 'Nike post due Friday', sentAt: 'Jan 26, 10:00 AM', delivered: true, response: 'Confirmed' },
    { athlete: 'Laila Wilcox', message: 'Beats content approved', sentAt: 'Jan 25, 4:00 PM', delivered: true, response: 'Acknowledged' },
    { athlete: 'Tyler Brooks', message: 'Appearance details for Saturday', sentAt: 'Jan 24, 9:00 AM', delivered: true, response: 'Confirmed' },
  ]

  switch (activeSubFeature) {
    case 'active-reminders':
      return (
        <div className="feature-section" key="active-reminders">
          <h2 className="feature-section__title">Active Reminders</h2>
          <p className="feature-section__description">
            Automated text reminders keep athletes on track. Never chase down a deadline again.
          </p>

          {/* Summary Stats */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <div style={{ padding: '12px 20px', background: 'rgba(226, 245, 0, 0.1)', borderRadius: '8px', border: '1px solid rgba(226, 245, 0, 0.2)', flex: 1 }}>
              <p style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.8rem', marginBottom: '4px' }}>Scheduled</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--jaba-accent)' }}>5</p>
            </div>
            <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', flex: 1 }}>
              <p style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.8rem', marginBottom: '4px' }}>Sent This Week</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#22c55e' }}>12</p>
            </div>
            <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', flex: 1 }}>
              <p style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.8rem', marginBottom: '4px' }}>Response Rate</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--jaba-text-primary)' }}>94%</p>
            </div>
          </div>

          <div className="campaign-grid">
            {reminders.map((reminder, i) => (
              <div className="campaign-card" key={i}>
                <div className="campaign-card__header">
                  <div>
                    <p className="campaign-card__title">{reminder.athlete}</p>
                    <p className="campaign-card__brand">{reminder.message}</p>
                  </div>
                  <span className="campaign-card__status campaign-card__status--active">Scheduled</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--jaba-text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Icons.Bell /> {reminder.scheduledFor}
                  </span>
                  <span style={{ fontSize: '0.75rem', padding: '2px 8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', color: 'var(--jaba-text-secondary)' }}>
                    {reminder.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    case 'sent-history':
      return (
        <div className="feature-section" key="sent-history">
          <h2 className="feature-section__title">Sent History</h2>
          <p className="feature-section__description">
            Full log of all automated messages. Track responses and follow up as needed.
          </p>

          {/* Quick Stats */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', flex: 1 }}>
              <p style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.8rem', marginBottom: '4px' }}>Messages Sent</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--jaba-text-primary)' }}>247</p>
            </div>
            <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', flex: 1 }}>
              <p style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.8rem', marginBottom: '4px' }}>Delivered</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#22c55e' }}>100%</p>
            </div>
            <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', flex: 1 }}>
              <p style={{ color: 'var(--jaba-text-secondary)', fontSize: '0.8rem', marginBottom: '4px' }}>Avg Response Time</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--jaba-text-primary)' }}>2.4h</p>
            </div>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Athlete</th>
                <th>Message</th>
                <th>Sent At</th>
                <th>Delivery</th>
                <th>Response</th>
              </tr>
            </thead>
            <tbody>
              {sentHistory.map((item, i) => (
                <tr key={i}>
                  <td>{item.athlete}</td>
                  <td>{item.message}</td>
                  <td>{item.sentAt}</td>
                  <td>
                    <span style={{ color: '#22c55e' }}>✓✓</span>
                  </td>
                  <td>
                    <span className={`campaign-card__status campaign-card__status--${item.response === 'Confirmed' ? 'completed' : item.response === 'Acknowledged' ? 'active' : 'pending'}`}>
                      {item.response}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'new-reminders':
      return (
        <div className="feature-section" key="new-reminders">
          <h2 className="feature-section__title">Set New Reminders</h2>
          <p className="feature-section__description">
            Create custom text reminders for any athlete, any deadline.
          </p>

          {/* Template Quick Select */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--jaba-text-secondary)', fontSize: '0.85rem' }}>Quick Templates</label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['Deliverable due in 3 days', 'Contract pending review', 'Payment processed', 'Appearance reminder'].map(template => (
                <button key={template} style={{
                  padding: '6px 12px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'var(--jaba-text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}>{template}</button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-group">
              <label>Select Athlete</label>
              <select className="filter-select">
                <option>Choose athlete...</option>
                <option>Brody Dalton</option>
                <option>Judith Mokobe</option>
                <option>Marcus Johnson</option>
                <option>Sarah Chen</option>
                <option>Tyler Brooks</option>
                <option>Laila Wilcox</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Reminder Type</label>
              <select className="filter-select">
                <option>Choose type...</option>
                <option>Deliverable Due</option>
                <option>Contract Review</option>
                <option>Appearance Reminder</option>
                <option>Payment Notification</option>
                <option>Custom Message</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Schedule</label>
              <select className="filter-select">
                <option>Send immediately</option>
                <option>Tomorrow 9:00 AM</option>
                <option>In 2 days</option>
                <option>48 hours before deadline</option>
                <option>Custom date/time</option>
              </select>
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--jaba-text-secondary)' }}>Message</label>
            <textarea
              placeholder="Enter reminder message..."
              style={{
                width: '100%',
                minHeight: '100px',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(0,0,0,0.2)',
                color: 'var(--jaba-text-primary)',
                fontSize: '0.95rem',
                resize: 'vertical'
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <button className="search-btn">Schedule Reminder</button>
            <button className="search-btn" style={{ background: 'transparent', border: '1px solid var(--jaba-accent)', color: 'var(--jaba-accent)' }}>Preview Message</button>
          </div>
        </div>
      )
    default:
      return null
  }
}

function AboveCapContent({ activeSubFeature }) {
  switch (activeSubFeature) {
    case 'cap-spend':
      return (
        <div className="feature-section" key="cap-spend">
          <h2 className="feature-section__title">Plan Above the Cap Spend</h2>
          <p className="feature-section__description">
            Total control over NIL budgets. See your full spend, optimize allocations, and prove ROI to leadership.
          </p>
          <div className="financial-grid">
            <div className="financial-card">
              <div className="financial-card__icon"><Icons.Wallet /></div>
              <p className="financial-card__label">Total Budget (2025)</p>
              <p className="financial-card__value">$<span>2.4M</span></p>
            </div>
            <div className="financial-card">
              <div className="financial-card__icon"><Icons.TrendingUp /></div>
              <p className="financial-card__label">Spent YTD</p>
              <p className="financial-card__value">$<span>890K</span></p>
            </div>
            <div className="financial-card">
              <div className="financial-card__icon"><Icons.Target /></div>
              <p className="financial-card__label">Remaining</p>
              <p className="financial-card__value">$<span>1.51M</span></p>
            </div>
          </div>
          <div className="campaign-grid" style={{ marginTop: '24px' }}>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Football</p>
                  <p className="campaign-card__brand">$450K of $800K budget</p>
                </div>
                <span className="campaign-card__status campaign-card__status--active">56% Used</span>
              </div>
              <div className="campaign-card__progress">
                <div className="progress-bar">
                  <div className="progress-bar__fill" style={{ width: '56%' }} />
                </div>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Basketball</p>
                  <p className="campaign-card__brand">$280K of $500K budget</p>
                </div>
                <span className="campaign-card__status campaign-card__status--active">56% Used</span>
              </div>
              <div className="campaign-card__progress">
                <div className="progress-bar">
                  <div className="progress-bar__fill" style={{ width: '56%' }} />
                </div>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Track & Field</p>
                  <p className="campaign-card__brand">$95K of $200K budget</p>
                </div>
                <span className="campaign-card__status campaign-card__status--pending">48% Used</span>
              </div>
              <div className="campaign-card__progress">
                <div className="progress-bar">
                  <div className="progress-bar__fill" style={{ width: '48%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    case 'nil-defender':
      return (
        <div className="feature-section" key="nil-defender">
          <h2 className="feature-section__title">NIL Go Defender</h2>
          <p className="feature-section__description">
            Protect your athletes from bad deals. AI-powered contract analysis flags risky terms and unfair valuations.
          </p>
          <div className="metrics-grid">
            <div className="metric-card">
              <p className="metric-card__label">Contracts Reviewed</p>
              <p className="metric-card__value">47</p>
              <p className="metric-card__change">This quarter</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Issues Flagged</p>
              <p className="metric-card__value">12</p>
              <p className="metric-card__change metric-card__change--positive">Saved $85K</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Avg Review Time</p>
              <p className="metric-card__value">&lt; 2min</p>
              <p className="metric-card__change">AI-powered</p>
            </div>
          </div>
          <div className="campaign-grid" style={{ marginTop: '24px' }}>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Nike Contract - Brody Dalton</p>
                  <p className="campaign-card__brand">Reviewed Jan 28, 2025</p>
                </div>
                <span className="campaign-card__status campaign-card__status--completed">Approved</span>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Red Bull NDA - Judith Mokobe</p>
                  <p className="campaign-card__brand">Reviewed Feb 1, 2025</p>
                </div>
                <span className="campaign-card__status campaign-card__status--pending">1 Flag</span>
              </div>
            </div>
          </div>
        </div>
      )
    case 'deal-simulator':
      return (
        <div className="feature-section" key="deal-simulator">
          <h2 className="feature-section__title">Deal Simulator</h2>
          <p className="feature-section__description">
            Model deal scenarios before you pitch. See projected ROI, compare valuations, and optimize your offer.
          </p>
          <div className="filter-section">
            <div className="filter-group">
              <label>Athlete</label>
              <select className="filter-select">
                <option>Select athlete...</option>
                <option>Brody Dalton</option>
                <option>Judith Mokobe</option>
                <option>Marcus Johnson</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Deal Type</label>
              <select className="filter-select">
                <option>Select type...</option>
                <option>Social Media</option>
                <option>Endorsement</option>
                <option>Appearance</option>
                <option>Product Collab</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Duration</label>
              <select className="filter-select">
                <option>Select duration...</option>
                <option>One-time</option>
                <option>3 months</option>
                <option>6 months</option>
                <option>1 year</option>
              </select>
            </div>
          </div>
          <div className="metrics-grid" style={{ marginTop: '24px' }}>
            <div className="metric-card">
              <p className="metric-card__label">Suggested Value</p>
              <p className="metric-card__value">$25K</p>
              <p className="metric-card__change">Based on comparables</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Projected ROI</p>
              <p className="metric-card__value">340%</p>
              <p className="metric-card__change metric-card__change--positive">For brand</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Market Rate</p>
              <p className="metric-card__value">$20-30K</p>
              <p className="metric-card__change">Industry range</p>
            </div>
          </div>
          <button className="search-btn" style={{ marginTop: '24px' }}>Run Simulation</button>
        </div>
      )
    default:
      return null
  }
}

// Modal Component
function FeatureModal({ feature, onClose }) {
  const [activeSubFeature, setActiveSubFeature] = useState(feature.subFeatures[0].id)
  const Icon = feature.icon

  const renderContent = () => {
    switch (feature.id) {
      case 'athlete-metrics':
        return <AthleteMetricsContent activeSubFeature={activeSubFeature} />
      case 'campaigns-deals':
        return <ManageCampaignsDealsContent activeSubFeature={activeSubFeature} />
      case 'content-hub':
        return <ContentHubContent activeSubFeature={activeSubFeature} />
      case 'brand-connections':
        return <BrandConnectionsContent activeSubFeature={activeSubFeature} />
      case 'text-assistant':
        return <TextAssistantContent activeSubFeature={activeSubFeature} />
      case 'above-cap':
        return <AboveCapContent activeSubFeature={activeSubFeature} />
      default:
        return null
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          <Icons.X />
        </button>
        <div className="modal__content">
          <button className="modal__back" onClick={onClose}>
            <Icons.ChevronLeft />
            <span>Back to Features</span>
          </button>
          <div className="modal__header">
            <div className="modal__icon">
              <Icon />
            </div>
            <h2 className="modal__title">{feature.title}</h2>
          </div>
          {renderContent()}
        </div>
        <div className="modal__sidebar">
          <h3 className="sidebar__title">Features</h3>
          <nav className="sidebar__nav">
            {feature.subFeatures.map(sub => (
              <div
                key={sub.id}
                className={`sidebar__item ${activeSubFeature === sub.id ? 'sidebar__item--active' : ''}`}
                onClick={() => setActiveSubFeature(sub.id)}
              >
                {sub.title}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

// Main App Component
function App() {
  const [selectedFeature, setSelectedFeature] = useState(null)

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <div className="header__logo-container">
            <img src="/jaba-logo.png" alt="JABA" className="header__logo" />
            <h1 className="header__title">AI Built for NIL Departments</h1>
          </div>
          <p className="header__subtitle">
            JABA handles the manual work so you can scale your NIL operations.
          </p>
        </header>

        <div className="feature-grid">
          {features.map(feature => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              onClick={() => setSelectedFeature(feature)}
            />
          ))}
        </div>

        {selectedFeature && (
          <FeatureModal
            feature={selectedFeature}
            onClose={() => setSelectedFeature(null)}
          />
        )}
      </div>
    </div>
  )
}

export default App

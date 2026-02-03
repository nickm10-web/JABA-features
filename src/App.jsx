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
  { id: '3', name: 'ERIS LESTER', sport: "Women's Basketball", school: 'University of JABA', marketability: 69, followers: '28K', engagement: '9.8%', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop' },
  { id: '4', name: 'LAILA WILCOX', sport: "Women's Track & Field", school: 'University of JABA', marketability: 68, followers: '25K', engagement: '12.1%', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop' },
]

// Feature data
const features = [
  {
    id: 'roster',
    icon: Icons.Users,
    title: 'Manage Your Roster',
    description: 'Know every athlete\'s potential. Track their rise. Monitor every metric that matters.',
    subFeatures: [
      { id: 'profiles', title: 'Athlete Profiles & Marketability Scoring' },
      { id: 'media-kits', title: 'Professional Media Kits' },
      { id: 'content-performance', title: 'Track Content Performance' },
    ]
  },
  {
    id: 'campaigns',
    icon: Icons.Target,
    title: 'Execute Campaigns & Deals',
    description: 'Launch campaigns faster. Close deals with confidence. Never miss a beat.',
    subFeatures: [
      { id: 'campaign-builder', title: 'Campaign Builder & Management' },
      { id: 'contracts', title: 'Contract & Document Management' },
      { id: 'task-tracking', title: 'Task & Workflow Tracking' },
    ]
  },
  {
    id: 'analytics',
    icon: Icons.BarChart,
    title: 'Analytics & Performance',
    description: 'Watch your deals come alive in real-time. See ROI instantly. Make smarter moves every day.',
    subFeatures: [
      { id: 'metrics-dashboard', title: 'Real-time Metrics Dashboard' },
      { id: 'ai-insights', title: 'AI Campaign Insights' },
      { id: 'rankings', title: 'Performance Rankings & Leaderboards' },
    ]
  },
  {
    id: 'relationships',
    icon: Icons.Smile,
    title: 'Build Relationships',
    description: 'Build your network. Strengthen your partnerships. Own every relationship.',
    subFeatures: [
      { id: 'brand-discovery', title: 'Brand Discovery & CRM' },
      { id: 'contact-management', title: 'Contact Management' },
      { id: 'deal-history', title: 'Deal History & Tracking' },
    ]
  },
  {
    id: 'above-cap',
    icon: Icons.DollarSign,
    title: 'Above The Cap',
    description: 'Master your money. Maximize deal value. Never leave money on the table.',
    subFeatures: [
      { id: 'rate-cards', title: 'Deal Valuation & Rate Cards' },
      { id: 'budgets', title: 'Spending Plans & Budgets' },
      { id: 'reporting', title: 'Financial Reporting' },
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

      <div className="athlete-card__info-row">
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

// Sub-feature content components
function RelationshipsContent({ activeSubFeature }) {
  const pipelineData = {
    'New Lead': [
      { name: 'Coca-Cola', company: 'Beverages' },
      { name: 'Under Armour', company: 'Apparel' },
    ],
    'In Discussion': [
      { name: 'PlayStation', company: 'Gaming' },
      { name: 'Red Bull', company: 'Energy Drinks' },
      { name: 'Beats', company: 'Audio' },
    ],
    'Negotiating': [
      { name: 'Adidas', company: 'Footwear' },
    ],
    'Closed': [
      { name: 'Nike', company: 'Footwear' },
      { name: 'Gatorade', company: 'Beverages' },
    ],
  }

  switch (activeSubFeature) {
    case 'brand-discovery':
      return (
        <div className="feature-section" key="brand-discovery">
          <h2 className="feature-section__title">Brand Discovery & CRM</h2>
          <p className="feature-section__description">
            Stop cold-calling brands. Smart discovery shows you ready-to-partner brands actively looking for athletes like yours.
          </p>
          <div className="filter-section">
            <div className="filter-group">
              <label>Industry</label>
              <select className="filter-select">
                <option>All Industries</option>
                <option>Apparel & Footwear</option>
                <option>Beverages</option>
                <option>Technology</option>
                <option>Finance</option>
                <option>Automotive</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Deal Size</label>
              <select className="filter-select">
                <option>All Sizes</option>
                <option>$5K - $25K</option>
                <option>$25K - $100K</option>
                <option>$100K+</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Partnership Type</label>
              <select className="filter-select">
                <option>All Types</option>
                <option>Social Media</option>
                <option>Endorsement</option>
                <option>Appearance</option>
                <option>Product Collab</option>
              </select>
            </div>
          </div>
          <button className="search-btn">
            <Icons.Search /> Discover Brands
          </button>
          <div className="pipeline" style={{ marginTop: '24px' }}>
            {Object.entries(pipelineData).map(([stage, items]) => (
              <div className="pipeline-column" key={stage}>
                <div className="pipeline-column__header">
                  <span className="pipeline-column__title">{stage}</span>
                  <span className="pipeline-column__count">{items.length}</span>
                </div>
                {items.map((item, i) => (
                  <div className="pipeline-item" key={i}>
                    <p className="pipeline-item__name">{item.name}</p>
                    <p className="pipeline-item__company">{item.company}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )
    case 'contact-management':
      return (
        <div className="feature-section" key="contact-management">
          <h2 className="feature-section__title">Contact Management</h2>
          <p className="feature-section__description">
            Every contact, every interaction, all organized. Never lose a relationship or miss a follow-up again.
          </p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Job Title</th>
                <th>Company</th>
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
                  <td>{['2 days ago', '1 week ago', 'Yesterday'][i % 3]}</td>
                  <td>
                    <span className={`campaign-card__status campaign-card__status--${['active', 'pending', 'completed'][i % 3]}`}>
                      {['Active', 'Follow Up', 'Closed'][i % 3]}
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
    case 'deal-history':
      return (
        <div className="feature-section" key="deal-history">
          <h2 className="feature-section__title">Deal History & Tracking</h2>
          <p className="feature-section__description">
            Institutional memory for your NIL program. Track what worked, who's interested, and opportunities for next time.
          </p>
          <div className="filter-section">
            <div className="filter-group">
              <label>Brand</label>
              <select className="filter-select">
                <option>All Brands</option>
                <option>Nike</option>
                <option>Red Bull</option>
                <option>Gatorade</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Athlete</label>
              <select className="filter-select">
                <option>All Athletes</option>
                <option>Brody Dalton</option>
                <option>Judith Mokobe</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Year</label>
              <select className="filter-select">
                <option>All Time</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
              </select>
            </div>
          </div>
          <table className="data-table" style={{ marginTop: '20px' }}>
            <thead>
              <tr>
                <th>Brand</th>
                <th>Athlete</th>
                <th>Deal Type</th>
                <th>Value</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nike</td>
                <td>Brody Dalton</td>
                <td>Endorsement</td>
                <td>$75,000</td>
                <td>Jan 2025</td>
                <td><span className="campaign-card__status campaign-card__status--active">Active</span></td>
              </tr>
              <tr>
                <td>Red Bull</td>
                <td>Judith Mokobe</td>
                <td>Social Media</td>
                <td>$25,000</td>
                <td>Dec 2024</td>
                <td><span className="campaign-card__status campaign-card__status--completed">Completed</span></td>
              </tr>
              <tr>
                <td>Gatorade</td>
                <td>Brody Dalton</td>
                <td>Appearance</td>
                <td>$15,000</td>
                <td>Nov 2024</td>
                <td><span className="campaign-card__status campaign-card__status--completed">Completed</span></td>
              </tr>
              <tr>
                <td>Beats</td>
                <td>Judith Mokobe</td>
                <td>Product Collab</td>
                <td>$30,000</td>
                <td>Oct 2024</td>
                <td><span className="campaign-card__status campaign-card__status--completed">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

function RosterContent({ activeSubFeature }) {
  switch (activeSubFeature) {
    case 'profiles':
      return (
        <div className="feature-section" key="profiles">
          <h2 className="feature-section__title">Athlete Profiles & Marketability Scoring</h2>
          <p className="feature-section__description">
            Know your athletes' market value instantly. See who's ready for deals. Filter by sport, position, or opportunity readiness.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {athletes.slice(0, 2).map(athlete => (
              <AthleteCard key={athlete.id} athlete={athlete} />
            ))}
          </div>
        </div>
      )
    case 'media-kits':
      return (
        <div className="feature-section" key="media-kits">
          <h2 className="feature-section__title">Professional Media Kits</h2>
          <p className="feature-section__description">
            Professional-grade media kits ready in minutes. Athletes impress brands. Brands make offers. Everyone wins.
          </p>

          {/* 5-Step Flow */}
          <div className="media-kit-flow">
            {/* Step 1: Brand Selection */}
            <div className="flow-step">
              <div className="flow-step__number">1</div>
              <div className="flow-step__content">
                <h3 className="flow-step__title">Brand Selection</h3>
                <p className="flow-step__caption">Pick a brand or search for one</p>
                <div className="brand-search-box">
                  <div className="search-input">
                    <Icons.Search />
                    <input type="text" placeholder="Which brand do you want to pitch?" readOnly />
                  </div>
                  <div className="brand-buttons">
                    <button className="brand-btn">Nike</button>
                    <button className="brand-btn">Adidas</button>
                    <button className="brand-btn">Gatorade</button>
                    <button className="brand-btn">Beats</button>
                    <button className="brand-btn">Red Bull</button>
                    <button className="brand-btn">Chipotle</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Brand Intelligence */}
            <div className="flow-step">
              <div className="flow-step__number">2</div>
              <div className="flow-step__content">
                <h3 className="flow-step__title">Brand Intelligence</h3>
                <p className="flow-step__caption">AI analyzes brand values and positioning</p>
                <div className="brand-info-card">
                  <div className="brand-info-header">
                    <div className="brand-logo-placeholder">
                      <Icons.Building />
                    </div>
                    <h4>Chipotle</h4>
                  </div>
                  <div className="brand-info-grid">
                    <div className="brand-info-item">
                      <span className="brand-info-label">Industry:</span>
                      <span className="brand-info-value">Fast Casual Dining</span>
                    </div>
                    <div className="brand-info-item">
                      <span className="brand-info-label">Brand Positioning:</span>
                      <span className="brand-info-value">Real food for real athletes</span>
                    </div>
                    <div className="brand-info-item">
                      <span className="brand-info-label">Target Audience:</span>
                      <span className="brand-info-value">Health-conscious consumers, athletes, young adults</span>
                    </div>
                    <div className="brand-info-item">
                      <span className="brand-info-label">Brand Values:</span>
                      <span className="brand-info-value">Fresh ingredients, Customization, Sustainability, Real food</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: AI Partnership Ideas */}
            <div className="flow-step">
              <div className="flow-step__number">3</div>
              <div className="flow-step__content">
                <h3 className="flow-step__title">AI Partnership Ideas</h3>
                <p className="flow-step__caption">AI generates custom campaign concepts tailored to this brand</p>
                <div className="partnership-ideas">
                  <div className="partnership-card">
                    <div className="partnership-card__header">
                      <Icons.Lightbulb />
                      <span className="partnership-card__format">Story</span>
                    </div>
                    <h4 className="partnership-card__title">Field to Fork: Sustainability Touchdown</h4>
                    <p className="partnership-card__description">Highlight the connection between sustainable food and peak athletic performance through behind-the-scenes training content.</p>
                  </div>
                  <div className="partnership-card">
                    <div className="partnership-card__header">
                      <Icons.Lightbulb />
                      <span className="partnership-card__format">Event</span>
                    </div>
                    <h4 className="partnership-card__title">Real Food, Real Performance Challenge</h4>
                    <p className="partnership-card__description">Host a campus event where students try Chipotle's performance bowls and compete in mini athletic challenges.</p>
                  </div>
                  <div className="partnership-card">
                    <div className="partnership-card__header">
                      <Icons.Lightbulb />
                      <span className="partnership-card__format">Story</span>
                    </div>
                    <h4 className="partnership-card__title">Power Packed: Knighten's Nutrition Playbook</h4>
                    <p className="partnership-card__description">Share weekly meal prep featuring Chipotle ingredients that fuel game-day performance and recovery.</p>
                  </div>
                  <div className="partnership-card">
                    <div className="partnership-card__header">
                      <Icons.Lightbulb />
                      <span className="partnership-card__format">Post</span>
                    </div>
                    <h4 className="partnership-card__title">Customization Champions</h4>
                    <p className="partnership-card__description">Showcase how athletes customize their Chipotle bowls for different training phases—strength, endurance, recovery.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Finalize & Customize */}
            <div className="flow-step">
              <div className="flow-step__number">4</div>
              <div className="flow-step__content">
                <h3 className="flow-step__title">Finalize & Customize</h3>
                <p className="flow-step__caption">Customize header, rate cards, and selected partnership ideas</p>
                <div className="media-kit-mini-preview">
                  <div className="mini-preview-header">
                    <img src="/jaba-logo.png" alt="School Logo" className="mini-preview-logo" />
                    <span className="mini-preview-label">Custom Header</span>
                  </div>
                  <div className="mini-preview-sections">
                    <div className="mini-preview-section">
                      <Icons.Users />
                      <span>Athlete Info</span>
                    </div>
                    <div className="mini-preview-section">
                      <Icons.BarChart />
                      <span>Social Metrics</span>
                    </div>
                    <div className="mini-preview-section">
                      <Icons.Sparkles />
                      <span>Partnership Ideas</span>
                    </div>
                    <div className="mini-preview-section">
                      <Icons.DollarSign />
                      <span>Rate Card</span>
                    </div>
                  </div>
                  <div className="mini-preview-actions">
                    <button className="mini-preview-btn">
                      <Icons.Edit /> Customize
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: Export & Share */}
            <div className="flow-step">
              <div className="flow-step__number">5</div>
              <div className="flow-step__content">
                <h3 className="flow-step__title">Export & Share</h3>
                <p className="flow-step__caption">Download as PDF or share instantly with brand partners</p>
                <div className="export-preview">
                  <div className="export-preview__document">
                    <Icons.FileText />
                    <span className="export-preview__title">Brody_Dalton_Chipotle_MediaKit.pdf</span>
                    <span className="export-preview__badge">Shareable & Exportable</span>
                  </div>
                  <div className="export-actions">
                    <button className="export-btn export-btn--primary">
                      <Icons.Share /> Share via Link
                    </button>
                    <button className="export-btn export-btn--secondary">
                      <Icons.Download /> Export as PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Callout Box */}
          <div className="media-kit-callout">
            <div className="callout-icon">
              <Icons.Sparkles />
            </div>
            <div className="callout-content">
              <h3 className="callout-title">From brand selection to professional pitch deck in minutes — powered by AI</h3>
              <div className="callout-stats">
                <div className="callout-stat">
                  <Icons.TrendingUp />
                  <span>Saves 2-3 hours of manual kit creation</span>
                </div>
                <div className="callout-stat">
                  <Icons.Target />
                  <span>Increases partnership pitch acceptance rate</span>
                </div>
                <div className="callout-stat">
                  <Icons.Check />
                  <span>One click to send to multiple brands</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    case 'content-performance':
      return (
        <div className="feature-section" key="content-performance">
          <h2 className="feature-section__title">Track Content Performance</h2>
          <p className="feature-section__description">
            Stop guessing on content strategy. Real data shows you exactly what resonates with audiences and brands.
          </p>
          <div className="metrics-grid">
            <div className="metric-card">
              <p className="metric-card__label">Top Post Views</p>
              <p className="metric-card__value">2.4M</p>
              <p className="metric-card__change metric-card__change--positive">+15% vs avg</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Avg Engagement Rate</p>
              <p className="metric-card__value">8.7%</p>
              <p className="metric-card__change metric-card__change--positive">+2.3% this month</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Total Shares</p>
              <p className="metric-card__value">48.2K</p>
              <p className="metric-card__change metric-card__change--positive">+23% vs avg</p>
            </div>
          </div>
          <div className="campaign-grid" style={{ marginTop: '24px' }}>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Game Day Content</p>
                  <p className="campaign-card__brand">Highest performing theme</p>
                </div>
                <span className="campaign-card__status campaign-card__status--active">12.4% Eng</span>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Training & Workout</p>
                  <p className="campaign-card__brand">Strong audience resonance</p>
                </div>
                <span className="campaign-card__status campaign-card__status--active">9.8% Eng</span>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Behind The Scenes</p>
                  <p className="campaign-card__brand">Growing trend</p>
                </div>
                <span className="campaign-card__status campaign-card__status--pending">7.2% Eng</span>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Brand Partnerships</p>
                  <p className="campaign-card__brand">Sponsored content</p>
                </div>
                <span className="campaign-card__status campaign-card__status--pending">6.1% Eng</span>
              </div>
            </div>
          </div>
        </div>
      )
    default:
      return null
  }
}

function AnalyticsContent({ activeSubFeature }) {
  const [sortBy, setSortBy] = useState('Marketability Score')
  const [filterBy, setFilterBy] = useState('All Athletes')

  const chartData = [
    { label: 'Mon', height: '60%' },
    { label: 'Tue', height: '80%' },
    { label: 'Wed', height: '45%' },
    { label: 'Thu', height: '90%' },
    { label: 'Fri', height: '70%' },
    { label: 'Sat', height: '85%' },
    { label: 'Sun', height: '95%' },
  ]

  // Athletes data for rankings
  const athletesData = [
    { name: 'Brody Dalton', sport: 'Football', marketability: 76, engagement: 8.2, followers: 145000, emv: 42000 },
    { name: 'Judith Mokobe', sport: 'Track & Field', marketability: 72, engagement: 11.4, followers: 98000, emv: 38000 },
    { name: 'Marcus Johnson', sport: 'Basketball', marketability: 68, engagement: 9.1, followers: 182000, emv: 51000 },
    { name: 'Sarah Chen', sport: 'Volleyball', marketability: 65, engagement: 7.8, followers: 76000, emv: 28000 },
    { name: 'Tyler Brooks', sport: 'Baseball', marketability: 62, engagement: 6.5, followers: 54000, emv: 22000 },
  ]

  // Filter athletes by sport
  const filteredAthletes = filterBy === 'All Athletes'
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
      case 'EMV':
        return b.emv - a.emv
      default:
        return 0
    }
  })

  switch (activeSubFeature) {
    case 'metrics-dashboard':
      return (
        <div className="feature-section" key="metrics-dashboard">
          <h2 className="feature-section__title">Real-time Metrics Dashboard</h2>
          <p className="feature-section__description">
            Watch your NIL program come alive. See impressions, engagement, followers, and trends as they happen.
          </p>
          <div className="metrics-grid">
            <div className="metric-card">
              <p className="metric-card__label">Total Impressions</p>
              <p className="metric-card__value">12.4M</p>
              <p className="metric-card__change metric-card__change--positive">+18% this month</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Total Engagements</p>
              <p className="metric-card__value">892K</p>
              <p className="metric-card__change metric-card__change--positive">+24% this month</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Avg. Engagement Rate</p>
              <p className="metric-card__value">7.2%</p>
              <p className="metric-card__change metric-card__change--positive">+2.1% this month</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Follower Growth</p>
              <p className="metric-card__value">+45K</p>
              <p className="metric-card__change metric-card__change--positive">+12% this month</p>
            </div>
          </div>
          <div className="chart-container">
            <div className="chart-header">
              <h3 className="chart-title">Weekly Performance</h3>
              <div className="chart-legend">
                <span className="legend-item"><span className="legend-dot legend-dot--yellow"></span> Engagement</span>
              </div>
            </div>
            <div className="chart-bars">
              {chartData.map((bar, i) => (
                <div key={i} className="chart-bar" style={{ height: bar.height }}>
                  <span className="chart-bar__label">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    case 'ai-insights':
      return (
        <div className="feature-section" key="ai-insights">
          <h2 className="feature-section__title">AI Campaign Insights</h2>
          <p className="feature-section__description">
            Let AI do the heavy lifting. Predictive analytics show you the path to your best NIL opportunities.
          </p>

          {/* AI Insights Example Card */}
          <div className="ai-insights-example">
            <div className="ai-insights-example__header">
              <div className="ai-insights-example__badge">
                <Icons.Sparkles />
                <span>AI-Generated Analysis</span>
              </div>
              <h3 className="ai-insights-example__title">Campaign Performance Analysis: Nike Fall Campaign</h3>
            </div>

            <div className="ai-insights-example__metrics">
              <h4 className="ai-insights-example__section-title">Key Metrics</h4>
              <div className="ai-metrics-grid">
                <div className="ai-metric-item">
                  <span className="ai-metric-item__label">Engagement Rate</span>
                  <div className="ai-metric-item__value-row">
                    <span className="ai-metric-item__value">8.2%</span>
                    <span className="ai-metric-item__trend ai-metric-item__trend--up">↑ 23% vs avg</span>
                  </div>
                </div>
                <div className="ai-metric-item">
                  <span className="ai-metric-item__label">Reach</span>
                  <div className="ai-metric-item__value-row">
                    <span className="ai-metric-item__value">487K</span>
                    <span className="ai-metric-item__trend ai-metric-item__trend--up">↑ 15% vs similar</span>
                  </div>
                </div>
                <div className="ai-metric-item">
                  <span className="ai-metric-item__label">Share Rate</span>
                  <div className="ai-metric-item__value-row">
                    <span className="ai-metric-item__value">12.3%</span>
                    <span className="ai-metric-item__trend ai-metric-item__trend--up">↑ 8% vs last quarter</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ai-insights-example__recommendation">
              <div className="ai-recommendation-primary">
                <span className="ai-recommendation-primary__icon">📊</span>
                <p className="ai-recommendation-primary__text">
                  Instagram Stories generate 2.3x more engagement when posted between 5-7 PM on weekdays. Consider scheduling future content during these peak hours to maximize reach.
                </p>
              </div>
            </div>

            <div className="ai-insights-example__additional">
              <h4 className="ai-insights-example__section-title">Additional Recommendations</h4>
              <ul className="ai-recommendations-list">
                <li>
                  <Icons.Check />
                  <span>Carousel posts outperform single-image posts by 34% for this brand category</span>
                </li>
                <li>
                  <Icons.Check />
                  <span>Pairing product shots with athlete lifestyle content increases click-through rate by 18%</span>
                </li>
                <li>
                  <Icons.Check />
                  <span>Optimal hashtag strategy: mix 5 high-volume + 10 niche hashtags for 2.1x better discoverability</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Other Campaign Cards */}
          <div className="campaign-grid" style={{ marginTop: '32px' }}>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Red Bull Promotion</p>
                  <p className="campaign-card__brand">AI Analysis Complete</p>
                </div>
                <span className="campaign-card__status campaign-card__status--pending">Needs Attention</span>
              </div>
              <div style={{ marginTop: '12px', padding: '12px', background: 'rgba(226, 245, 0, 0.1)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--jaba-text-secondary)' }}>
                <strong style={{ color: 'var(--jaba-accent)' }}>AI Insight:</strong> Engagement dropped 15% after week 2. Recommend refreshing creative assets and testing new hashtag strategy.
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Gatorade Spring Series</p>
                  <p className="campaign-card__brand">AI Analysis Complete</p>
                </div>
                <span className="campaign-card__status campaign-card__status--active">Performing Well</span>
              </div>
              <div style={{ marginTop: '12px', padding: '12px', background: 'rgba(226, 245, 0, 0.1)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--jaba-text-secondary)' }}>
                <strong style={{ color: 'var(--jaba-accent)' }}>AI Insight:</strong> Sunday posts perform 40% better than weekdays. Behind-the-scenes content has highest share rate for this campaign.
              </div>
            </div>
          </div>
        </div>
      )
    case 'rankings':
      return (
        <div className="feature-section" key="rankings">
          <h2 className="feature-section__title">Performance Rankings & Leaderboards</h2>
          <p className="feature-section__description">
            Leaderboards that inspire. Celebrate your top performers and identify the next breakout NIL stars.
          </p>
          <div className="filter-section">
            <div className="filter-group">
              <label>Filter By</label>
              <select className="filter-select" value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
                <option>All Athletes</option>
                <option>Football</option>
                <option>Basketball</option>
                <option>Track & Field</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Sort By</label>
              <select className="filter-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option>Marketability Score</option>
                <option>Engagement Rate</option>
                <option>Follower Count</option>
                <option>EMV</option>
              </select>
            </div>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Athlete</th>
                <th>Sport</th>
                <th>Marketability</th>
                <th>Engagement</th>
              </tr>
            </thead>
            <tbody>
              {sortedAthletes.map((athlete, index) => (
                <tr key={athlete.name}>
                  <td style={{ color: 'var(--jaba-accent)', fontWeight: 'bold' }}>{index + 1}</td>
                  <td>{athlete.name}</td>
                  <td>{athlete.sport}</td>
                  <td><span style={{ color: 'var(--jaba-accent)' }}>{athlete.marketability}</span></td>
                  <td>{athlete.engagement}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

function CampaignsContent({ activeSubFeature }) {
  const campaigns = [
    { title: 'Summer Collection Launch', brand: 'Nike', status: 'active', progress: 75 },
    { title: 'Energy Drink Promotion', brand: 'Red Bull', status: 'pending', progress: 30 },
    { title: 'Tech Showcase', brand: 'Samsung', status: 'completed', progress: 100 },
  ]

  switch (activeSubFeature) {
    case 'campaign-builder':
      return (
        <div className="feature-section" key="campaign-builder">
          <h2 className="feature-section__title">Campaign Builder & Management</h2>
          <p className="feature-section__description">
            Stop juggling emails and spreadsheets. Build, assign, and track NIL campaigns that actually get delivered.
          </p>
          <div className="filter-section">
            <div className="filter-group">
              <label>Campaign Type</label>
              <select className="filter-select">
                <option>Select type...</option>
                <option>Social Media</option>
                <option>Appearance</option>
                <option>Product Launch</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Assign Athletes</label>
              <select className="filter-select">
                <option>Select athletes...</option>
                <option>Brody Dalton</option>
                <option>Judith Mokobe</option>
                <option>Multiple Athletes</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Budget Range</label>
              <select className="filter-select">
                <option>Select range...</option>
                <option>$5K - $10K</option>
                <option>$10K - $50K</option>
                <option>$50K+</option>
              </select>
            </div>
          </div>
          <button className="search-btn">Create Campaign</button>
          <div className="campaign-grid" style={{ marginTop: '24px' }}>
            {campaigns.map((campaign, i) => (
              <div className="campaign-card" key={i}>
                <div className="campaign-card__header">
                  <div>
                    <p className="campaign-card__title">{campaign.title}</p>
                    <p className="campaign-card__brand">{campaign.brand}</p>
                  </div>
                  <span className={`campaign-card__status campaign-card__status--${campaign.status}`}>
                    {campaign.status}
                  </span>
                </div>
                <div className="campaign-card__progress">
                  <div className="progress-bar">
                    <div className="progress-bar__fill" style={{ width: `${campaign.progress}%` }} />
                  </div>
                  <span className="progress-label">{campaign.progress}% complete</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    case 'contracts':
      return (
        <div className="feature-section" key="contracts">
          <h2 className="feature-section__title">Contract & Document Management</h2>
          <p className="feature-section__description">
            Legal protection that doesn't slow you down. Smart contracts built for NIL. Everything signed, stored, and searchable.
          </p>
          <div className="campaign-grid">
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Nike Partnership Agreement</p>
                  <p className="campaign-card__brand">Brody Dalton • Contract</p>
                </div>
                <span className="campaign-card__status campaign-card__status--completed">Signed</span>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Red Bull NDA</p>
                  <p className="campaign-card__brand">Judith Mokobe • NDA</p>
                </div>
                <span className="campaign-card__status campaign-card__status--pending">Awaiting Signature</span>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Samsung Campaign Terms</p>
                  <p className="campaign-card__brand">Multiple Athletes • Contract</p>
                </div>
                <span className="campaign-card__status campaign-card__status--active">In Review</span>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Gatorade Exclusivity</p>
                  <p className="campaign-card__brand">Brody Dalton • Amendment</p>
                </div>
                <span className="campaign-card__status campaign-card__status--completed">Signed</span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <button className="search-btn">Create New Contract</button>
            <button className="search-btn" style={{ background: 'transparent', border: '1px solid var(--jaba-accent)', color: 'var(--jaba-accent)' }}>Upload Document</button>
          </div>
        </div>
      )
    case 'task-tracking':
      return (
        <div className="feature-section" key="task-tracking">
          <h2 className="feature-section__title">Task & Workflow Tracking</h2>
          <p className="feature-section__description">
            Deadlines met. Deliverables delivered. Teams aligned. Every athlete knows exactly what they need to do.
          </p>
          <div className="metrics-grid">
            <div className="metric-card">
              <p className="metric-card__label">Tasks Completed</p>
              <p className="metric-card__value">24</p>
              <p className="metric-card__change metric-card__change--positive">This week</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">In Progress</p>
              <p className="metric-card__value">8</p>
              <p className="metric-card__change">Active tasks</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Pending Review</p>
              <p className="metric-card__value">5</p>
              <p className="metric-card__change metric-card__change--negative">Needs attention</p>
            </div>
          </div>
          <div className="campaign-grid" style={{ marginTop: '24px' }}>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Review Nike content drafts</p>
                  <p className="campaign-card__brand">Assigned to: Marketing Team • Due: Tomorrow</p>
                </div>
                <span className="campaign-card__status campaign-card__status--pending">Pending</span>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Schedule athlete photo shoot</p>
                  <p className="campaign-card__brand">Assigned to: Operations • Due: Jan 31</p>
                </div>
                <span className="campaign-card__status campaign-card__status--active">In Progress</span>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Send Red Bull deliverables</p>
                  <p className="campaign-card__brand">Assigned to: Content Team • Due: Feb 3</p>
                </div>
                <span className="campaign-card__status campaign-card__status--active">In Progress</span>
              </div>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Finalize Samsung contract</p>
                  <p className="campaign-card__brand">Assigned to: Legal • Due: Feb 5</p>
                </div>
                <span className="campaign-card__status campaign-card__status--pending">Pending</span>
              </div>
            </div>
          </div>
        </div>
      )
    default:
      return null
  }
}

function AboveCapContent({ activeSubFeature }) {
  switch (activeSubFeature) {
    case 'rate-cards':
      return (
        <div className="feature-section" key="rate-cards">
          <h2 className="feature-section__title">Deal Valuation & Rate Cards</h2>
          <p className="feature-section__description">
            Price your athletes right. Customizable rate cards for every deliverable type. Data-driven valuation meets market reality.
          </p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Deliverable Type</th>
                <th>Base Rate</th>
                <th>Premium Rate</th>
                <th>Usage Rights</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Instagram Post</td>
                <td>$2,500</td>
                <td>$4,000</td>
                <td>+25%</td>
              </tr>
              <tr>
                <td>Instagram Story</td>
                <td>$1,000</td>
                <td>$1,800</td>
                <td>+15%</td>
              </tr>
              <tr>
                <td>TikTok Video</td>
                <td>$3,500</td>
                <td>$5,500</td>
                <td>+30%</td>
              </tr>
              <tr>
                <td>In-Person Appearance</td>
                <td>$5,000</td>
                <td>$10,000</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Product Endorsement</td>
                <td>$7,500</td>
                <td>$15,000</td>
                <td>+50%</td>
              </tr>
            </tbody>
          </table>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <button className="search-btn">Edit Rate Card</button>
            <button className="search-btn" style={{ background: 'transparent', border: '1px solid var(--jaba-accent)', color: 'var(--jaba-accent)' }}>Create New Template</button>
          </div>
        </div>
      )
    case 'budgets':
      return (
        <div className="feature-section" key="budgets">
          <h2 className="feature-section__title">Spending Plans & Budgets</h2>
          <p className="feature-section__description">
            Total control. See your full NIL spend, optimize allocations, and prove ROI to leadership.
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
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Other Sports</p>
                  <p className="campaign-card__brand">$65K of $150K budget</p>
                </div>
                <span className="campaign-card__status campaign-card__status--pending">43% Used</span>
              </div>
              <div className="campaign-card__progress">
                <div className="progress-bar">
                  <div className="progress-bar__fill" style={{ width: '43%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    case 'reporting':
      return (
        <div className="feature-section" key="reporting">
          <h2 className="feature-section__title">Financial Reporting</h2>
          <p className="feature-section__description">
            Compliance-ready reporting. Show leadership the numbers. Show NCAA compliance. Show the real story of your NIL success.
          </p>
          <div className="metrics-grid">
            <div className="metric-card">
              <p className="metric-card__label">Total Program ROI</p>
              <p className="metric-card__value">340%</p>
              <p className="metric-card__change metric-card__change--positive">+45% vs last year</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Avg Deal ROI</p>
              <p className="metric-card__value">285%</p>
              <p className="metric-card__change metric-card__change--positive">+18% vs target</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Revenue Generated</p>
              <p className="metric-card__value">$3.2M</p>
              <p className="metric-card__change metric-card__change--positive">From $890K spend</p>
            </div>
          </div>
          <div className="chart-container" style={{ marginTop: '24px' }}>
            <div className="chart-header">
              <h3 className="chart-title">Monthly ROI Performance</h3>
            </div>
            <div className="chart-bars">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, i) => (
                <div key={i} className="chart-bar" style={{ height: `${60 + i * 8}%` }}>
                  <span className="chart-bar__label">{month}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <button className="search-btn">Generate Full Report</button>
            <button className="search-btn" style={{ background: 'transparent', border: '1px solid var(--jaba-accent)', color: 'var(--jaba-accent)' }}>Export to PDF</button>
          </div>
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
      case 'roster':
        return <RosterContent activeSubFeature={activeSubFeature} />
      case 'campaigns':
        return <CampaignsContent activeSubFeature={activeSubFeature} />
      case 'analytics':
        return <AnalyticsContent activeSubFeature={activeSubFeature} />
      case 'relationships':
        return <RelationshipsContent activeSubFeature={activeSubFeature} />
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
            <h1 className="header__title">Every tool your NIL department needs to succeed</h1>
          </div>
          <p className="header__subtitle">
            AI that makes NIL management effortless. So your athletes can stay focused on winning.
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

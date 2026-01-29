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
    id: 'compliance',
    icon: Icons.Clipboard,
    title: 'Compliance & Operations',
    description: 'Tools that support compliance and operational workflows.',
    subFeatures: [
      { id: 'nil-go', title: 'NIL Go / Cross Checker' },
      { id: 'logo-recognition', title: 'School Logo Recognition' },
      { id: 'notes', title: 'Notes' },
      { id: 'todo-list', title: 'Daily To-Do List' },
    ]
  },
  {
    id: 'relationships',
    icon: Icons.Users,
    title: 'Managing Relationships',
    description: 'See every brand that\'s ever done a deal with an athlete—plus verified contact info. Manage all your connections from brands, schools, partnerships and more.',
    subFeatures: [
      { id: 'contact-database', title: 'Confirmed Brand Contact Info Database' },
      { id: 'discover-connections', title: 'Discover New Connections' },
      { id: 'reminders', title: 'Relationship Follow-up Reminders' },
      { id: 'pipeline', title: 'Pipeline View' },
    ]
  },
  {
    id: 'athlete-tools',
    icon: Icons.Smile,
    title: 'Athlete Tools',
    description: 'Athlete professional assets that showcase their social performance.',
    subFeatures: [
      { id: 'profiles', title: 'Athlete Profiles' },
      { id: 'media-kits', title: 'Media Kits' },
      { id: 'interactive-kit', title: 'Interactive Media Kit' },
      { id: 'content-ideas', title: 'Content Ideas' },
      { id: 'caption-ideas', title: 'Caption Ideas' },
      { id: 'background-page', title: 'Athlete Background Page' },
      { id: 'showcases', title: 'Content & Social Showcases' },
    ]
  },
  {
    id: 'metrics',
    icon: Icons.BarChart,
    title: 'Metrics & Data',
    description: 'A centralized analytics hub showing athlete content performance overtime across platforms in a single place.',
    subFeatures: [
      { id: 'performance', title: 'Performance Metrics' },
      { id: 'platforms', title: 'Platform Breakdowns' },
      { id: 'engagement', title: 'Engagement Analytics' },
      { id: 'trends', title: 'Trend Analysis' },
    ]
  },
  {
    id: 'brand-deals',
    icon: Icons.Building,
    title: 'Brand Deals & Campaign Management',
    description: 'Plan, create, execute, and manage campaigns end to end for any athlete.',
    subFeatures: [
      { id: 'campaign-planning', title: 'Campaign Planning Tools' },
      { id: 'execution', title: 'Execution Tracking' },
      { id: 'monitoring', title: 'Performance Monitoring' },
      { id: 'templates', title: 'Campaign Templates' },
    ]
  },
  {
    id: 'ai-tools',
    icon: Icons.Sparkles,
    title: 'AI JABA Tools',
    description: 'AI-powered tools that automate content creation.',
    subFeatures: [
      { id: 'content-gen', title: 'AI Content Generation' },
      { id: 'captions', title: 'Automated Caption Writing' },
      { id: 'suggestions', title: 'Content Suggestions' },
      { id: 'recommendations', title: 'Smart Recommendations' },
    ]
  },
  {
    id: 'above-cap',
    icon: Icons.DollarSign,
    title: 'Above The Cap',
    description: 'Comprehensive financial planning and deal management tools.',
    subFeatures: [
      { id: 'financial-planning', title: 'Financial Planning' },
      { id: 'deal-management', title: 'Deal Management' },
      { id: 'contract-tracking', title: 'Contract Tracking' },
      { id: 'revenue', title: 'Revenue Analytics' },
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
function ComplianceContent({ activeSubFeature }) {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Review Nike contract terms', completed: false },
    { id: 2, text: 'Schedule meeting with compliance team', completed: true },
    { id: 3, text: 'Update athlete documentation', completed: false },
  ])
  const [newTodo, setNewTodo] = useState('')
  const [notes, setNotes] = useState('')

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
      setNewTodo('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  switch (activeSubFeature) {
    case 'nil-go':
      return (
        <div className="feature-section" key="nil-go">
          <h2 className="feature-section__title">NIL Go / Cross Checker</h2>
          <p className="feature-section__description">
            Upload a screenshot of the NIL Go spreadsheet to cross-reference deal statuses and ensure compliance across all athlete agreements.
          </p>
          <div className="logo-recognition">
            <div className="logo-scanner" style={{ height: '240px' }}>
              <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
                <div style={{ width: '48px', height: '48px', margin: '0 auto' }}>
                  <Icons.FileText />
                </div>
                <p style={{ marginTop: '12px', fontSize: '0.9rem' }}>Drop spreadsheet screenshot here</p>
                <p style={{ fontSize: '0.8rem' }}>or click to browse</p>
              </div>
              <div className="logo-scanner__beam" />
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '16px' }}>
              <button className="search-btn" style={{ padding: '12px 24px' }}>
                Upload & Analyze
              </button>
            </div>
          </div>
        </div>
      )
    case 'logo-recognition':
      return (
        <div className="feature-section" key="logo-recognition">
          <h2 className="feature-section__title">School Logo Recognition</h2>
          <p className="feature-section__description">
            See which brand deals use logos and track logo usage across campaigns with AI-powered detection.
          </p>
          <div className="logo-recognition">
            <div className="logo-scanner">
              <img
                src="/jaba-logo.png"
                alt="JABA Logo"
                style={{
                  maxWidth: '140px',
                  maxHeight: '140px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 12px rgba(226, 245, 0, 0.3))'
                }}
              />
              <div className="logo-scanner__beam" />
              <div className="logo-scanner__checkmark">
                <Icons.Check />
              </div>
            </div>
            <div className="recognition-status">
              <p className="recognition-status__label">Logo Recognized</p>
              <p className="recognition-status__text">University of JABA</p>
              <p className="recognition-status__detail">Brand logo detected - Ready for compliance verification</p>
            </div>
          </div>
        </div>
      )
    case 'notes':
      return (
        <div className="feature-section" key="notes">
          <h2 className="feature-section__title">Notes</h2>
          <p className="feature-section__description">
            Keep track of important information, meeting notes, and compliance details.
          </p>
          <div className="notes-section">
            <textarea
              className="notes-area"
              placeholder="Start typing your notes here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>
      )
    case 'todo-list':
      return (
        <div className="feature-section" key="todo-list">
          <h2 className="feature-section__title">Daily To-Do List</h2>
          <p className="feature-section__description">
            Manage your daily compliance and operational tasks efficiently.
          </p>
          <div className="todo-list">
            <div className="todo-input-group">
              <input
                type="text"
                className="todo-input"
                placeholder="Add a new task..."
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTodo()}
              />
              <button className="todo-add-btn" onClick={addTodo}>Add</button>
            </div>
            <div className="todo-items">
              {todos.map(todo => (
                <div className="todo-item" key={todo.id}>
                  <div
                    className={`todo-item__checkbox ${todo.completed ? 'todo-item__checkbox--checked' : ''}`}
                    onClick={() => toggleTodo(todo.id)}
                  >
                    {todo.completed && <Icons.Check />}
                  </div>
                  <span className={`todo-item__text ${todo.completed ? 'todo-item__text--completed' : ''}`}>
                    {todo.text}
                  </span>
                  <button className="todo-item__delete" onClick={() => deleteTodo(todo.id)}>
                    <Icons.Trash />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    default:
      return null
  }
}

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
    case 'contact-database':
      return (
        <div className="feature-section" key="contact-database">
          <h2 className="feature-section__title">Confirmed Brand Contact Info Database</h2>
          <p className="feature-section__description">
            Access verified contact information for brand representatives who have worked with athletes.
          </p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Job Title</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
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
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'discover-connections':
      return (
        <div className="feature-section" key="discover-connections">
          <h2 className="feature-section__title">Discover New Connections</h2>
          <p className="feature-section__description">
            Find new brand contacts and partnership opportunities using advanced filters.
          </p>
          <div className="filter-section">
            <div className="filter-group">
              <label>Industry</label>
              <select className="filter-select">
                <option>All Industries</option>
                <option>Apparel</option>
                <option>Beverages</option>
                <option>Technology</option>
                <option>Finance</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Job Title</label>
              <select className="filter-select">
                <option>All Titles</option>
                <option>Marketing Manager</option>
                <option>Brand Director</option>
                <option>Partnerships Lead</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Department</label>
              <select className="filter-select">
                <option>All Departments</option>
                <option>Marketing</option>
                <option>Sales</option>
                <option>Partnerships</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Alumni</label>
              <select className="filter-select">
                <option>All</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Location</label>
              <select className="filter-select">
                <option>All Locations</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
              </select>
            </div>
          </div>
          <button className="search-btn">
            <Icons.Search /> Search
          </button>
        </div>
      )
    case 'reminders':
      return (
        <div className="feature-section" key="reminders">
          <h2 className="feature-section__title">Relationship Follow-up Reminders</h2>
          <p className="feature-section__description">
            Never miss an important follow-up with automated relationship reminders.
          </p>
          <div className="reminder-card">
            <div className="reminder-card__icon"><Icons.Bell /></div>
            <div className="reminder-card__content">
              <p className="reminder-card__title">Follow up with Maya Lopez (Nike)</p>
              <p className="reminder-card__time">Due in 2 hours</p>
            </div>
            <div className="reminder-card__actions">
              <button className="reminder-card__action reminder-card__action--secondary">
                <Icons.Sparkles />
                Draft Follow Up
              </button>
              <button className="reminder-card__action">Mark Done</button>
            </div>
          </div>
          <div className="reminder-card">
            <div className="reminder-card__icon"><Icons.Bell /></div>
            <div className="reminder-card__content">
              <p className="reminder-card__title">Send proposal to Nike team</p>
              <p className="reminder-card__time">Due tomorrow</p>
            </div>
            <div className="reminder-card__actions">
              <button className="reminder-card__action reminder-card__action--secondary">
                <Icons.Sparkles />
                Draft Proposal
              </button>
              <button className="reminder-card__action">Mark Done</button>
            </div>
          </div>
          <div className="reminder-card">
            <div className="reminder-card__icon"><Icons.Bell /></div>
            <div className="reminder-card__content">
              <p className="reminder-card__title">Contract review with Pepsi</p>
              <p className="reminder-card__time">Due in 3 days</p>
            </div>
            <div className="reminder-card__actions">
              <button className="reminder-card__action reminder-card__action--secondary">
                <Icons.Sparkles />
                Draft Email
              </button>
              <button className="reminder-card__action">Mark Done</button>
            </div>
          </div>
        </div>
      )
    case 'pipeline':
      return (
        <div className="feature-section" key="pipeline">
          <h2 className="feature-section__title">Pipeline View</h2>
          <p className="feature-section__description">
            Visualize and manage your brand relationship pipeline from lead to close.
          </p>
          <div className="pipeline-controls">
            <div className="pipeline-filters">
              <select className="filter-select" style={{ width: 'auto', minWidth: '160px' }}>
                <option>All Deal Types</option>
                <option>Endorsements</option>
                <option>Social Media</option>
                <option>Events</option>
              </select>
              <select className="filter-select" style={{ width: 'auto', minWidth: '160px' }}>
                <option>All Deal Sizes</option>
                <option>$0 - $10K</option>
                <option>$10K - $50K</option>
                <option>$50K+</option>
              </select>
            </div>
            <button className="search-btn" style={{ padding: '10px 20px', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
              <span style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icons.Target />
              </span>
              Customize Pipeline
            </button>
          </div>
          <div className="pipeline">
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
    default:
      return null
  }
}

function AthleteToolsContent({ activeSubFeature }) {
  switch (activeSubFeature) {
    case 'profiles':
      return (
        <div className="feature-section" key="profiles">
          <h2 className="feature-section__title">Athlete Profiles</h2>
          <p className="feature-section__description">
            Comprehensive athlete profiles showcasing stats, social performance, and marketability scores.
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
          <h2 className="feature-section__title">Media Kits</h2>
          <p className="feature-section__description">
            Comprehensive one-page media kits with school branding, social metrics, and brand partnership opportunities. Share via link or export as PDF.
          </p>
          <div className="media-kit-showcase">
            <div className="media-kit-preview">
              <div className="media-kit-preview__header">
                <div className="media-kit-preview__logo-box">
                  <img src="/jaba-logo.png" alt="School Logo" className="media-kit-preview__logo" />
                  <span>University of JABA</span>
                </div>
                <span className="media-kit-preview__subtitle">ATHLETE MEDIA KIT</span>
              </div>

              <div className="media-kit-preview__hero">
                <div className="media-kit-preview__athlete-img">
                  <img src="/brody-dalton.jpg" alt="Brody Dalton" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                </div>
                <h3 className="media-kit-preview__athlete-name">BRODY DALTON</h3>
                <div className="media-kit-preview__badges">
                  <span>Football</span>
                  <span>Quarterback</span>
                  <span>Junior</span>
                </div>
                <div className="media-kit-preview__emv">$2,800 Avg EMV/Post</div>
              </div>

              <div className="media-kit-preview__sections">
                <div className="media-kit-preview__section">
                  <Icons.BarChart />
                  <span>Social Metrics</span>
                </div>
                <div className="media-kit-preview__section">
                  <Icons.Target />
                  <span>Athletic Stats</span>
                </div>
                <div className="media-kit-preview__section">
                  <Icons.Sparkles />
                  <span>Partnership Ideas</span>
                </div>
                <div className="media-kit-preview__section">
                  <Icons.Image />
                  <span>Posts Gallery</span>
                </div>
                <div className="media-kit-preview__section">
                  <Icons.DollarSign />
                  <span>Rate Card</span>
                </div>
              </div>

              <div className="media-kit-preview__footer">
                <Icons.FileText />
                <span>Created with JABA</span>
              </div>
            </div>

            <div className="media-kit-details">
              <h3 className="media-kit-details__title">What's Included</h3>
              <div className="media-kit-details__grid">
                <div className="media-kit-detail-card">
                  <div className="media-kit-detail-card__icon">
                    <Icons.Building />
                  </div>
                  <h4>School Branding</h4>
                  <p>Custom header with school colors, logo, and official branding</p>
                </div>

                <div className="media-kit-detail-card">
                  <div className="media-kit-detail-card__icon">
                    <Icons.Users />
                  </div>
                  <h4>Athlete Hero Section</h4>
                  <p>Professional photo, name, sport, position, and average EMV metrics</p>
                </div>

                <div className="media-kit-detail-card">
                  <div className="media-kit-detail-card__icon">
                    <Icons.BarChart />
                  </div>
                  <h4>Social Metrics Dashboard</h4>
                  <p>Followers, engagement rate, likes, comments across all platforms</p>
                </div>

                <div className="media-kit-detail-card">
                  <div className="media-kit-detail-card__icon">
                    <Icons.Target />
                  </div>
                  <h4>Athletic Statistics</h4>
                  <p>Performance stats, rankings, and achievements in grid format</p>
                </div>

                <div className="media-kit-detail-card">
                  <div className="media-kit-detail-card__icon">
                    <Icons.Sparkles />
                  </div>
                  <h4>AI Partnership Ideas</h4>
                  <p>Custom campaign concepts generated for specific brands</p>
                </div>

                <div className="media-kit-detail-card">
                  <div className="media-kit-detail-card__icon">
                    <Icons.Image />
                  </div>
                  <h4>Content Showcase</h4>
                  <p>Recent posts gallery with engagement metrics and performance data</p>
                </div>

                <div className="media-kit-detail-card">
                  <div className="media-kit-detail-card__icon">
                    <Icons.DollarSign />
                  </div>
                  <h4>Rate Card</h4>
                  <p>Pricing per deliverable: Instagram posts, stories, TikTok videos</p>
                </div>

                <div className="media-kit-detail-card">
                  <div className="media-kit-detail-card__icon">
                    <Icons.FileText />
                  </div>
                  <h4>Shareable & Exportable</h4>
                  <p>Share via link or export as PDF for offline distribution</p>
                </div>
              </div>

              <div className="media-kit-actions">
                <button className="media-kit-btn media-kit-btn--primary">
                  <Icons.Eye /> View Sample Media Kit
                </button>
                <button className="media-kit-btn media-kit-btn--secondary">
                  <Icons.Sparkles /> Create New Media Kit
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    case 'interactive-kit':
      return (
        <div className="feature-section" key="interactive-kit">
          <h2 className="feature-section__title">Interactive Media Kit</h2>
          <p className="feature-section__description">
            Build customizable, interactive media kits that brands can explore.
          </p>
          <div className="filter-section">
            <div className="filter-group">
              <label>Template Style</label>
              <select className="filter-select">
                <option>Modern Dark</option>
                <option>Clean Light</option>
                <option>Bold Colors</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Sections to Include</label>
              <select className="filter-select">
                <option>All Sections</option>
                <option>Stats Only</option>
                <option>Portfolio Only</option>
              </select>
            </div>
          </div>
          <button className="search-btn">Create Interactive Kit</button>
        </div>
      )
    case 'content-ideas':
      return (
        <div className="feature-section" key="content-ideas">
          <h2 className="feature-section__title">Content Ideas</h2>
          <p className="feature-section__description">
            AI-generated content ideas tailored to the athlete&apos;s brand and audience.
          </p>
          <div className="campaign-grid">
            {['Behind-the-scenes training day', 'Game day preparation routine', 'Fan Q&A session', 'Brand collaboration teaser'].map((idea, i) => (
              <div className="campaign-card" key={i}>
                <div className="campaign-card__header">
                  <div>
                    <p className="campaign-card__title">{idea}</p>
                    <p className="campaign-card__brand">Estimated engagement: High</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    case 'caption-ideas':
      return (
        <div className="feature-section" key="caption-ideas">
          <h2 className="feature-section__title">Caption Ideas</h2>
          <p className="feature-section__description">
            Ready-to-use caption suggestions for social media posts.
          </p>
          <div className="ai-generator">
            <div className="ai-output">
              <p className="ai-output__label">Generated Captions</p>
              <div className="ai-output__content">
                <p style={{ marginBottom: '12px' }}>&quot;Game day energy is different. Ready to leave it all on the field. &quot;</p>
                <p style={{ marginBottom: '12px' }}>&quot;Another day, another chance to be great. Let&apos;s work.&quot;</p>
                <p>&quot;Grateful for every opportunity. This journey is just beginning.&quot;</p>
              </div>
            </div>
          </div>
        </div>
      )
    case 'background-page':
      return (
        <div className="feature-section" key="background-page">
          <h2 className="feature-section__title">Athlete Background Page</h2>
          <p className="feature-section__description">
            Build a professional background page highlighting achievements, story, and values.
          </p>
          <div className="notes-section">
            <textarea
              className="notes-area"
              placeholder="Write the athlete's story, achievements, and background..."
              defaultValue="Marcus Williams is a standout wide receiver at the University of Texas, known for his explosive speed and clutch performances. Born and raised in Houston, Texas, Marcus has been passionate about football since age 5..."
            />
          </div>
        </div>
      )
    case 'showcases':
      return (
        <div className="feature-section" key="showcases">
          <h2 className="feature-section__title">Content & Social Showcases</h2>
          <p className="feature-section__description">
            Curate and display the best content and social media highlights.
          </p>
          <div className="metrics-grid">
            <div className="metric-card">
              <p className="metric-card__label">Top Post Views</p>
              <p className="metric-card__value">2.4M</p>
              <p className="metric-card__change metric-card__change--positive">+15% vs avg</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Total Shares</p>
              <p className="metric-card__value">48.2K</p>
              <p className="metric-card__change metric-card__change--positive">+23% vs avg</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Avg Engagement</p>
              <p className="metric-card__value">8.7%</p>
              <p className="metric-card__change metric-card__change--positive">+5% vs avg</p>
            </div>
          </div>
        </div>
      )
    default:
      return null
  }
}

function MetricsContent({ activeSubFeature }) {
  const chartData = [
    { label: 'Mon', height: '60%' },
    { label: 'Tue', height: '80%' },
    { label: 'Wed', height: '45%' },
    { label: 'Thu', height: '90%' },
    { label: 'Fri', height: '70%' },
    { label: 'Sat', height: '85%' },
    { label: 'Sun', height: '95%' },
  ]

  switch (activeSubFeature) {
    case 'performance':
      return (
        <div className="feature-section" key="performance">
          <h2 className="feature-section__title">Performance Metrics</h2>
          <p className="feature-section__description">
            Track overall content performance across all platforms.
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
    case 'platforms':
      return (
        <div className="feature-section" key="platforms">
          <h2 className="feature-section__title">Platform Breakdowns</h2>
          <p className="feature-section__description">
            Detailed analytics for each social media platform.
          </p>
          <div className="metrics-grid">
            <div className="metric-card">
              <p className="metric-card__label">Instagram</p>
              <p className="metric-card__value">4.2M</p>
              <p className="metric-card__change metric-card__change--positive">Followers</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">TikTok</p>
              <p className="metric-card__value">2.8M</p>
              <p className="metric-card__change metric-card__change--positive">Followers</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Twitter/X</p>
              <p className="metric-card__value">1.1M</p>
              <p className="metric-card__change metric-card__change--positive">Followers</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">YouTube</p>
              <p className="metric-card__value">856K</p>
              <p className="metric-card__change metric-card__change--positive">Subscribers</p>
            </div>
          </div>
        </div>
      )
    case 'engagement':
      return (
        <div className="feature-section" key="engagement">
          <h2 className="feature-section__title">Engagement Analytics</h2>
          <p className="feature-section__description">
            Deep dive into engagement metrics and audience interactions.
          </p>
          <div className="chart-container">
            <div className="chart-header">
              <h3 className="chart-title">Engagement by Content Type</h3>
            </div>
            <div className="chart-bars">
              <div className="chart-bar" style={{ height: '95%' }}><span className="chart-bar__label">Reels</span></div>
              <div className="chart-bar" style={{ height: '75%' }}><span className="chart-bar__label">Stories</span></div>
              <div className="chart-bar" style={{ height: '60%' }}><span className="chart-bar__label">Posts</span></div>
              <div className="chart-bar" style={{ height: '45%' }}><span className="chart-bar__label">Lives</span></div>
            </div>
          </div>
        </div>
      )
    case 'trends':
      return (
        <div className="feature-section" key="trends">
          <h2 className="feature-section__title">Trend Analysis</h2>
          <p className="feature-section__description">
            Identify trends and patterns in content performance over time.
          </p>
          <div className="campaign-grid">
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Peak Posting Time</p>
                  <p className="campaign-card__brand">Based on 90-day analysis</p>
                </div>
              </div>
              <p style={{ fontFamily: 'Anton', fontSize: '1.5rem', color: 'var(--jaba-accent)', marginTop: '12px' }}>6:00 PM - 8:00 PM</p>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Best Performing Day</p>
                  <p className="campaign-card__brand">Based on engagement rate</p>
                </div>
              </div>
              <p style={{ fontFamily: 'Anton', fontSize: '1.5rem', color: 'var(--jaba-accent)', marginTop: '12px' }}>Sunday</p>
            </div>
            <div className="campaign-card">
              <div className="campaign-card__header">
                <div>
                  <p className="campaign-card__title">Trending Hashtags</p>
                  <p className="campaign-card__brand">This week</p>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--jaba-accent)', marginTop: '12px' }}>#NIL #CollegeFootball #GameDay</p>
            </div>
          </div>
        </div>
      )
    default:
      return null
  }
}

function BrandDealsContent({ activeSubFeature }) {
  const campaigns = [
    { title: 'Summer Collection Launch', brand: 'Nike', status: 'active', progress: 75 },
    { title: 'Energy Drink Promotion', brand: 'Red Bull', status: 'pending', progress: 30 },
    { title: 'Tech Showcase', brand: 'Samsung', status: 'completed', progress: 100 },
  ]

  switch (activeSubFeature) {
    case 'campaign-planning':
      return (
        <div className="feature-section" key="campaign-planning">
          <h2 className="feature-section__title">Campaign Planning Tools</h2>
          <p className="feature-section__description">
            Plan and organize brand campaigns from concept to execution.
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
              <label>Duration</label>
              <select className="filter-select">
                <option>Select duration...</option>
                <option>1 Week</option>
                <option>1 Month</option>
                <option>3 Months</option>
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
        </div>
      )
    case 'execution':
      return (
        <div className="feature-section" key="execution">
          <h2 className="feature-section__title">Execution Tracking</h2>
          <p className="feature-section__description">
            Track campaign execution milestones and deliverables.
          </p>
          <div className="campaign-grid">
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
    case 'monitoring':
      return (
        <div className="feature-section" key="monitoring">
          <h2 className="feature-section__title">Performance Monitoring</h2>
          <p className="feature-section__description">
            Monitor campaign performance and ROI in real-time.
          </p>
          <div className="metrics-grid">
            <div className="metric-card">
              <p className="metric-card__label">Campaign Reach</p>
              <p className="metric-card__value">8.2M</p>
              <p className="metric-card__change metric-card__change--positive">+32% vs target</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Engagement Rate</p>
              <p className="metric-card__value">12.4%</p>
              <p className="metric-card__change metric-card__change--positive">+5% vs target</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Conversions</p>
              <p className="metric-card__value">24.5K</p>
              <p className="metric-card__change metric-card__change--positive">+18% vs target</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">ROI</p>
              <p className="metric-card__value">340%</p>
              <p className="metric-card__change metric-card__change--positive">Exceeds goal</p>
            </div>
          </div>
        </div>
      )
    case 'templates':
      return (
        <div className="feature-section" key="templates">
          <h2 className="feature-section__title">Campaign Templates</h2>
          <p className="feature-section__description">
            Pre-built campaign templates for quick deployment.
          </p>
          <div className="campaign-grid">
            {['Product Launch', 'Brand Ambassador', 'Social Takeover', 'Event Appearance'].map((template, i) => (
              <div className="campaign-card" key={i}>
                <div className="campaign-card__header">
                  <div>
                    <p className="campaign-card__title">{template}</p>
                    <p className="campaign-card__brand">Ready-to-use template</p>
                  </div>
                </div>
                <button className="search-btn" style={{ marginTop: '16px', padding: '10px 20px', fontSize: '0.8rem' }}>
                  Use Template
                </button>
              </div>
            ))}
          </div>
        </div>
      )
    default:
      return null
  }
}

function AIToolsContent({ activeSubFeature }) {
  const [generating, setGenerating] = useState(false)
  const [output, setOutput] = useState('')

  const generateContent = () => {
    setGenerating(true)
    setOutput('')
    setTimeout(() => {
      setGenerating(false)
      setOutput('Game day vibes hit different when you know the work you put in. Every early morning, every rep, every sacrifice led to this moment. Ready to show out for the team and everyone who believed.')
    }, 2000)
  }

  switch (activeSubFeature) {
    case 'content-gen':
      return (
        <div className="feature-section" key="content-gen">
          <h2 className="feature-section__title">AI Content Generation</h2>
          <p className="feature-section__description">
            Generate engaging content tailored to the athlete&apos;s voice and brand.
          </p>
          <div className="ai-generator">
            <div className="ai-input-area">
              <textarea
                className="ai-input"
                placeholder="Describe the content you want to create..."
                defaultValue="Create an Instagram caption for a game day post showing preparation and team spirit"
              />
              <button className="ai-generate-btn" onClick={generateContent} disabled={generating}>
                <Icons.Sparkles />
                {generating ? 'Generating...' : 'Generate Content'}
              </button>
            </div>
            <div className="ai-output">
              <p className="ai-output__label">Generated Content</p>
              <div className="ai-output__content">
                {generating ? (
                  <div className="loading">
                    <div className="loading__spinner"></div>
                    <p className="loading__text">AI is creating content...</p>
                  </div>
                ) : output ? (
                  <p>{output}</p>
                ) : (
                  <p style={{ color: 'var(--jaba-text-muted)' }}>Your generated content will appear here...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    case 'captions':
      return (
        <div className="feature-section" key="captions">
          <h2 className="feature-section__title">Automated Caption Writing</h2>
          <p className="feature-section__description">
            AI-powered caption generation for all your social media needs.
          </p>
          <div className="filter-section">
            <div className="filter-group">
              <label>Platform</label>
              <select className="filter-select">
                <option>Instagram</option>
                <option>TikTok</option>
                <option>Twitter/X</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Tone</label>
              <select className="filter-select">
                <option>Motivational</option>
                <option>Casual</option>
                <option>Professional</option>
                <option>Humorous</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Content Type</label>
              <select className="filter-select">
                <option>Game Day</option>
                <option>Training</option>
                <option>Lifestyle</option>
                <option>Sponsored</option>
              </select>
            </div>
          </div>
          <button className="search-btn">Generate Captions</button>
        </div>
      )
    case 'suggestions':
      return (
        <div className="feature-section" key="suggestions">
          <h2 className="feature-section__title">Content Suggestions</h2>
          <p className="feature-section__description">
            AI-curated content ideas based on trending topics and audience preferences.
          </p>
          <div className="campaign-grid">
            {[
              { title: 'Training Montage', desc: 'High engagement potential' },
              { title: 'Day in My Life', desc: 'Trending format' },
              { title: 'Q&A with Fans', desc: 'Community building' },
              { title: 'Pre-Game Routine', desc: 'Behind the scenes' },
            ].map((suggestion, i) => (
              <div className="campaign-card" key={i}>
                <div className="campaign-card__header">
                  <div>
                    <p className="campaign-card__title">{suggestion.title}</p>
                    <p className="campaign-card__brand">{suggestion.desc}</p>
                  </div>
                  <span className="campaign-card__status campaign-card__status--active">Suggested</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    case 'recommendations':
      return (
        <div className="feature-section" key="recommendations">
          <h2 className="feature-section__title">Smart Recommendations</h2>
          <p className="feature-section__description">
            Personalized recommendations to optimize content strategy.
          </p>
          <div className="reminder-card">
            <div className="reminder-card__icon"><Icons.TrendingUp /></div>
            <div className="reminder-card__content">
              <p className="reminder-card__title">Post more Reels</p>
              <p className="reminder-card__time">Reels get 3x more engagement than static posts</p>
            </div>
          </div>
          <div className="reminder-card">
            <div className="reminder-card__icon"><Icons.Target /></div>
            <div className="reminder-card__content">
              <p className="reminder-card__title">Optimal posting time: 6-8 PM</p>
              <p className="reminder-card__time">Your audience is most active during these hours</p>
            </div>
          </div>
          <div className="reminder-card">
            <div className="reminder-card__icon"><Icons.Sparkles /></div>
            <div className="reminder-card__content">
              <p className="reminder-card__title">Trending audio available</p>
              <p className="reminder-card__time">5 trending sounds match your content style</p>
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
    case 'financial-planning':
      return (
        <div className="feature-section" key="financial-planning">
          <h2 className="feature-section__title">Financial Planning</h2>
          <p className="feature-section__description">
            Comprehensive financial planning tools for athlete earnings and investments.
          </p>
          <div className="financial-grid">
            <div className="financial-card">
              <div className="financial-card__icon"><Icons.Wallet /></div>
              <p className="financial-card__label">Total NIL Earnings (YTD)</p>
              <p className="financial-card__value">$<span>2.4M</span></p>
            </div>
            <div className="financial-card">
              <div className="financial-card__icon"><Icons.TrendingUp /></div>
              <p className="financial-card__label">Projected Annual</p>
              <p className="financial-card__value">$<span>3.2M</span></p>
            </div>
            <div className="financial-card">
              <div className="financial-card__icon"><Icons.Target /></div>
              <p className="financial-card__label">Active Deals</p>
              <p className="financial-card__value"><span>12</span></p>
            </div>
          </div>
        </div>
      )
    case 'deal-management':
      return (
        <div className="feature-section" key="deal-management">
          <h2 className="feature-section__title">Deal Management</h2>
          <p className="feature-section__description">
            Track and manage all active and pending brand deals.
          </p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Brand</th>
                <th>Deal Value</th>
                <th>Duration</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nike</td>
                <td>$500,000</td>
                <td>2 Years</td>
                <td><span className="campaign-card__status campaign-card__status--active">Active</span></td>
              </tr>
              <tr>
                <td>Gatorade</td>
                <td>$250,000</td>
                <td>1 Year</td>
                <td><span className="campaign-card__status campaign-card__status--active">Active</span></td>
              </tr>
              <tr>
                <td>Samsung</td>
                <td>$150,000</td>
                <td>6 Months</td>
                <td><span className="campaign-card__status campaign-card__status--pending">Pending</span></td>
              </tr>
              <tr>
                <td>Red Bull</td>
                <td>$100,000</td>
                <td>1 Year</td>
                <td><span className="campaign-card__status campaign-card__status--completed">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    case 'contract-tracking':
      return (
        <div className="feature-section" key="contract-tracking">
          <h2 className="feature-section__title">Contract Tracking</h2>
          <p className="feature-section__description">
            Monitor contract milestones, deliverables, and renewal dates.
          </p>
          <div className="reminder-card">
            <div className="reminder-card__icon"><Icons.FileText /></div>
            <div className="reminder-card__content">
              <p className="reminder-card__title">Nike Contract Renewal</p>
              <p className="reminder-card__time">Due in 45 days</p>
            </div>
            <button className="reminder-card__action">Review</button>
          </div>
          <div className="reminder-card">
            <div className="reminder-card__icon"><Icons.FileText /></div>
            <div className="reminder-card__content">
              <p className="reminder-card__title">Gatorade Deliverable</p>
              <p className="reminder-card__time">3 posts remaining this quarter</p>
            </div>
            <button className="reminder-card__action">View</button>
          </div>
          <div className="reminder-card">
            <div className="reminder-card__icon"><Icons.FileText /></div>
            <div className="reminder-card__content">
              <p className="reminder-card__title">Samsung Payment</p>
              <p className="reminder-card__time">$75,000 due on Feb 15</p>
            </div>
            <button className="reminder-card__action">Details</button>
          </div>
        </div>
      )
    case 'revenue':
      return (
        <div className="feature-section" key="revenue">
          <h2 className="feature-section__title">Revenue Analytics</h2>
          <p className="feature-section__description">
            Track revenue streams and analyze financial performance.
          </p>
          <div className="metrics-grid">
            <div className="metric-card">
              <p className="metric-card__label">Q1 Revenue</p>
              <p className="metric-card__value">$580K</p>
              <p className="metric-card__change metric-card__change--positive">+22% vs Q4</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Avg Deal Size</p>
              <p className="metric-card__value">$125K</p>
              <p className="metric-card__change metric-card__change--positive">+15% YoY</p>
            </div>
            <div className="metric-card">
              <p className="metric-card__label">Pipeline Value</p>
              <p className="metric-card__value">$1.2M</p>
              <p className="metric-card__change metric-card__change--positive">4 deals</p>
            </div>
          </div>
          <div className="chart-container">
            <div className="chart-header">
              <h3 className="chart-title">Monthly Revenue</h3>
            </div>
            <div className="chart-bars">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, i) => (
                <div key={i} className="chart-bar" style={{ height: `${50 + Math.random() * 45}%` }}>
                  <span className="chart-bar__label">{month}</span>
                </div>
              ))}
            </div>
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
      case 'compliance':
        return <ComplianceContent activeSubFeature={activeSubFeature} />
      case 'relationships':
        return <RelationshipsContent activeSubFeature={activeSubFeature} />
      case 'athlete-tools':
        return <AthleteToolsContent activeSubFeature={activeSubFeature} />
      case 'metrics':
        return <MetricsContent activeSubFeature={activeSubFeature} />
      case 'brand-deals':
        return <BrandDealsContent activeSubFeature={activeSubFeature} />
      case 'ai-tools':
        return <AIToolsContent activeSubFeature={activeSubFeature} />
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
            <h1 className="header__title">Feature Overview</h1>
          </div>
          <p className="header__subtitle">
            A comprehensive view of all JABA features and capabilities in one place
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

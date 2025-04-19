import {
  SiPython,
  SiFastapi,
  SiHuggingface,
  SiOracle,
  SiPlotly,
  SiPandas,
  SiMysql,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiFlask,
  SiDjango,
  SiNumpy,
  SiRedux,
  SiFirebase
} from 'react-icons/si'


export const projects = [
  {
    slug: 'ai-chatbot',
    title: 'AI Chatbot for Customer Support',
    type: 'AI/ML',
    description: 'Smart, contextual chatbot using transformers + FastAPI backend.',
    tech: [
      { name: 'Python', icon: SiPython },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'HuggingFace', icon: SiHuggingface }
    ],
    image: '/proj.png',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    content: `
      Developed an advanced support chatbot using transformer models (BERT, DistilBERT).
      Integrated multilingual intent handling, context switching, and real-time escalation fallback.

      Deployed via FastAPI with proper rate-limiting, caching, and monitoring.
    `,
    result: 'Reduced live chat volume by 38% within 30 days.',
    link: 'https://github.com/your-org/chatbot'
  },

  {
    slug: 'hr-desktop-system',
    title: 'Desktop HR Management System',
    type: 'Desktop App',
    description: 'Cross-platform HR system with employee records and payroll.',
    tech: [
      { name: 'Python', icon: SiPython },
      { name: 'PyQt', icon: SiPython },
      { name: 'Oracle', icon: SiOracle }
    ],
    image: '/proj.png',
    video: 'https://www.youtube.com/embed/P5IsEUT5Tm0',
    content: `
      A full-featured HR desktop application built for HR admins with RBAC, attendance,
      and payroll modules. Optimized queries using Oracle stored procedures.
    `,
    result: 'Streamlined payroll across 3 departments and saved 12 hours/week.',
    link: ''
  },

  {
    slug: 'retail-dashboard',
    title: 'Retail Analytics Dashboard',
    type: 'Dashboard',
    description: 'ETL pipeline + dashboards for real-time business metrics.',
    tech: [
      { name: 'SQL', icon: SiMysql },
      { name: 'Pandas', icon: SiPandas },
      { name: 'Plotly', icon: SiPlotly }
    ],
    image: '/proj.png',
    video: 'https://www.youtube.com/embed/P5IsEUT5Tm0',
    content: `
      Live dashboards built for a 12-store retail chain to monitor sales, categories,
      and restocking predictions.

      Automated nightly ETL from MySQL into Plotly Dash dashboards.
    `,
    result: 'Increased restock accuracy by 33%, lowered deadstock by 22%.',
    link: 'https://demo-link.com/dashboard'
  },

  {
    slug: 'edtech-webapp',
    title: 'EdTech Course Platform',
    type: 'Web App',
    description: 'Full-stack platform for hosting online tech courses with quizzes and video.',
    tech: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'React', icon: SiReact }
    ],
    image: '/proj.png',
    video: '',
    content: `
      Designed and developed a full LMS web platform with course uploads, student progress tracking,
      live comments, and quiz modules.

      Role-based access for admins, instructors, and students.
    `,
    result: 'Handled 500+ students per course and achieved 99.9% uptime.',
    link: 'https://edtech-demo.com'
  },

  {
    slug: 'realtime-ai-labeler',
    title: 'Real-time AI Data Labeling Tool',
    type: 'AI Tool',
    description: 'Custom annotation tool for computer vision datasets.',
    tech: [
      { name: 'Flask', icon: SiFlask },
      { name: 'React', icon: SiReact },
      { name: 'Python', icon: SiPython },
      { name: 'Tailwind', icon: SiTailwindcss }
    ],
    image: '/proj.png',
    video: '',
    content: `
      Built for a startup labeling bounding boxes, object tracking and image segmentation tasks.

      Features: autosave, undo/redo, keyboard shortcuts, and export to YOLO/COCO format.
    `,
    result: 'Cut annotation time by 47% for the internal CV team.',
    link: ''
  },

  {
    slug: 'financial-etl-pipeline',
    title: 'Financial ETL & Data Enrichment',
    type: 'ETL Pipeline',
    description: 'Built automated ETL pipeline for financial reporting.',
    tech: [
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Python', icon: SiPython },
      { name: 'Power BI', icon: SiDjango }
    ],
    image: '/proj.png',
    video: '',
    content: `
      Created a resilient pipeline for aggregating CSV + API + Excel data into a unified data mart.

      Used Power BI for weekly C-level dashboards, including variance analysis and forecast.
    `,
    result: 'Automated 14 manual Excel workflows. Weekly reports now 3x faster.',
    link: ''
  },

  {
    slug: 'social-media-analytics',
    title: 'Social Media Analytics Platform',
    type: 'Data Viz Web App',
    description: 'Interactive frontend to explore social campaign performance.',
    tech: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'Redux', icon: SiRedux },
      { name: 'Firebase', icon: SiFirebase }
    ],
    image: '/proj.png',
    video: '',
    content: `
      Built a modern web app that visualizes impressions, engagement, and conversion KPIs
      across Instagram, Twitter, and LinkedIn.

      Data cached via Firebase. Includes user dashboard, team analytics, and campaign-level deep dives.
    `,
    result: 'Ad agency onboarded 12 clients in 4 weeks using this platform.',
    link: 'https://social-analytics-demo.com'
  }
]

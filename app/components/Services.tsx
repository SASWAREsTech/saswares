'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import {
  FaBrain,
  FaLaptopCode,
  FaTools,
  FaGlobe,
  FaDatabase,
  FaChartBar,
  FaBuilding,
  FaPlug
} from 'react-icons/fa'

// Lazy-load tilt
const Tilt = dynamic(() => import('react-parallax-tilt'), {
  ssr: false,
  loading: () => <div />,
})

const services = [
  { title: 'AI & ML Solutions', icon: FaBrain, desc: 'Custom AI/ML/DL models, training,Biomedical Signal Analysis and Feature Extraction, MlOps CICD pipelines.' },
  { title: 'Desktop Apps', icon: FaLaptopCode, desc: 'Cross-platform apps with PyQt, JavaFX, Electron.' },
  { title: 'Backend Systems', icon: FaTools, desc: 'Fast Python APIs with Flask/FastAPI and database integration.' },
  { title: 'Web Development', icon: FaGlobe, desc: 'Responsive websites with modern tech and good UX.' },
  { title: 'Database Engineering', icon: FaDatabase, desc: 'Oracle, MongoDB, MySQL, PostgreSQL, ERDs, migrations.' },
  { title: 'Data Analysis', icon: FaChartBar, desc: 'Power Bi, Python, Excel, MySql,Tableau' },
  { title: 'Management Systems', icon: FaBuilding, desc: 'Inventory, HRM, CRM — custom business tools.' },
  { title: 'API & Integration', icon: FaPlug, desc: 'Smart integrations between systems and automation tools.' }
]

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-gray-50 dark:bg-[#0b0b0b] transition-colors">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(({ icon: Icon, title, desc }, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.1}
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              className="rounded-xl will-change-transform"
            >
              <motion.div
                className="relative group rounded-xl p-6 border border-transparent dark:border-white/10 bg-white/80 dark:bg-white/5 shadow-md backdrop-blur-md overflow-hidden transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 z-[-1] blur-[80px] opacity-0 group-hover:opacity-40 transition duration-500"
                  style={{
                    background: 'radial-gradient(circle at top left, #3b82f6, #9333ea, #ef4444)'
                  }}
                />

                <Icon className="text-3xl mb-4 text-blue-600 dark:text-red-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {title}
                </h3>

                {/* Reveal on hover */}
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  {desc}
                </p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

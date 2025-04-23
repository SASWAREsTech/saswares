'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import {
  SiPython, SiJavascript, SiFastapi, SiFlask, SiPytorch, SiTensorflow,
  SiMongodb, SiOracle, SiMysql, SiGit, SiLinux, SiVscodium, SiHtml5, SiCss3,
  SiPhp, SiKeras
} from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'
import { FaJava } from 'react-icons/fa'
import type { IconType } from 'react-icons'

// Lazy load Tilt (expensive component)
const Tilt = dynamic(() => import('react-parallax-tilt'), { ssr: false })

const techGroups = [
  {
    title: 'Languages',
    color: 'from-blue-500 to-cyan-500',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'C++', icon: TbBrandCpp },
      { name: 'Java', icon: FaJava },
      { name: 'PHP', icon: SiPhp }
    ]
  },
  {
    title: 'AI & Backend',
    color: 'from-purple-500 to-pink-500',
    items: [
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Flask', icon: SiFlask },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Keras', icon: SiKeras }
    ]
  },
  {
    title: 'Databases & Tools',
    color: 'from-red-500 to-yellow-500',
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Oracle', icon: SiOracle },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Git', icon: SiGit },
      { name: 'Linux', icon: SiLinux },
      { name: 'VSCode', icon: SiVscodium },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 }
    ]
  }
]

const MotionWrapper = ({
  children,
  delay
}: {
  children: React.ReactNode
  delay: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
)

const TechCard = ({
  name,
  Icon,
  color
}: {
  name: string
  Icon: IconType
  color: string
}) => (
  <Tilt
    glareEnable
    glareMaxOpacity={0.2}
    glareColor="#ffffff"
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    transitionSpeed={500}
  >
    <motion.div
      whileHover={{ scale: 1.07 }}
      className={`group bg-gradient-to-br ${color} dark:${color.replace(
        /from-(\w+)-\d+/,
        'from-$1-400'
      ).replace(/to-(\w+)-\d+/, 'to-$1-600')} p-[2px] rounded-xl shadow-xl`}
    >
      <div className="bg-white/60 dark:bg-[#111]/90 p-5 rounded-xl flex flex-col items-center justify-center min-w-[100px] h-[110px] backdrop-blur-xl will-change-transform">
        <Icon className="text-4xl text-gray-900 dark:text-white transition-transform group-hover:scale-110" />
        <span className="text-xs text-gray-800 dark:text-white/70 mt-3">{name}</span>
      </div>
    </motion.div>
  </Tilt>
)

const TechStack = () => {
  return (
    <section
      id="tech"
      className="relative py-32 px-6 bg-gradient-to-br from-white to-gray-50 dark:from-[#0c0c0c] dark:to-[#0a0a0a] transition-colors duration-300 text-gray-900 dark:text-white overflow-hidden scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-4xl font-bold mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Tech Stack
        </motion.h2>

        <div className="space-y-20">
          {techGroups.map((group, groupIdx) => (
            <MotionWrapper key={group.title} delay={groupIdx * 0.2}>
              <div className="mb-6 text-center">
                <h3 className="text-xl font-semibold tracking-wide text-gray-800 dark:text-white">
                  {group.title}
                </h3>
                <div className="mx-auto mt-2 w-16 h-1 bg-gradient-to-r from-white/20 via-white/40 to-white/20 rounded-full" />
              </div>

              <div className="p-6 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-inner">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                  {group.items.map(({ name, icon }) => (
                    <TechCard
                      key={name}
                      name={name}
                      Icon={icon}
                      color={group.color}
                    />
                  ))}
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>

      {/* Ambient Background Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-80 h-80 top-10 left-10 bg-gradient-to-tr from-purple-500 to-pink-500 blur-[100px] opacity-10 animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bottom-[-150px] right-[-150px] bg-gradient-to-br from-blue-500 to-red-500 blur-[150px] opacity-10 animate-pulse" />
      </div>
    </section>
  )
}

export default TechStack

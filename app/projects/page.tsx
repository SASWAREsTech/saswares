'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from './projectsData'
import Tilt from 'react-parallax-tilt'

export default function ProjectsPage() {
  return (
    <main className="relative bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-[#0a0a0a] text-gray-900 dark:text-white py-32 px-6 min-h-screen overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h1
          className="text-center text-4xl font-bold mb-20 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects That Speak for Themselves
        </motion.h1>

        {/* Project Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ slug, title, description, tech, image, type, result }, i) => (
            <Link key={slug} href={`/projects/${slug}`} className="group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Tilt
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={6}
                  glareEnable
                  glareMaxOpacity={0.1}
                  scale={1.02}
                  className="rounded-2xl overflow-hidden shadow-xl bg-black/5 dark:bg-white/5 backdrop-blur border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all"
                >
                  {/* Thumbnail */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <div className="mb-2 text-xs uppercase tracking-widest text-pink-500 font-semibold">
                      {type}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-pink-500 transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-white/60 mb-4 line-clamp-3">
                      {description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 text-xs">
                      {tech.map(({ name, icon: Icon }, idx) => (
                        <span
                          key={idx}
                          className="flex items-center gap-1 px-2 py-1 bg-black/10 dark:bg-white/10 text-gray-800 dark:text-white rounded-full border border-black/10 dark:border-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition"
                        >
                          {Icon && <Icon className="text-sm" />}
                          {name}
                        </span>
                      ))}
                    </div>

                    {/* Optional Result */}
                    {result && (
                      <p className="mt-3 text-[11px] italic text-gray-500 dark:text-white/40 group-hover:text-gray-700 dark:group-hover:text-white/60 transition line-clamp-2">
                        {result}
                      </p>
                    )}
                  </div>
                </Tilt>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

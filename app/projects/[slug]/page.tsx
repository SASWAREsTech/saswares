'use client'

import { projects } from '../projectsData'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'

type Props = {
  params: { slug: string }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <main className="relative bg-black text-white min-h-screen overflow-x-hidden">
      {/* Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] top-[-100px] left-[-100px] bg-gradient-to-br from-pink-500 to-purple-600 blur-[200px] opacity-20" />
        <div className="absolute w-[300px] h-[300px] bottom-[-100px] right-[-80px] bg-gradient-to-tr from-blue-500 to-cyan-500 blur-[160px] opacity-20" />
      </div>

      {/* Header */}
      <section className="py-28 px-6 text-center">
        <motion.h1
          className="text-4xl font-bold mb-4 tracking-tight bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {project.title}
        </motion.h1>

        {project.type && (
          <p className="text-sm uppercase tracking-wide font-semibold text-pink-400">
            {project.type}
          </p>
        )}

        <p className="text-gray-400 max-w-xl mx-auto mt-3">{project.description}</p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        {/* Image */}
        <motion.div
          className="rounded-xl overflow-hidden mb-10 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Video */}
        {project.video && (
          <div className="aspect-video mb-10">
            <iframe
              src={project.video}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg border border-white/10"
            />
          </div>
        )}

        {/* Main Content */}
        <motion.div
          className="prose prose-invert max-w-none text-white/90 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          dangerouslySetInnerHTML={{ __html: project.content.replace(/\n/g, '<br/>') }}
        />

        {/* Result */}
        {project.result && (
          <p className="mt-8 text-white/70 text-sm italic border-l-4 pl-4 border-pink-500">
            💡 <span className="font-medium">{project.result}</span>
          </p>
        )}

        {/* Tech Stack */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase text-gray-400 tracking-wide">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3 mt-4">
            {project.tech.map(({ name, icon: Icon }, i) => (
              <span
                key={i}
                className="flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-sm backdrop-blur border border-white/10"
              >
                {Icon && <Icon className="text-base" />}
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Link */}
        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            className="inline-block mt-10 text-sm font-medium tracking-wide text-pink-500 hover:text-pink-400 hover:underline transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            🔗 View Live Project →
          </motion.a>
        )}
      </section>
    </main>
  )
}

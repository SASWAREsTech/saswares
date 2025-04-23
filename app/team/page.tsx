'use client'

import { useState, memo } from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { team } from './teamData'
import { motion, AnimatePresence } from 'framer-motion'

type TeamMember = {
  name: string
  role: string
  image: string
  github: string
  linkedin: string
  bio: string
  skills: string[]
  cvUrl: string
}

const TeamCard = memo(({ member, onClick }: { member: TeamMember; onClick: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.4 }}
    className="text-center group cursor-pointer"
    onClick={onClick}
  >
    <div className="relative w-[250px] h-[250px] mx-auto rounded-2xl overflow-hidden border-4 border-transparent bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 p-1">
      <div className="relative w-full h-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover rounded-2xl group-hover:scale-105 transition duration-300"
          sizes="250px"
          priority
        />
      </div>
    </div>
    <h3 className="mt-6 text-xl font-bold">{member.name}</h3>
    <p className="text-sm text-gray-600 dark:text-white/50 uppercase tracking-wider">{member.role}</p>

    <div className="flex justify-center gap-4 mt-4 text-gray-500 dark:text-white/60 text-lg">
      {member.github && (
        <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white">
          <FaGithub />
        </a>
      )}
      {member.linkedin && (
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white">
          <FaLinkedin />
        </a>
      )}
    </div>
  </motion.div>
))

const TeamModal = ({ selected, onClose }: { selected: TeamMember; onClose: () => void }) => (
  <motion.div
    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      className="relative bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] rounded-2xl p-8 max-w-2xl w-full shadow-2xl border border-white/10 text-white"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-3 right-4 text-white/70 hover:text-white text-2xl"
        onClick={onClose}
      >
        ✕
      </button>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image
          src={selected.image}
          alt={selected.name}
          width={150}
          height={150}
          className="rounded-xl object-cover"
          priority
        />
        <div>
          <h2 className="text-2xl font-bold">{selected.name}</h2>
          <p className="text-white/60">{selected.role}</p>
          <p className="mt-4 leading-relaxed">{selected.bio}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {selected.skills?.map((skill) => (
              <span
                key={skill}
                className="bg-white/10 px-3 py-1 rounded-full text-sm text-white/80"
              >
                {skill}
              </span>
            ))}
          </div>

          {selected.cvUrl && (
            <a
              href={selected.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-white text-black text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-100"
            >
              View CV
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
)

export default function TeamPage() {
  const [selected, setSelected] = useState<TeamMember | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-[#0d0d0d] dark:to-black text-gray-900 dark:text-white px-6 py-32 relative overflow-hidden transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24"
      >
        <h2 className="text-sm tracking-widest uppercase text-gray-500 dark:text-white/40">
          Meet the Team
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent mt-3">
          The Minds Behind SASWARE
        </h1>
        <p className="text-gray-600 dark:text-white/50 mt-4 text-sm max-w-xl mx-auto">
          Three engineers. One goal — crafting intelligent, scalable, and bold software solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 max-w-6xl mx-auto">
        {team.map((member, idx) => (
          <TeamCard key={member.name} member={member} onClick={() => setSelected(member)} />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <TeamModal selected={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </main>
  )
}

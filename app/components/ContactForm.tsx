'use client'

import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'

type FormData = {
  name: string
  email: string
  message: string
  service?: string
  botField?: string
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    if (data.botField) return // honeypot trap
    const res = await fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    if (res.ok) reset()
  }

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-gradient-to-br from-white to-gray-50 dark:from-[#0c0c0c] dark:to-[#0a0a0a] transition-colors duration-300 text-gray-900 dark:text-white scroll-mt-28"
    >
      {/* Background accents */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-80 h-80 top-[-100px] left-[-100px] bg-gradient-to-br from-pink-500 to-purple-500 blur-[160px] opacity-20" />
        <div className="absolute w-96 h-96 bottom-[-150px] right-[-100px] bg-gradient-to-tr from-blue-500 to-cyan-500 blur-[140px] opacity-20" />
      </div>

      <motion.h2
        className="text-center text-4xl font-bold mb-10 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 dark:text-white/60 max-w-xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Got an idea or a project in mind? We usually respond within 24 hours.
      </motion.p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto grid gap-6 bg-white/40 dark:bg-white/5 p-8 rounded-3xl border border-black/10 dark:border-white/10 backdrop-blur-md shadow-xl shadow-black/10 dark:shadow-black/20"
      >
        {/* Honeypot anti-spam */}
        <input type="hidden" {...register('botField')} />

        <div>
          <label className="block mb-1 text-sm text-gray-800 dark:text-white/80">Name</label>
          <input
            {...register('name', { required: true })}
            className="w-full px-4 py-3 rounded-lg bg-white/60 dark:bg-black/40 text-gray-900 dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          />
          {errors.name && <motion.p className="text-sm text-red-500 mt-1">Name is required</motion.p>}
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-800 dark:text-white/80">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="w-full px-4 py-3 rounded-lg bg-white/60 dark:bg-black/40 text-gray-900 dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          />
          {errors.email && <motion.p className="text-sm text-red-500 mt-1">Email is required</motion.p>}
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-800 dark:text-white/80">Message</label>
          <textarea
            rows={5}
            {...register('message', { required: true })}
            className="w-full px-4 py-3 rounded-lg bg-white/60 dark:bg-black/40 text-gray-900 dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          />
          {errors.message && <motion.p className="text-sm text-red-500 mt-1">Message is required</motion.p>}
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-800 dark:text-white/80">Service</label>
          <select
            {...register('service')}
            className="w-full px-4 py-3 rounded-lg bg-white/60 dark:bg-black/40 text-gray-900 dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          >
            <option value="">-- Select a Service --</option>
            <option>AI/ML</option>
            <option>Backend Development</option>
            <option>Web Development</option>
            <option>Desktop Applications</option>
            <option>Database Solutions</option>
            <option>Data Analysis</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-full transition-all shadow-lg"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        <AnimatePresence>
          {isSubmitSuccessful && (
            <motion.p
              className="text-green-500 text-center text-sm mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              ✅ Thanks! We'll get back to you soon.
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </section>
  )
}

export default ContactForm

import { motion } from "framer-motion"

function Contact() {
  return (
    <section className="py-20 bg-gray-950 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-6">
            Get In Touch
          </h2>

          <p className="text-lg text-gray-400 mb-8">
            Have a question or want to collaborate? Feel free to reach out!
          </p>

          <a
            href="mailto:uswaakhan03@gmail.com"
            className="inline-block bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl font-semibold transition transform hover:scale-105"
          >
            📧 Contact me at uswaakhan03@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

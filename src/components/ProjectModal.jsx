// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-gray-900 p-8 rounded-2xl max-w-2xl"
      >
        <h2 className="text-2xl font-bold mb-4">
          {project.title}
        </h2>

        <p className="text-gray-400 whitespace-pre-line">
          {project.description}
        </p>

        <button
          onClick={onClose}
          className="mt-6 bg-blue-500 px-6 py-2 rounded-lg"
        >
          Close
        </button>
      </motion.div>
    </div>
  )
}

export default ProjectModal
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from 'react-icons/fa';

const SocialMediaLinks = () => {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      address: "facebook.com/yourpage",
      color: "bg-blue-600 hover:bg-blue-700",
      borderColor: "border-blue-600",
      animation: { x: [-50, 0], opacity: [0, 1] }
    },
    {
      icon: <FaTwitter />,
      address: "twitter.com/yourhandle",
      color: "bg-blue-400 hover:bg-blue-500",
      borderColor: "border-blue-400",
      animation: { y: [-50, 0], opacity: [0, 1] }
    },
    {
      icon: <FaInstagram />,
      address: "instagram.com/yourprofile",
      color: "bg-pink-500 hover:bg-pink-600",
      borderColor: "border-pink-500",
      animation: { x: [50, 0], opacity: [0, 1] }
    },
    {
      icon: <FaLinkedinIn />,
      address: "linkedin.com/yourcompany",
      color: "bg-blue-700 hover:bg-blue-800",
      borderColor: "border-blue-700",
      animation: { y: [50, 0], opacity: [0, 1] }
    },
    {
      icon: <FaYoutube />,
      address: "https://www.youtube.com",
      color: "bg-red-600 hover:bg-red-700",
      borderColor: "border-red-600",
      animation: { scale: [0.5, 1], opacity: [0, 1] }
    }
  ];

  return (
    <div className="bg-[--bg-color]  w-full mx-auto px-6 py-12">
      <div className="flex flex-col gap-4 sm:flex-row justify-between">
        {/* Social Media Links Section */}
        <motion.div 
          className="flex flex-col space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: link.animation,
                visible: { x: 0, y: 0, scale: 1, opacity: 1 }
              }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                delay: index * 0.1,
                duration: 0.5
              }}
              className={`flex  items-center ${link.borderColor} hover:${link.color} cursor-pointer border-2 rounded-full space-x-4 group`}
            >
              <motion.a
                href={link.address}
                className={`${link.color} text-white p-3 rounded-full transition-all duration-300 relative overflow-hidden`}
                aria-label={link.address}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, 0],
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    duration: 0.5
                  }
                }}
              >
                {link.icon}
                <motion.span
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.span
                initial={{ opacity: 1, x: 0 }}
                className="text-[--text-color] transition-all duration-300 text-sm md:text-base"
              >
                {link.address}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          className="text-center md:text-right"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-[--text-color]">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-[--text-color/80%] mb-8 max-w-md md:ml-auto">
            Join the revolution. Discover how we can help bring your ideas to life.
          </p>
          <motion.a
            href="#"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 via-[--primary-color] to-teal-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              background: [
                'linear-gradient(to right, #8b5cf6, var(--primary-color), #2dd4bf)',
                'linear-gradient(to right, #7c3aed, var(--primary-color), #14b8a6)'
              ],
              transition: { duration: 0.5 }
            }}
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
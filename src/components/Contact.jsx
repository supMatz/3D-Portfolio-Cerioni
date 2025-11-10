import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

const Contact = () => {
  const socialButtons = [
    {
      icon: <FaInstagram size={30} />,
      url: "https://www.instagram.com/cerioni.mattia_/",
      color: "from-pink-500 via-purple-500 to-pink-600",
      label: "Instagram",
      hoverColor: "hover:from-pink-600 hover:via-purple-600 hover:to-pink-700"
    },
    {
      icon: <FaGithub size={30} />,
      url: "https://github.com/supMatz",
      color: "from-gray-700 via-gray-800 to-gray-900",
      label: "GitHub",
      hoverColor: "hover:from-gray-800 hover:via-gray-900 hover:to-black"
    },
  ];

  return (
    <div className="sm:my-20 min-h-[60vh] flex items-center justify-center">
      <div className="text-center md:px-20 lg:px-40 w-full">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionText} text-center mb-6`}>
            Contact
          </h2>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="mt-10 md:mt-20"
        >
          {/* Sottotitolo descrittivo */}
          <motion.p
            variants={fadeIn("up", "spring", 0.3, 0.75)}
            className="text-secondary text-md md:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Connettiti con me sui social media o esplora i miei progetti su GitHub.
            Sono sempre aperto a nuove collaborazioni e opportunità!
          </motion.p>

          {/* Griglia di bottoni social */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
            {socialButtons.map((btn, index) => (
              <motion.a
                key={index}
                href={btn.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeIn("up", "spring", 0.4 + index * 0.1, 0.75)}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br ${btn.color} ${btn.hoverColor} 
                  text-white shadow-xl hover:shadow-2xl transition-all duration-300
                  flex flex-col items-center justify-center gap-4 min-w-[140px] md:min-w-[180px]
                  border border-white/10 hover:border-white/30`}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/0 
                  group-hover:from-white/10 group-hover:to-white/5 transition-all duration-300"></div>
                
                {/* Icona */}
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  {btn.icon}
                </div>
                
                {/* Label */}
                <span className="relative z-10 text-sm md:text-base font-semibold tracking-wide">
                  {btn.label}
                </span>

                {/* Indicatore hover */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
                  bg-white group-hover:w-16 transition-all duration-300"></div>
              </motion.a>
            ))}
          </div>

          {/* Sezione email alternativa con stile bordo come Experience */}
          <motion.div
            variants={fadeIn("up", "spring", 0.6, 0.75)}
            className="mt-16 md:mt-20 max-w-3xl mx-auto"
          >
            <div className="border-4 lg:border-8 rounded-xl lg:rounded-3xl p-8 md:p-12 
              bg-gradient-to-br from-tertiary/5 to-transparent backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-quaternary mb-2">
                    Preferisci una email?
                  </h3>
                  <p className="text-secondary text-sm md:text-base lg:text-lg">
                    Scrivimi direttamente per collaborazioni o domande
                  </p>
                </div>
                <motion.a
                  href="mailto:mattia.cerioni@example.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 
                    bg-gradient-to-r from-tertiary to-quaternary rounded-full
                    text-white font-semibold text-sm md:text-base
                    shadow-lg hover:shadow-xl transition-all duration-300
                    border border-white/20 hover:border-white/40"
                >
                  <FaEnvelope size={20} />
                  <span>Invia Email</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

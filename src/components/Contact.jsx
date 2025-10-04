import { motion } from "framer-motion";
import { FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Contact = () => {
  const buttons = [
    {
      icon: <FaInstagram size={30} />, //Instagram
      url: "https://www.instagram.com/cerioni.mattia__/",
      color: "bg-gradient-to-r from-pink-500 to-purple-500",
    },
    {
      icon: <FaEnvelope size={30} />, //Gmail
      url: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRnZwFKLswVrCjxDbhwgpBlgRKVbcbkVnkWGTThkhQVqXWRWsBlcvGDSbmSxksZlczckkRL",
      color: "bg-red-500",
    },
    {
      icon: <FaGithub size={30} />, //GitHub
      url: "https://github.com/supMatz",
      color: "bg-gray-800",
    },
  ];

  return (
    <div className="flex justify-center items-center h-full">
      {/* Contenitore per il titolo e i bottoni */}
      <motion.div
        variants={textVariant()}
        className="flex flex-col items-center gap-6"
      >
        {/* Titolo */}
        <h2 className={`${styles.sectionText} text-center text-4xl font-bold text-white sm:my-20`}>
          Contact
        </h2>

        {/* Bottoni */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex gap-6"
        >
          {buttons.map((btn, index) => (
            <a
              key={index}
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full shadow-lg ${btn.color} text-white hover:scale-110 transition-transform`}
            >
              {btn.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

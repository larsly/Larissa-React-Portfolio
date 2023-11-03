import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { badges } from "../constants";
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { styles } from '../styles';

const Badges = () => {
  return (
    <div id="tech">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Some of the technology I'm familiar with
      </motion.p>
    
      <div className="flex flex-row flex-wrap justify-center mt-20 gap-10">
        {badges.map((badge) => (
          <div className="w-28 h-28" key= {badge.name}>
            <BallCanvas icon={badge.icon}/>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default SectionWrapper(Badges, "")
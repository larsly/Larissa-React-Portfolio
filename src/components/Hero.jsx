import { motion } from 'framer-motion';
import { styles } from '../styles';
import { BigBallCanvas } from './canvas';
import { ballLogo } from '../constants';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>

          <div className='sm:block hidden'>
            <h1 className={`${styles.heroHeadText} text-white`}>Larissa <span className='text-[#915eff]'>Bierly</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 text-center`}>Web Developer</p>
          </div>

        </div>
      </div>
      <BigBallCanvas />
      <div className="absolute xs:bottom-10 bottom-6 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[33px] h-[48px] rounded-3xl border-2 border-white flex justify-center items-start p-2 cursor-pointer">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white"
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero
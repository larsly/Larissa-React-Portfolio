import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  // const [form, setForm] = useState({
  //   email: '', 
  //   password: '', 
  //   firstName: '', 
  //   lastName: '',
  //   username: '',
  //   confirmPassword: '',
  // });
  const [showFields, setShowFields] = useState(false);
  // const [addUser] = useMutation(ADD_USER);
  const [loading, setLoading] = useState(false);

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   if (formState.password !== formState.confirmPassword) {
  //       alert('Password and Confirm Password must match.');
  //       return;
  //   }

  //   const mutationResponse = await addUser({
  //     variables: {
  //       email: formState.email,
  //       password: formState.password,
  //       firstName: formState.firstName,
  //       lastName: formState.lastName,
  //       username: formState.username, 
  //     },
  //   });
  //   const token = mutationResponse.data.addUser.token;
  //   Auth.login(token);
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  // const toggleShowFields = () => {
  //   setShowFields(!showFields);
  // };

  return (
    <div id="contact" className='xl:mt-12 xl:flex-row flex-col flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Want to know more?</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <div className="mt-12 flex flex-col gap-8">
          <div className='flex flex-col'>
            <p className={styles.sectionSubText}>Email: larissa.bierly@gmail.com</p>
          </div>

          <div className='flex flex-col'>
            <p className={styles.sectionSubText}>Linkedin:</p>
            {/* <p className='text-white font-medium mb-4'>https://www.linkedin.com/in/larissa-bierly-323b06302/</p> */}
          </div>

          <div className='flex flex-row sm:block justify-center'>
            <button
              type="submit"
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            >
              <a href="https://www.linkedin.com/in/larissa-bierly-323b06302/">Go!</a>
            </button>
          </div>

          <div className='flex flex-col'>
            <p className={styles.sectionSubText}>Or view my github here!</p>
          </div>

          <div className='flex flex-row sm:block justify-center'>
            <button
              type="link"
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            >
              <a href="https://github.com/larsly">larsly</a>
            </button>
          </div>

        </div>


        {/* <form
          ref={formRef}
          onSubmit={handleFormSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Username</span>
            <input
            placeholder="Name"
            name="name"
            type="text"
            id="name"
            onChange={handleChange}
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>First Name</span>
            <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            type="text"
            id="message"
            onChange={handleChange}
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          />
          </label>

          <div className='flex flex-row sm:block justify-center'>
          <button
              type="submit"
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            >
              Go!
            </button>
          </div>
        </form> */}
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
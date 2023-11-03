import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'

const ThoughtCard = ({ thought }) => {
  <VerticalTimelineElement
    contentStyle={{ backgroundColor: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={thought.createdAt}
    // iconStyle={{ background: }}
  >
    {thought.thoughtAuthor}
  </VerticalTimelineElement>
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Don't forget to leave a comment</p>
        <h2 className={styles.sectionHeadText}>Reviews</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {thoughts.map((thought) => (
          <ThoughtCard key={thought._id} thought={thought} />
        ))}
      </VerticalTimeline>
      </div>
    </>
  )
}

export default Experience
'use client'

import { useState } from 'react'
import { faqs } from '../../data'
import { FiPlus } from 'react-icons/fi'

const FAQ = () => {
  const [showAnswer, setShowAnswer] = useState([])

  const openedItems = (id) => {
    setShowAnswer((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemID) => itemID !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  return (
    <section className='px-8 py-4 md:px-[11vw]'>
      <h4 className='text-white text-lg md:text-[1.8vw] font-medium my-4'>
        Frequently Asked Questions
      </h4>
      <div className='space-y-2'>
        {faqs.map((faq) => {
          const { id, question, answer } = faq
          return (
            <div key={id}>
              <button
                type='button'
                onClick={() => openedItems(id)}
                className='flex justify-between items-center w-full text-white bg-[#2d2d2d] hover:cursor-pointer transition duration-300 hover:bg-[rgb(75,75,75)] px-6 py-5'
              >
                <span className='text-lg md:text-[2vw]'>{question}</span>
                <span
                  className={`text-3xl md:text-[3.6vw] transition duration-200 ${showAnswer.includes(id) ? '-rotate-45' : ''}`}
                >
                  <FiPlus strokeWidth={1.2} />
                </span>
              </button>
              <div
                className={`bg-[#2d2d2d] text-[18px] md:text-[2vw] text-white p-6  mt-0.5 ${showAnswer.includes(id) ? '' : 'hidden'}`}
              >
                <p>{answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ

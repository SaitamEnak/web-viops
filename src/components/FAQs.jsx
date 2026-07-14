import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const FAQS = [
  {
    question: '¿Cómo solicitar un diseño?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Velit sed ullamcorper in vel aenean. Leo leo gravida in habitasse volutpat sed ullamcorper id. Pretium mollis neque elit massa faucibus volutpat. At purus ut lacus metus pellentesque vel mi pretium sit.',
  },
  {
    question: '¿Por qué Viops en vez de un diseñador de tiempo completo?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Velit sed ullamcorper in vel aenean. Leo leo gravida in habitasse volutpat sed ullamcorper id. Pretium mollis neque elit massa faucibus volutpat. At purus ut lacus metus pellentesque vel mi pretium sit.',
  },
  {
    question: '¿Cuánto demoran las entregas?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Velit sed ullamcorper in vel aenean. Leo leo gravida in habitasse volutpat sed ullamcorper id. Pretium mollis neque elit massa faucibus volutpat. At purus ut lacus metus pellentesque vel mi pretium sit.',
  },
  {
    question: '¿Cómo es el proceso de trabajo?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Velit sed ullamcorper in vel aenean. Leo leo gravida in habitasse volutpat sed ullamcorper id. Pretium mollis neque elit massa faucibus volutpat. At purus ut lacus metus pellentesque vel mi pretium sit.',
  },
]

function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`accordion${open ? ' open' : ''}`}>
      <div className="accordion-header" onClick={() => setOpen(o => !o)}>
        <div className="accordion-title">
          <p>{question}</p>
        </div>
        <div className="accordion-icon">
          <ChevronDown size={16} />
        </div>
      </div>
      <div
        className="accordion-content"
        style={open ? { height: 'auto', padding: '16px' } : { height: '0', padding: '0 16px' }}
      >
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default function FAQs() {
  const ref = useReveal()

  return (
    <div id="faqs" className="faqs reveal" ref={ref}>
      <p className="faqs-title">FAQs</p>
      <div className="accordion-group">
        {FAQS.map((faq, i) => (
          <Accordion key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  )
}

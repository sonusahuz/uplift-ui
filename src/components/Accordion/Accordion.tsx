import React, { useState } from 'react';
import './Accordion.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

type AccordionVariant = 'default' | 'detailed' | 'underline';

type AccordionProps = {
  title: string;
  content: React.ReactNode;
  variant?: AccordionVariant;
};

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  variant = 'default',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-wrapper">
      {variant === 'detailed' ? (
        <details className="accordion-item2">
          <summary onClick={() => setIsOpen(!isOpen)}>{title}</summary>
          {isOpen && <div className="accordion-content">{content}</div>}
        </details>
      ) : variant === 'underline' ? (
        <div>
          <div className="accordion-header2" onClick={() => setIsOpen(!isOpen)}>
            <h3>{title}</h3>
            <span>
              {isOpen ? (
                <ChevronUp size={20} strokeWidth={1.5} />
              ) : (
                <ChevronDown size={20} strokeWidth={1.5} />
              )}
            </span>
          </div>
          {isOpen && <div className="accordion-content2">{content}</div>}
        </div>
      ) : (
        <div className="accordion-item1">
          <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
            <h3>{title}</h3>
            <span>{isOpen ? '-' : '+'}</span>
          </div>
          {isOpen && <div className="accordion-content">{content}</div>}
        </div>
      )}
    </div>
  );
};

export default Accordion;

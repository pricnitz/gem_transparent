// src/Accordion.js
import React, { useState } from 'react';
import '../css/style.css'
// AccordionItem component for individual sections
const AccordionItem = ({ count, title, subtitle, children, isOpen, onToggle }) => {
  return (
    <div className="accordion-container">
      <div className="accordion-item">
        <div className="accordion-header" onClick={onToggle}>
          <div className="accordion-header-left">
            <h1 className="count">{count}</h1>
            <div className="accordion-heading">
              <h2>{title}</h2>
              <h4>{subtitle}</h4>
            </div>
          </div>
          <span>{isOpen ? '-' : '+'}</span>
        </div>
        {isOpen && (
          <div className="accordion-content">
            <ul>
              {children.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

// Array of accordion items
const accordionItems = [
  {
    count: '1.',
    title: 'Carat',
    subtitle: '(Carat Weight)',
    content: [
      'Carat refers to the diamond’s weight, typically measured in carats (1 carat = 0.2 grams).',
      'While carat weight matters, it’s at least as much critical to focus on a well-cut diamond.',
      'Remember that a smaller carat weight doesn’t diminish a diamond’s brilliance but, on the contrary, can enhance it with better quality cutting.'
    ]
  },
  {
    count: '2.',
    title: 'Color',
    subtitle: '(Color Grade for colorless diamonds)',
    content: [
      'Diamond color can range from yellow/brown to colorless.',
      'Prioritize a diamond that appears white once mounted in a setting, or opt for a distinctly fancy color.',
      'The GIA color scale ranges from D (colorless) to Z (noticeable tint).',
      'The first type of purchase favors visual appeal: F, G, or even H color.',
      'The second type of purchase aims for top quality: D & E, for a better investment.'
    ]
  },
  {
    count: '3.',
    title: 'Clarity',
    subtitle: '(Clarity Grade)',
    content: [
      'The majority of diamonds have imperfections, known as inclusions or blemishes.',
      'Clarity refers to the number, size, and visibility of these imperfections.',
      'The first type of purchase is eye-clean: VS (Very Small Inclusions) grade.',
      'Excellence: VVS (Very Very Small Inclusion), IF (Internally Flawless), F (Flawless).'
    ]
  },
  {
    count: '4.',
    title: 'Cut',
    subtitle: '(Cut Grade)',
    content: [
      'Cut refers to how well a diamond is cut and polished, not the shape.',
      'Three parameters are important: proportion, polish, and symmetry.',
      'A well-proportioned diamond reflects light optimally, creating contrast with sparkle and fire.',
      'Top polish will also increase brilliance, whereas poor polish leaves apparent tiny scratches.',
      'Excellent symmetry enhances the diamond’s appeal.'
    ]
  }
];

// Accordion component
const HowtochoosdiamondAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="howtochoosdiamondAccordion">
      <div className="banner">
        <div className="howtochoosdiamondAccordion-body">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              count={item.count}
              title={item.title}
              subtitle={item.subtitle}
              isOpen={openIndex === index}
              onToggle={() => toggleItem(index)}
            >
              {item.content}
            </AccordionItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowtochoosdiamondAccordion;

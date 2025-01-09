// src/Accordion.js
import React, { useState } from 'react';
import '../css/style.css'
// AccordionItem component for individual sections
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
          <span
            className={`accordion-toggle-icon ${isOpen ? 'open' : ''}`}
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 0.455078C12.9674 0.455078 12.5357 0.872157 12.5357 1.38664C12.5357 7.56049 7.53082 12.5654 1.35697 12.5654H0.964286C0.431711 12.5654 0 12.9824 0 13.4969C0 14.0114 0.431711 14.4285 0.964286 14.4285H1.35698C7.53082 14.4285 12.5357 19.4334 12.5357 25.6072C12.5357 26.1217 12.9674 26.5388 13.5 26.5388C14.0326 26.5388 14.4643 26.1217 14.4643 25.6072C14.4643 19.4334 19.4692 14.4285 25.643 14.4285H26.0357C26.5683 14.4285 27 14.0114 27 13.4969C27 12.9824 26.5683 12.5654 26.0357 12.5654H25.643C19.4692 12.5654 14.4643 7.56049 14.4643 1.38664C14.4643 0.872157 14.0326 0.455078 13.5 0.455078Z" fill="#6A6A6A"></path>
            </svg>
          </span>
        </div>
        {/* Apply a transition to the content with a smooth effect */}
        <div
          className={`accordion-content ${isOpen ? 'open' : ''}`}
          style={{ maxHeight: isOpen ? '500px' : '0px' }}
        >
          <ul>
            {children.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
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

import React, { useState, ReactNode } from 'react';
import './Collapse.css';

type CollapseProps = {
  collapsedLabel?: string;
  expandedLabel?: string;
  children: ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({
  collapsedLabel = 'Развернуть',
  expandedLabel = 'Свернуть',
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleCollapse = () => {setIsExpanded(prev => !prev)};
  
  return (
    <div className='collapse'>
      <button className='collapse-button' onClick={toggleCollapse}>
        {isExpanded ? expandedLabel : collapsedLabel}
      </button>
      <div className={`collapse-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {children}
      </div>
    </div>
  );
}
  
export default Collapse;

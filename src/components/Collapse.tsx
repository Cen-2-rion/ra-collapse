import React, { ReactNode } from 'react';
import './Collapse.css';

type CollapseProps = {
  collapsedLabel?: string;
  expandedLabel?: string;
  children: ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

const Collapse: React.FC<CollapseProps> = ({
  collapsedLabel = 'Развернуть',
  expandedLabel = 'Свернуть',
  children,
  isExpanded,
  onToggle,
}) => {
  return (
    <div className='collapse'>
      <button className='collapse-button' onClick={onToggle}>
        {isExpanded ? expandedLabel : collapsedLabel}
      </button>
      <div className={`collapse-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;

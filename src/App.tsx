import { useState } from 'react';
import Collapse from './components/Collapse';
import './App.css';

const App = () => {
  const [expandedCollapse, setExpandedCollapse] = useState<'collapse1' | 'collapse2' | null>(null);

  const toggleCollapse = (collapse: 'collapse1' | 'collapse2') => {
    // если нажали на тот же collapse, то сворачиваем его, иначе открываем новый
    setExpandedCollapse((prev) => (prev === collapse ? null : collapse));
  }

  return (
    <div className='container'>
      <Collapse
        isExpanded={expandedCollapse === 'collapse1'}
        onToggle={() => toggleCollapse('collapse1')}
      >
        <p>Контент с дефолтными лейблами.</p>
      </Collapse>
      <Collapse
        collapsedLabel='Показать больше'
        expandedLabel='Скрыть контент'
        isExpanded={expandedCollapse === 'collapse2'}
        onToggle={() => toggleCollapse('collapse2')}
      >
        <p>
          Контент с кастомными лейблами.
        </p>
      </Collapse>
    </div>
  );
}

export default App;

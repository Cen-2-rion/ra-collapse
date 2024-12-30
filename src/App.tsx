import React, { useState } from 'react';
import Collapse from './components/Collapse';
import './App.css';

const App: React.FC = () => {
  // состояние коллапсов
  const [collapseStates, setCollapseStates] = useState({
    collapse1: false,
    collapse2: false,
  });

  // переключение состояния каждого коллапса
  const toggleCollapse = (collapse: 'collapse1' | 'collapse2') => {
    // инвертируем текущее состояние
    setCollapseStates(prevState => ({...prevState, [collapse]: !prevState[collapse]}));
  }

  // обработчик кнопки управления коллапсами
  const controlButtonHandler = () => {
    const { collapse1, collapse2 } = collapseStates;
    // инвертируем состояния для всех коллапсов
    setCollapseStates({ collapse1: !collapse1, collapse2: !collapse2 });
  }

  return (
    <div className='container'>
      <button className='control-button' onClick={controlButtonHandler}>
        Управление коллапсами
      </button>
      <Collapse
        isExpanded={collapseStates.collapse1}
        onToggle={() => toggleCollapse('collapse1')}
      >
        <p>Контент с дефолтными лейблами.</p>
      </Collapse>
      <Collapse
        collapsedLabel='Показать больше'
        expandedLabel='Скрыть контент'
        isExpanded={collapseStates.collapse2}
        onToggle={() => toggleCollapse('collapse2')}
      >
        <p>Контент с кастомными лейблами.</p>
      </Collapse>
    </div>
  );
}

export default App;

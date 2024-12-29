import Collapse from './components/Collapse';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Collapse>
        <p>Контент с дефолтными лейблами.</p>
      </Collapse>
      <Collapse collapsedLabel='Показать больше' expandedLabel='Скрыть контент'>
        <p>Контент с кастомными лейблами. Контент с кастомными лейблами. Контент с кастомными лейблами. Контент с кастомными лейблами. Контент с кастомными лейблами.</p>
      </Collapse>
    </div>
  );
}

export default App;

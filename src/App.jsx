// import data from './data.json';
// import data2 from './data2.json';
// import ProductList from './components/ProductList/ProductsList';
// import ProductList2 from './components/ProductList2/ProductsList2';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';

const savedClickLocal = () => {
  const savedClicks = window.localStorage.getItem('saved-clicks');
  return savedClicks !== null ? Number(savedClicks) : 0;
};

const savedModalState = () => {
  const savedState = window.localStorage.getItem('saved-modal');
  return savedState === 'true'; // Перетворюємо рядок у boolean
};

const App = () => {
  const [clicks, setClicks] = useState(savedClickLocal);

  const [isSideBaarOpen, setIsSideBaarOpen] = useState(savedModalState);
  const openSidebar = () => setIsSideBaarOpen(true);
  const closeSidebar = () => setIsSideBaarOpen(false);

  const [date, setDate] = useState(new Date());

  const color = clicks % 5 === 0 ? 'green' : 'grey';

  useEffect(() => {
    window.localStorage.setItem('saved-modal', isSideBaarOpen);
  }, [isSideBaarOpen]);

  useEffect(() => {
    window.localStorage.setItem('saved-clicks', clicks);
  }, [clicks]);

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  useEffect(() => {
    console.log('New date', date);
  }, [date]);

  return (
    <div>
      <h1>Effects in React</h1>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
      <button onClick={() => setDate(new Date())}>Update Date</button>
      <button onClick={openSidebar}>Open modal</button>
      {isSideBaarOpen && <Sidebar onClose={closeSidebar} />}
    </div>
  );
};

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className='items'>
         <span>Books:</span>
         <button className='addBook'>+</button>
         <button className='remBook'>-</button>
         <span className='totalBooks'>1</span>
      </div>
      <div className='items'>
         <span>Pens:</span>
         <button className='addBook'>+</button>
         <button className='remBook'>-</button>
         <span className='totalBooks'>1</span>
      </div>
      <div className='items'>
         <span>Books:</span>
         <button className='addBook'>+</button>
         <button className='remBook'>-</button>
         <span className='totalBooks'>1</span>
      </div>
      <div className='items'>
         <span>Books:</span>
         <button className='addBook'>+</button>
         <button className='remBook'>-</button>
         <span className='totalBooks'>1</span>
      </div>
    </div>
  );
}

export default App;

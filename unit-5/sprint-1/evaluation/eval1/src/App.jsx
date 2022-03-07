import { useState } from 'react';
import './App.css';

function App() {
  const [BooksCount, setBooksCount] = useState(13)
  return (
    <div>
      <div className='items'>
         <span>Books:</span>
         <button className='addBook'>+</button>
         <button className='remBook'>-</button>
         <span className='totalBooks'>{BooksCount}</span>
      </div>
      <div className='items'>
         <span>Pens:</span>
         <button className='addPen'>+</button>
         <button className='remPen'>-</button>
         <span className='totalPens'>1</span>
      </div>
      <div className='items'>
         <span>Notebooks:</span>
         <button className='addNotebook'>+</button>
         <button className='remNotebook'>-</button>
         <span className='totalNotebooks'>1</span>
      </div>
      <div className='items'>
         <span>InkPens:</span>
         <button className='addInkpen'>+</button>
         <button className='remInkpen'>-</button>
         <span className='totalInkpens'>1</span>
      </div>
      <div className='total'>1</div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {
  const [BooksCount, setBooksCount] = useState(13)
  const [PensCount, setPensCount] = useState(10)
  const [NotebooksCount, setNotebooksCount] = useState(44)

  const [TotalCount, setTotalCount] = useState(145)
  const handlingbooks = (value)=> {
    setBooksCount(BooksCount+value)
    setTotalCount(TotalCount+value)
  }
  const handlingpens = (value)=> {
    setPensCount(PensCount+value)
    setTotalCount(TotalCount+value)
  }
  const handlingNotebooks = (value) => { 
    setNotebooksCount(NotebooksCount+value)
    setTotalCount(TotalCount+value)
  }
  const hadnlingInk
  return (
    <div>
      <div className='items'>
         <span>Books:</span>
         <button className='addBook' onClick={ ()=> handlingbooks(1)}>+</button>
         <button className='remBook' onClick={()=> handlingbooks(-1)}>-</button>
         <span className='totalBooks'>{BooksCount}</span>
      </div>
      <div className='items'>
         <span>Pens:</span>
         <button className='addPen' onClick={()=> handlingpens(1)}>+</button>
         <button className='remPen' onClick={()=> handlingpens(-1)}>-</button>
         <span className='totalPens'>{PensCount}</span>
      </div>
      <div className='items'>
         <span>Notebooks:</span>
         <button className='addNotebook' onClick={() => handlingNotebooks(1)}>+</button>
         <button className='remNotebook' onClick={ ()=> handlingNotebooks(-1)}>-</button>
         <span className='totalNotebooks'>{NotebooksCount}</span>
      </div>
      <div className='items'>
         <span>InkPens:</span>
         <button className='addInkpen'>+</button>
         <button className='remInkpen'>-</button>
         <span className='totalInkpens'>1</span>
      </div>
      <div className='total'>{TotalCount}</div>
    </div>
  );
}

export default App;

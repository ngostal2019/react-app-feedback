import { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState('10')
  const [comment, setComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Number(score) <= 5 && comment.length <= 10) {
      alert(`A score of ${score} usually indicates that we did not perform well.\nPlease indicate in the comment why your experience was poor 🙂`)
      return
    }
    console.log('Form submitted!')
    setComment('')
    setScore('10')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Made With React JS</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className='DivField'>
              <h1>Provide Feedback</h1>
              <div>
                <label>Comment:</label>
                <br />
                <textarea
                  className='TextareaLabel'
                  rows='12'
                  cols='50'
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                />
              </div>
              <div>
                <label>Score: {score} ⭐</label>
                <br />
                <input
                  className='InpuLabel'
                  type='range'
                  min='0'
                  max='10'
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                />
              </div>
              <button disabled={!comment} className='Submit-btn' type='submit'>Submit</button>
            </div>
          </fieldset>
        </form>
      </header>
    </div>
  );
}

export default App;

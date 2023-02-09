import { useState } from 'react';
import './App.css';

function App() {
  const [content, setContent] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = () => {
    if (content) {
      setTodos([...todos, {content}]);
      setContent('');
    } else {
      alert ('내용을 입력해 주세요!');
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div>
      <div className='input-box'>
        <input 
          type='text'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown = {handleKeyDown}
        />
        <button onClick={handleSubmit}>추가하기</button>
      </div>

      <div>
        <label className='title-text'>Todo List</label>
      </div>

      <div className='todo-area'>
          {todos.map((todo, index) =>
            <div className='todo-box'>
              <div key={index} className='content-text'>{todo.content}</div>
            </div>
          )}
      </div>  
    </div>
  );
}

export default App;

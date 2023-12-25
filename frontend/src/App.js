import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' exact element={<NotesListPage/>}/>
          <Route path='/note/:id' exact element={<NotePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

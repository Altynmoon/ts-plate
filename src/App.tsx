import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { CategoriesPage } from './pages/CategoriesPage';
// import { Navbar } from './components/Navbar';
import { TodoPage } from './pages/TodoPage';
import { UserPage } from './pages/userPage';
// import { UsersTask } from './pages/UsersTask';
export function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
    <Route path="/todo" element={<TodoPage />} />
    <Route path="/users" element={<UserPage />} />
    <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
    </div>
  
  );
}




export default App;

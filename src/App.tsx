
import { TodoPage } from './pages/todo';

function App() {
  return (

    <div className="App">
      <TodoPage/>

    </div>
  );
}
export default App;


// import './App.css';
// import { Routes, Route } from "react-router-dom";
// import {Navbar} from "./components/Navbar";
// import {useState} from "react";
// import { TodoPage } from './pages/todo';
// import { Provider } from 'react-redux';

// function App() {
//     const [token, setToken] = useState(localStorage.getItem('idToken'))

//     return (
//         <Provider value={{ token, setToken }}>
//             <div className="App">
//                 <Navbar />

//                 <Routes>
//                     <Route path="/todo" element={<TodoPage />} />
//                     {/* <Route path="/movies/:id" element={<MoviePage />} />
//                     {/* <Route path="/rickandmorty/" element={<RickAndMortyPage />} /> */}
//                     {/* <Route path="/signin/" element={<SignInPage />} />
//                     <Route path="/counter/" element={<Counter />} />
//                     <Route path="/todo" element={<TodoPage />} />
//                     // <Route path="/shop" element={<ShopPage />} /> */}
//                 </Routes>
//             </div>
//         </Provider>
//     );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import { Blog } from "./pages/Blog/Blog";
import { EditCard } from "./pages/EditCard/EditCard";


function App() {
  return (
   
    <div className="App">
     <Routes>
      <Route path='/' element={<Blog/>} exact />
      <Route path = '/editing/:title' element={<EditCard/>}  exact />
     </Routes>
    </div>
  );
}

export default App;

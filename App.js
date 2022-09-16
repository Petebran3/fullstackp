import Navbar from "./components/Navbar"
import {Route, Routes} from  "react-router-dom"
import Restaurants from "./pages/Restaurants"
import Friends from "./pages/Friends"
import Main from "./pages/Main"

function App() {
  return (
    <>
  
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Restaurants />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/main" element={<Main />} />
      
        
      </Routes>
      
  
    
    </div>
   
  </>
    )
  }
 

export default App;

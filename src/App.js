import './App.css';
import Navbar from './component/Navbar';
import Props from './props/Props'
import Statehook from './component/hooks/Statehook'
import {Routes,Route} from 'react-router-dom'
import Home from './component/blogs/bloghome/Home';
import About from './component/blogs/blogabout/About';
import Create from './component/blogs/createblog/Create';
import Errorpage from './component/404page/Errorpage';
import BlogDetails from './component/blogs/blogdetails/BlogDetails';

function App() {
  // function add(a,b) {
    // return `${a} + ${b} = ${a+b}`
  // }
  return (
    <div className="App">

<Navbar />

<Routes >
{/*our route or link are below */}
<Route path='/' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/create' element={<Create />} />
<Route path='/:id' element={<BlogDetails />} />
<Route path='*' element={<Errorpage />} />


</Routes>
    </div>
  );
}

export default App;

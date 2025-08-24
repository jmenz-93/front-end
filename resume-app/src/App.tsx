import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation_menu';
import Career from './pages/career';
import PersonalProjects from './pages/personal_projects';

const LightDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const theme = localStorage.theme || (LightDark ? "dark" : "light");

document.documentElement.classList.toggle("dark", theme === "dark");
localStorage.theme = theme;

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <div className="container mx-auto flex-1 flex flex-col sm:px-6 md:px-8 lg:px-12 xl:px-16 sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-7xl">
          <main className="flex-1 border-x border-gray-200 shadow-xl">
               <Navbar/> 
               <Routes>
                 <Route path="/" element={<Career />} />
                 <Route path="/career" element={<Career />} />
                 <Route path="/personal_projects" element={<PersonalProjects />} />
               </Routes>
           </main>
         </div>
       </div>
    </BrowserRouter>
  );
}

export default App;

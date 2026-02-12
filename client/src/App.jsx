import Navbar from "./components/Projects/Navbar";
import Projects from "./components/Projects/Projects";
import "./index.css";


function App() {
  return (
    <><Navbar/>
      <Projects/>
         <div className="min-h-screen flex items-center justify-center">
       <h1 className="text-4xl font-bold text-red-500">
  Tailwind is FINALLY working 🎉it not working
</h1>
      </div>
    </>
  );
}

export default App;

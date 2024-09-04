import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [animate , setAnimate] = useState(false);

  const handleNavClick =()=>{
    setAnimate(true);
    setTimeout(()=>{
      navigate('/PortfolioPage')
    },1000)
  }

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center">
      <header className="w-full p-6 bg-gray-900 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-400">Vimals Portfolio</h1>
          <div>
            <Button onClick={handleNavClick} variant="blue" className={`mr-4 ${animate? 'animate-fly':'' }`}>
             Navigate
            </Button>
           
          </div>
        </nav>
      </header>

      <main className="container mx-auto flex flex-col items-center justify-center flex-grow text-center">
        <h2 className="text-4xl font-extrabold text-gray-400 mb-4">
          Welcome to My Portfolio
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Explore my work, skills, and experience. Authenticate to see more details and connect with me.
        </p>
        <Button  onClick={() => navigate('/projects')} variant="blue" className="px-6 text-gray-300 py-3">
          View Projects
        </Button>
      </main>

      <footer className="w-full p-6 bg-gray-700 shadow-md mt-auto">
        <div className="container mx-auto text-center text-gray-300">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

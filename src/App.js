
import { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import Main from './components/Main';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
   <>
{loading ? <Loading/> : <Main/>}
   </>
  );
}

export default App;

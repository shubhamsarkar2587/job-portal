import { Routes, Route } from 'react-router-dom';
import JobDetail from "./pages/JobDetail";
import NotFound from './pages/NotFound';
import SearchJob from './pages/SearchJob';

function App() {
  return (
    <div className="app w-full font-['Segoe_UI'] overflow-hidden">
      <Routes>
        <Route path="/" element={<SearchJob />}></Route>
        <Route path="/job-details" element={<JobDetail />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

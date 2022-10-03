import {Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shinobis/:id" element={<Dashboard />} />
    <Route path="*" element={<Navigate to="/" />}/>
  </Routes>
);

export default RoutesMain;


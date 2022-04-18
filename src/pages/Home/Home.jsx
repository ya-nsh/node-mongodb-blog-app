import { useLocation } from 'react-router';
import Header from '../../components/Header';
import Posts from '../../components/Posts';
import Sidebar from '../../components/Sidebar';
import Home from '../Home/Home';

export default function Homepage() {
  //   const location = useLocation();
  //   console.log(location);
  return (
    <>
      <Header />
      <div className="flex">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}

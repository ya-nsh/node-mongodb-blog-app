import Sidebar from '../../components/Sidebar';
import SinglePost from '../../components/SinglePost';

export default function Single() {
  return (
    <div className="single flex">
      <SinglePost />
      <Sidebar />
    </div>
  );
}

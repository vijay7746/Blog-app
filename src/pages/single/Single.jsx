import './single.css'
import Sidebar from "../../components/sidebar/Sidebar.jsx"
import SinglePost from '../../components/singlePost/SinglePost'
export default function Single() {
  return (
    <div className='single'>
      {/* <Post/> */}
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}

import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import HigherOrder from './components/HOC/HigherOrder';
import LikeImageHOC from './components/HOC/LikeImageHOC'
import LikePostHoc from './components/HOC/LikePostHOC';
import RenderProps from "./components/RenderProps/RenderProps"
import LikeImageRender from "./components/RenderProps/LikeImageRender"
import LikePostRender from './components/RenderProps/LikePostRender';

const HocLike1 = HigherOrder(LikeImageHOC)
const HocLike2 = HigherOrder(LikePostHoc)

function App() {
  return (
    <div>
      <h3>SOME BLOG</h3>
      <div className='buttons'>
        <LikeImage/>
        <LikePost/>
      </div>
      <div>
        <h3>HIGHER ORDER FUNCTION</h3>
        <div className='buttons'>
          <HocLike1/>
          <HocLike2/>
        </div>
      </div>
      <div>
        <h3>RENDER PROPS</h3>
        <div className='buttons'>
          <RenderProps render = {(count, increaseCount)=>(
            <LikeImageRender count = {count} increaseCount = {increaseCount} />
          )} />
          <RenderProps render = {(count, increaseCount)=>(
            <LikePostRender count = {count} increaseCount = {increaseCount} />
          )} />
        </div>
      </div>
    </div>
  );
}

export default App;

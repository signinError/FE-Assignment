import { useEffect, useState } from 'react';
import Holofy from './components/cholofy/holofy';
import HolofyMobile from './components/HolofyMobile/HolofyMobile';
import Quandrant from './components/quandrant/quandrant';

function App() {

  // get the dimensions of window
  const [dimensions, setDimensions] = useState({
    width: document.documentElement.clientWidth | document.body.clientWidth | window.innerWidth,
    height: document.documentElement.clientHeight | document.body.clientHeight | window.innerHeight
  });

  const [containerSize, setContainerSize] = useState({
    width: dimensions.width / 2,
    height: dimensions.height / 2
  })

  // state for positioning video element on drag
  const [positionClass, setPositionClass] = useState(null);
// listen for window resize and update the viewport width and height
  useEffect( () => {
    function handleWindowResize() {
      setDimensions(
        {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
        }
      )
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  });

  // listen for viewport dimension changes and update the container width and height
  useEffect(() => {
    setContainerSize(
      {
        width: dimensions.width / 2,
        height: dimensions.height / 2
      }
    );
  }, [dimensions])


  const setPositionClassFunc = (classname) => {
    setPositionClass(classname);
  }


  if (dimensions.width > 720) {
    return (
      <div className="App">
          {
            [1,2,3,4].map((item, index)=>{
              return <Quandrant key={index} qNo={item} width={containerSize.width} height={containerSize.height} setPositionClassFunc={setPositionClassFunc}></Quandrant>
            })
          }
          <Holofy positionClass={positionClass}></Holofy>
      </div>
    );
  }
  else {
    return ( <div className="App">
        <HolofyMobile width={containerSize.width} height={containerSize.height}/>
      </div>
    );
  }
}

export default App;

import React, { useContext } from 'react'
import BodyPart from '../BodyPart/BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const HorizontalScrollBar = ({data, bodyPart, setBodyPart}) => {

  // const LeftArrow = () => {
  //   const { scrollPrev } = useContext(VisibilityContext);
  //   return (
  //     <div 
  //       onClick={() => scrollPrev()} 
  //       style={{ cursor: 'pointer', marginRight: '10px' }}>
  //       <h2>Left</h2>
  //     </div>
  //   );
  // };

  // const RightArrow = () => {
  //   const { scrollNext } = useContext(VisibilityContext);
  //   return (
  //     <div 
  //       onClick={() => {
  //         if (typeof scrollNext === 'function') scrollNext();
  //         {console.log("right")}
  //       }} 
  //       style={{ cursor: 'pointer', marginRight: '10px' }}>
  //       <h2>Right</h2>
  //     </div>
  //   );
  // };

  return (
    <div style={{margin:'5% 10%', border:'solid 4px #ffa9a9'}}>
    <div className='d-flex align-items-center mx-2' style={{ overflowX: 'auto', whiteSpace: 'nowrap', msOverflowStyle:'none' }}>
    <ScrollMenu >
      {data.map( (item, index) => {
        return <div 
        key = {item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        className='m-4'>
          
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </div>
      })}
    </ScrollMenu>
    </div>
    {/* <div className='d-flex' style={{ justifyContent: 'space-between', margin:'0% 10%'}}>
    <LeftArrow />
      <RightArrow />
    </div> */}
    </div>
  )
}

export default HorizontalScrollBar

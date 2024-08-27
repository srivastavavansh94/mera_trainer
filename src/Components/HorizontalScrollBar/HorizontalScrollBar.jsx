import React, { useContext } from 'react'
import BodyPart from '../BodyPart/BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import ExerciseCard from '../ExerciseCard/ExerciseCard'

const HorizontalScrollBar = ({data, bodyPart, setBodyPart, isBodyParts, setSearch}) => {


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
          
          {isBodyParts ? 
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} setSearch={setSearch} />
          : <ExerciseCard exercise={item} />}
        </div>
      })}
    </ScrollMenu>
    </div>
    </div>
  )
}

export default HorizontalScrollBar

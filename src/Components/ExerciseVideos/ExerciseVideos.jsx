import React from 'react'

const ExerciseVideos = ({ exerciseDetailVideo, name }) => {
  // console.log(exerciseDetailVideo);
  
  return (
    <div className='m-4'>
      <h3 className='ms-lg-4 mt-5'>Watch <span style={{color:'red', textTransform:'capitalize'}}>{name}</span> related Videos</h3>
      <div className='d-flex flex-lg-row flex-column justify-content-center align-items-center m-md-4' style={{overflowX:'hidden'}}>
        {exerciseDetailVideo.slice(0,4).map((item, index) => (
          <div className='m-sm-2' style={{border:'4px solid #ffa9a9', marginTop:'8%', height:'30 0px', width:'260px'}}>
            <a key={index} 
              href={`https://youtube.com/watch?v=${item.video.videoId}`}
              target='_blank'
              style={{textDecoration:'none', color:'#000'}}>
              <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{width:'250px', height:'160px'}} />
              <h5>{item.video.title}</h5>
              <p>{item.video.channelName}</p> 
            </a>
            

          </div>
        ))}
      </div>
    </div>
  )
}

export default ExerciseVideos

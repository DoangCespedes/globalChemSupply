import ReactPlayer from 'react-player';


const MediaPlayer = () => {
  return (
    <>
      <br/>
        <div className='container text-center text-white'>
          <div className='container'>
            <h2>Watch Videos in Action</h2>
          </div>
          <p>Discover how our team of experts transforms damage into perfection, restoring the beauty and performance of each car. We also invite you to follow us on  our YouTube channel to stay updated on our latest updates.</p>
            <div className="row text-black justify-content-around mt-4">  
              <ReactPlayer url='https://www.youtube.com/watch?v=3LWpmbcvjo0'/> 
            </div>
            <div className="row text-black justify-content-around mt-4">
              <ReactPlayer url='https://www.youtube.com/watch?v=de9GRXLVdLk'/>  
            </div>
          <br/>
        </div>
        
        
    </>
  )
}

export default MediaPlayer
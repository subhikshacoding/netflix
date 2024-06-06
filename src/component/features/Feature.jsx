import React from 'react';
import './Feature.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import image from '../features/image.png';

export const Feature = ({ type }) => {
  return (
    <div className='feature'>
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option value="" disabled selected>Select Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img className="featureimage" src="https://dtnext-prod.s3.ap-south-1.amazonaws.com/h-upload/2024/03/08/750x450_807291-untitleddesign26.webp" alt='' />
      <div className="info">
        <img className='infoimg' src={image} alt='' />
        <span className='desc'>
          officia, exercitationem minus aut delectus odio assumenda consequatur distinctio at amet! <br />
          Architecto odio quisquam voluptas facere est obcaecati corrupti, ad itaque blanditiis<br />
          aliquam accusamus natus perferendis aut asperiores rem enim pariatur deserunt id quas<br />
          modi velit harum voluptate.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

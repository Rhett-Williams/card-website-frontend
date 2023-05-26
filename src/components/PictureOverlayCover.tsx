import React from 'react';
import defaultImage from '../assets/defaultImage.png';

type Props = {
    image: string
}
const PictureOverlayCover: React.FC<Props> = ({image}) => {
  return (
    <div className="background-div">
      <div className="overlay">
         <img src={image !== '' ? image : defaultImage} alt="Overlay Image" className="overlay-image" />
      </div>
    </div>
  );
};

export default PictureOverlayCover;
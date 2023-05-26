import React from 'react';

type Props = {
    image: string
}
const PictureOverlayCover: React.FC<Props> = ({image}) => {
  return (
    <div className="background-div">
      {image !== '' &&<div className="overlay">
         <img src={image} alt="Overlay Image" className="overlay-image" />
      </div>}
    </div>
  );
};

export default PictureOverlayCover;
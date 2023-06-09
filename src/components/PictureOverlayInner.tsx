import React from 'react';
import defaultImage from '../assets/defaultImage.png';

type Props = {
    image: string
    text: string
    onChange: (value: string) => void
}

const PictureOverlayInner = ({image, text, onChange}: Props) => {
  return (
    <div className="picture-overlay-inner">
      <div className="inner-container">
      <img src={image !== '' ? image : defaultImage} alt="Overlay Image" className="inner-image" /> : <div className='inner-image'/>
        <textarea placeholder='Write a poem or message here or generate one based on the filters below. Or click surprise me for a completely random poem.' className="inner-text-input" value={text} onChange={(e) => onChange(e.target.value)}/>
      </div>
    </div>
  );
};

export default PictureOverlayInner;
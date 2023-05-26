import React from 'react';

type Props = {
    image: string
    text: string
    onChange: (value: string) => void
}

const PictureOverlayInner = ({image, text, onChange}: Props) => {
  return (
    <div className="picture-overlay-inner">
      <div className="inner-container">
        <img src={image} alt="Overlay Image" className="inner-image" />
        <textarea className="inner-text-input" value={text} onChange={(e) => onChange(e.target.value)}/>
      </div>
    </div>
  );
};

export default PictureOverlayInner;
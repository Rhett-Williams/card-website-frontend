import React, { useEffect, useState } from 'react';
import PictureOverlayInner from '../PictureOverlayInner';

type Props = {
    innerImage: string
    innerText: string
    setInnerText: (value: string) => void
    onGenerate: () => void
    handleSurpriseMe: () => void
    innerImagePrompt: string
    setInnerImagePrompt: (value: string) => void
}

const Inner: React.FC<Props> = ({innerImage, innerText, setInnerText, onGenerate, handleSurpriseMe, innerImagePrompt, setInnerImagePrompt}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
      return () => {
        setIsVisible(false);
      };
    }, []);
  
    return (
      <div
        className={`fade-in-right ${isVisible ? 'visible' : 'hidden'}`}
        onAnimationEnd={() => setIsVisible(false)}
      >
        <PictureOverlayInner image={innerImage} text={innerText} onChange={setInnerText}/>
        <div className="cover-form-container">
        <div className="cover-form-prompt">
          <span>Image prompt:</span>
          <button className="cover-form-surprise-button" onClick={handleSurpriseMe}>Surprise Me</button>
        </div>
        <input type="text" className="text-input" value={innerImagePrompt} onChange={(e) => setInnerImagePrompt(e.target.value)}/>
        <button className="generate-button" onClick={onGenerate}>Generate</button>
      </div>
      </div>
    );
};

export default Inner;
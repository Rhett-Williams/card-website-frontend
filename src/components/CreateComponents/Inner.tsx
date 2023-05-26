import React, { useEffect, useState } from "react";
import PictureOverlayInner from "../PictureOverlayInner";
import ReactDropdown from "react-dropdown";

type Props = {
  innerImage: string;
  innerText: string;
  setInnerText: (value: string) => void;
  onGenerate: () => void;
  handleSurpriseMe: () => void;
  innerImagePrompt: string;
  setInnerImagePrompt: (value: string) => void;
};

const Inner: React.FC<Props> = ({
  innerImage,
  innerText,
  setInnerText,
  onGenerate,
  handleSurpriseMe,
  innerImagePrompt,
  setInnerImagePrompt,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [option, setOption] = useState<any>('one')

  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, []);

  const options = [
    'one', 'two', 'three'
  ];

  const defaultOption = options[0];

  return (
    <div
      className={`fade-in-right ${isVisible ? "visible" : "hidden"}`}
      onAnimationEnd={() => setIsVisible(false)}
    >
      <PictureOverlayInner
        image={innerImage}
        text={innerText}
        onChange={setInnerText}
      />
      <div className="inner-form-container">
        <div className="inner-form-sub-container">
          <div className="cover-form-prompt">
            <span>Image prompt:</span>
            <button
              className="cover-form-surprise-button"
              onClick={handleSurpriseMe}
            >
              Surprise Me
            </button>
          </div>
          <input
            type="text"
            className="text-input"
            value={innerImagePrompt}
            onChange={(e) => setInnerImagePrompt(e.target.value)}
          />
          <button className="generate-button" onClick={onGenerate}>
            Generate
          </button>
        </div>
        <div className="inner-form-sub-container">
        <div className="cover-form-prompt" style={{marginBottom: '10px'}}>
            <span>Poem prompt:</span>
            <button
              className="cover-form-surprise-button"
              onClick={handleSurpriseMe}
            >
              Surprise Me
            </button>
          </div>
          <ReactDropdown className='dropdown' arrowClassName='dropdown-option' options={options} onChange={setOption} value={defaultOption} placeholder="Select an option" />
          <ReactDropdown className='dropdown' arrowClassName='dropdown-option' options={options} onChange={setOption} value={defaultOption} placeholder="Select an option" />
          <ReactDropdown className='dropdown' arrowClassName='dropdown-option' options={options} onChange={setOption} value={defaultOption} placeholder="Select an option" />
          <input
            type="text"
            className="text-input"
            value={innerImagePrompt}
            onChange={(e) => setInnerImagePrompt(e.target.value)}
          />
          <button className="generate-button" onClick={onGenerate}>
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inner;

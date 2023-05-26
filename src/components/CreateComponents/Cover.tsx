import React, { useEffect, useState } from "react";
import PictureOverlay from "../PictureOverlayCover";

type Props = {
    prompt: string
    setPrompt: (value: string) => void
    onGenerate: () => void
    coverImage: string
    handleSurpriseMe: () => void
}

const Cover: React.FC<Props> = ({prompt, setPrompt, onGenerate, coverImage, handleSurpriseMe}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <div
      className={`fade-in-right ${isVisible ? "visible" : "hidden"}`}
      onAnimationEnd={() => setIsVisible(false)}
    >
      <PictureOverlay image={coverImage} />
      <div className="cover-form-container">
        <div className="cover-form-prompt">
          <span>Image prompt:</span>
          <button className="cover-form-surprise-button" onClick={handleSurpriseMe}>Surprise Me</button>
        </div>
        <input type="text" className="text-input" value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
        <button className="generate-button" onClick={onGenerate}>Generate</button>
      </div>
    </div>
  );
};

export default Cover;

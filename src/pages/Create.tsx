import React, { useState } from 'react';
import Cover from '../components/CreateComponents/Cover';
import Inner from '../components/CreateComponents/Inner';
import Address from '../components/CreateComponents/Address';

const Create: React.FC = () => {
    const [currentStage, setCurrentStage] = useState<'Cover' | "Inner" | "Address">('Cover')
    const [prompt, setPrompt] = useState('')
    const [coverImage, setConverImage] = useState('')
    const [innerImagePrompt, setInnerImagePrompt] = useState('')
    const [innerImage, setInnerImage] = useState('')
    const [innerText, setInnerText] = useState('')

    const renderStage = () => {
        switch(currentStage){
            case 'Cover': return <Cover onGenerate={onGenerate} handleSurpriseMe={onSurpriseMe} prompt={prompt} setPrompt={setPrompt} coverImage={coverImage}/>;
            case 'Inner': return <Inner onGenerate={onGenerate} handleSurpriseMe={onSurpriseMe} innerImage={innerImage} innerText={innerText} setInnerText={setInnerText} setInnerImagePrompt={setInnerImagePrompt} innerImagePrompt={innerImagePrompt}/>
            case 'Address': return <Address/>
        }
    }

    const onGenerate = async () => {

    }

    const onSurpriseMe = async () => {
        
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '70%', flexDirection: 'column', alignItems: 'center', margin: '0 auto'}}>
            <div style={{display: 'flex', width: '30%', minWidth: '400px', justifyContent: 'space-between', marginBottom: '20px', marginTop: '30px'}}>
                <div className={currentStage === 'Cover' ? 'create-button-selected' : 'create-button'} onClick={() => setCurrentStage('Cover')} >Cover</div>
                <div className={currentStage === 'Inner' ? 'create-button-selected' : 'create-button'}  onClick={() => setCurrentStage('Inner')} >Inner</div>
                <div className={currentStage === 'Address' ? 'create-button-selected' : 'create-button'}  onClick={() => setCurrentStage('Address')} >Address</div>
            </div>
            {renderStage()}
            <button className="generate-button" style={{width: '70%', marginTop: '50px', marginBottom: '50px'}} onClick={onGenerate}>Purcahse your card!</button>
        </div>
    );
};

export default Create;
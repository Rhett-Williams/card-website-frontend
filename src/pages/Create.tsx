import React, { useState } from 'react';
import Cover from '../components/CreateComponents/Cover';
import Inner from '../components/CreateComponents/Inner';
import Address from '../components/CreateComponents/Address';

const Create: React.FC = () => {
    const [currentStage, setCurrentStage] = useState<'Cover' | "Inner" | "Address">('Cover')

    const renderStage = () => {
        switch(currentStage){
            case 'Cover': return <Cover/>;
            case 'Inner': return <Inner/>;
            case 'Address': return <Address/>;
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '70%', flexDirection: 'column', alignItems: 'center', margin: '0 auto', marginTop: '100px'}}>
            <div style={{display: 'flex'}}>
                <div>Cover</div>
                <div>Inner</div>
                <div>Address</div>
            </div>
            {renderStage()}
            <h1>Create Page!</h1>
            <p>This is a basic React hCreate.</p>
        </div>
    );
};

export default Create;
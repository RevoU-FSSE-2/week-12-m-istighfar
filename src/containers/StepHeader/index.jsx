/* eslint-disable react/prop-types */

import { Steps } from 'antd';

const { Step } = Steps;

const StepHeader = ({ titles, currentStep }) => {
    return (
        <Steps current={currentStep} className='steps' direction='horizontal'>
            {titles.map((title, index) => (
                <Step key={index} title={title} />
            ))}
        </Steps>
    );
};

export default StepHeader;

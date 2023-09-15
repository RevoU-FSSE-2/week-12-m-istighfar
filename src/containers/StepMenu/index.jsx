/* eslint-disable react/prop-types */

import { Menu } from 'antd';

const StepMenu = ({ titles, currentStep, validSteps, handleMenuClick }) => {
    return (
        <Menu mode='vertical' selectedKeys={[`${currentStep}`]} className='menu'>
            {titles.map((title, index) => (
                <Menu.Item
                    key={index}
                    onClick={() => handleMenuClick(index)}
                    disabled={!validSteps[index]}
                    className='menu-item'
                >
                    {title}
                </Menu.Item>
            ))}
        </Menu>
    );
};

export default StepMenu;

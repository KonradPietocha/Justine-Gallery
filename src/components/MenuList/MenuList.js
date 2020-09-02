import React from 'react';
//component
import MenuButton from '../MenuButton/MenuButton.js';
//style
import './MenuList.css';

function MenuList(props) {
    //props***************************************
    const {
        list,
        menuSwitch,
        mobileSwitch,
        openGalleryAction,
        sliderOpenAction,
        aboutOpenAction,
        contactOpenAction
    } = props;

    return (
        <>
            {mobileSwitch ?
                <div className='mobile-menu'>
                    <div className='mobile-menu1' />
                    <div className='mobile-menu2' />
                </div>
                :
                <div className="menu-list">
                    {list.map((item, key) => (
                        <div
                            key={key}
                            style={
                                menuSwitch === item ?
                                    { paddingTop: "10px" }
                                    : null
                            }
                        >
                            <MenuButton
                                item={item}
                                number={key}
                                openGalleryAction={openGalleryAction}
                                sliderOpenAction={sliderOpenAction}
                                aboutOpenAction={aboutOpenAction}
                                contactOpenAction={contactOpenAction}
                            />
                        </div>
                    ))}
                </div>
            }
        </>
    );
}

export default MenuList;

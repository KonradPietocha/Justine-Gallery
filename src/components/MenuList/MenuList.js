import React from 'react';
//component
import MenuButton from '../MenuButton/MenuButton.js';
//style
import './MenuList.css';

function MenuList(props) {
    //props***************************************
    const {
        dehazer,
        list,
        menuSwitch,
        mobileSwitch,
        openGalleryAction,
        sliderOpenAction,
        aboutOpenAction,
        contactOpenAction,
        dehazeAction
    } = props;

    return (
        <>
            {mobileSwitch ?
                <div className='mobile-menu'>
                    {!dehazer ?
                        <div onClick={() => dehazeAction()}>
                            <div className='dehaze-menu1' />
                            <div className='dehaze-menu2' />
                        </div>
                        :
                        <div className="mobile-menu-list">
                            {list.map((item, key) => (
                                <div key={key}>
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

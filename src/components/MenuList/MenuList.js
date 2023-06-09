import React from 'react';
import { MENU_SECTION_NAMES, MOBILE_MENU } from '../../redux/constant.js';
//component
import MenuButton from '../MenuButton/MenuButton.js';
//style
import './menuList.css';

function MenuList(props) {
    //props***************************************
    const {
        globalState,
        dispatchAction
    } = props;
    const menuNamesList = Object.values(MENU_SECTION_NAMES).map(SECTION => SECTION.NAME);

    return (
        <>
            {globalState.isMobileModeOpen ?
                <div className='mobile-menu'>
                    {!globalState.isMobileMenuOpen ?
                        <div onClick={() => dispatchAction({type: MOBILE_MENU.OPEN})}>
                            <div className='dehaze-menu1' />
                            <div className='dehaze-menu2' />
                        </div>
                        :
                        <div className="mobile-menu-list">
                            {menuNamesList.map((sectionName, key) => (
                                <div key={key}>
                                    <MenuButton
                                        buttonName={sectionName}
                                        globalState={globalState}
                                        dispatchAction={(actionType) => dispatchAction({type: actionType})}
                                    />
                                </div>
                            ))}
                        </div>
                    }
                </div>
                :
                <div className="menu-list">
                    {menuNamesList.map((sectionName, key) => (
                        <div key={key}>
                            <MenuButton
                                buttonName={sectionName}
                                globalState={globalState}
                                dispatchAction={(actionType) => dispatchAction({type: actionType})}
                            />
                        </div>
                    ))}
                </div>
            }
        </>
    );
}

export default MenuList;

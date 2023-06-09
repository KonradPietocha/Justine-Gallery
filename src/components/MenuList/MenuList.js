import React from 'react';
//component
import MenuButton from '../MenuButton/MenuButton.js';
//style
import './menuList.css';

function MenuList(props) {
    //props***************************************
    const {
        list,
        globalState,
        dispatchAction
    } = props;

    return (
        <>
            {globalState.isMobileModeOpen ?
                <div className='mobile-menu'>
                    {!globalState.isMobileMenuOpen ?
                        <div onClick={() => dispatchAction({type: "dehaze"})}>
                            <div className='dehaze-menu1' />
                            <div className='dehaze-menu2' />
                        </div>
                        :
                        <div className="mobile-menu-list">
                            {list.map((item, key) => (
                                <div key={key}>
                                    <MenuButton
                                        item={item}
                                        globalState={globalState}
                                        number={key}
                                        dispatchAction={(actionType) => dispatchAction({type: actionType})}
                                    />
                                </div>
                            ))}
                        </div>
                    }
                </div>
                :
                <div className="menu-list">
                    {list.map((item, key) => (
                        <div key={key}>
                            <MenuButton
                                item={item}
                                globalState={globalState}
                                number={key}
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

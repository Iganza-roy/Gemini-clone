// import React from 'react';
import { assets } from '../../assets/assets';
import { useContext, useState } from 'react';
import './Sidebar.css';
import { Context } from '../../context/context';

const SideBar = () => {
  const [expanded, setExpanded] = useState(false);
  const { onSent, previousPrompts, setRecentPrompts } = useContext(Context);

  return (
    <div className='sidebar'>
      <div className='top'>
        <img
          onClick={() => setExpanded((prev) => !prev)}
          className='menu'
          src={assets.menu_icon}
          alt='menu'
        />
        <div className='new-chat'>
          <img src={assets.plus_icon} alt='New chat' />
          {expanded ? <p>New Chat</p> : null}
        </div>
        {expanded ? (
          <div className='recent'>
            <p className='recent-title'>Recent</p>
            {previousPrompts.map((item, index) => {
              return (
                <div key={index} className='recent-entry'>
                  <img src={assets.message_icon} alt='chat' />
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className='bottom'>
        <div className='bottom-item recent-entry'>
          <img src={assets.question_icon} alt='question' />
          {expanded ? <p>Help</p> : null}
        </div>
        <div className='bottom-item recent-entry'>
          <img src={assets.history_icon} alt='question' />
          {expanded ? <p>Activity</p> : null}
        </div>
        <div className='bottom-item recent-entry'>
          <img src={assets.setting_icon} alt='question' />
          {expanded ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

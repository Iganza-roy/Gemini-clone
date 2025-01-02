// import React from 'react';
import { assets } from '../../assets/assets';
import { useState } from 'react';
import './Sidebar.css';

const SideBar = () => {
  const [expanded, setExpanded] = useState(false);

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
            <div className='recent-entry'>
              <img src={assets.message_icon} alt='chat' />
              <p>What is react ...</p>
            </div>
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

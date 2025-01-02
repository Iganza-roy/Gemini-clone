import './main.css';
import assets from '../../assets';

const Main = () => {
  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt='user' />
      </div>
    </div>
  );
};

export default Main;

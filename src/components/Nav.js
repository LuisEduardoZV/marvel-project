import logo from '../assets/marvel-logo.png';

import { useNavigate } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate();

    const onClickLogo = () => {
        navigate(`/`);
    }

    return(
        <div className='flex w-full bg-gray-nav justify-center items-center'>
            <img src={logo} alt="Marvel logo" className='w-36 h-20 hover:cursor-pointer' onClick={onClickLogo} />
        </div>
    );
}

export default Nav;
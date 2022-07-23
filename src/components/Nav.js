import logo from '../assets/marvel-logo.png';

const Nav = () => {
    return(
        <div className='flex w-full bg-gray-nav justify-center items-center'>
            <img src={logo} alt="Marvel logo" className='w-36 h-20' />
        </div>
    );
}

export default Nav;
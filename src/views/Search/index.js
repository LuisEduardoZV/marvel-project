import {useParams} from 'react-router-dom';
import {useFetchSearchByOptionQuery} from '../../api/marvelApi';

import logo from '../../assets/marvel-logo.png'

const Search = () => {

    const {name, option} = useParams();

    const {data, error, isLoading, isFetching, isSuccess} = useFetchSearchByOptionQuery(name);

    console.log(data);

    return(
        <div className='flex flex-col w-full h-full bg-white-gray'>
            <div className='flex w-full bg-gray-nav justify-center items-center'>
                <img src={logo} alt="Marvel logo" className='w-36 h-20' />
            </div>
            <div className='flex flex-row w-full h-full py-20 px-24 font-rajdhani'>
                <div className='flex w-2/5 flex-col h-full'>
                    <h2 className='font-bold text-black text-5xl mb-12 text-left'>{name}</h2>
                    <img src='' alt={`${name}`} className='' />
                </div>
                <div className='flex w-3/5 flex-col justify-start items-start text-left'>
                    <p className=' text-2xl mt-28'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className='flex my-14 flex-col w-full h-full text-lg'>
                        <h3 className='font-bold text-xl'>Comics</h3>
                        <div className='flex flex-row w-full mt-3'>
                            <p className='mr-16'>Comic 1</p>
                            <p className='mr-16'>Comic 2</p>
                            <p className='mr-16'>Comic 3</p>
                            <p className='font-bold border-b-2 border-marvel-vino-80'>More...</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-full h-full text-lg'>
                        <h3 className='font-bold text-xl'>Series</h3>
                        <div className='flex flex-row w-full mt-3'>
                            <p className='mr-16'>Serie 1</p>
                            <p className='mr-16'>Serie 2</p>
                            <p className='mr-16'>Serie 3</p>
                            <p className='font-bold border-b-2 border-marvel-vino-80'>More...</p>
                        </div>
                    </div>
                    <div className='flex my-14 flex-col w-full h-full text-lg'>
                        <h3 className='font-bold text-xl'>Stories</h3>
                        <div className='flex flex-row w-full mt-3'>
                            <p className='mr-16'>Storie 1</p>
                            <p className='mr-16'>Storie 2</p>
                            <p className='mr-16'>Storie 3</p>
                            <p className='font-bold border-b-2 border-marvel-vino-80'>More...</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-full h-full text-lg'>
                        <h3 className='font-bold text-xl'>Events</h3>
                        <div className='flex flex-row w-full mt-3'>
                            <p className='mr-16'>Event 1</p>
                            <p className='mr-16'>Event 2</p>
                            <p className='mr-16'>Event 3</p>
                            <p className='font-bold border-b-2 border-marvel-vino-80'>More...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
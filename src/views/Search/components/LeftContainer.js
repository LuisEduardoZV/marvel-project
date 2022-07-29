import notFoundImage from '../../../assets/image_not_available.jpg';

const LeftContainer = ({datos, image, option}) => {

    const setTitle = () => {
        if(option === 'characters') return datos?.name;
        else if(option === 'comics' || option === 'events' || option === 'series' || option === 'stories') return datos?.title;
        else if(option === 'creators') return datos?.fullName;
    }

    const capitalizarPrimeraLetra = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1,str?.length-1);
    }

    const getImage = () => {
        if(image === null || image === undefined) return notFoundImage;
        else return `${image?.path}.${image?.extension}`;
    }

    return(
        <div className='flex w-2/5 flex-col h-full mr-2'>
            <h2 className='font-bold text-black text-5xl mb-2 text-left'>{setTitle()}</h2>
            <h4 className='text-black text-sm mb-10 text-left'>{capitalizarPrimeraLetra(option)}</h4>
            <img src={getImage()} alt={setTitle()} className='w-4/6' />
        </div>
    );
}

export default LeftContainer;
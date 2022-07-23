const LeftContainer = ({datos, image, option}) => {

    const setTitle = () => {
        if(option === 'characters') return datos?.name;
        else if(option === 'comics') return datos?.title;
    }

    return(
        <div className='flex w-2/5 flex-col h-full'>
            <h2 className='font-bold text-black text-5xl mb-12 text-left'>{setTitle()}</h2>
            <img src={`${image?.path}.${image?.extension}`} alt={`${datos?.name}`} className='w-5/6' />
        </div>
    );
}

export default LeftContainer;
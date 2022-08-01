const TitleContainer = ({ datos, option }) => {

    const setTitle = () => {
        if (option === 'characters') return datos?.name;
        else if (option === 'comics' || option === 'events' || option === 'series' || option === 'stories') return datos?.title;
        else if (option === 'creators') return datos?.fullName;
    }

    const capitalizarPrimeraLetra = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1, str?.length - 1);
    }

    return (
        <div>
            <h2 className='font-bold text-black 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl 2xl:mb-2 xl:mb-2 lg:mb-2 md:mb-2  sm:mb-0 text-left'>{setTitle()}</h2>
            <h4 className='text-black text-sm mb-9 text-left'>{capitalizarPrimeraLetra(option)}</h4>
        </div>
    );
}

export default TitleContainer;
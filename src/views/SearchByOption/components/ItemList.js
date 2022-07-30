import imageNotFound from '../../../assets/image_not_available.jpg';

const ItemList = ({ datos, option, onClickItem }) => {

    const getItemTitle = (item) => {
        if (option === 'characters') return item?.name;
        else if (option === 'creators') return item?.fullName;
        else return item?.title;
    }

    const getItemImage = (item) => {
        if (item === null || item === undefined) return imageNotFound;
        else return `${item?.path}.${item?.extension}`;
    }

    const getItemDescription = (item) => {
        if (item?.description === '' || item?.description === null || item?.description === undefined)
            return "No description available.";
        else return item?.description?.slice(0, item?.description.indexOf('.') + 1);
    }

    return (
        <div className="flex flex-row my-7 mx-7 h-auto shadow-lg 2xl:w-1/2 xl:w-1/2 lg:w-5/12 lg:mr-20">
            <div className="w-96 sm:w-80 h-full">
                <img src={getItemImage(datos?.thumbnail)} alt="poster" className="w-96 h-full sm:w-80" />
            </div>
            <div className="flex flex-col justify-start items-start 2xl:px-10 xl:px-10 lg:px-2 md:px-10 sm:px-10 font-rajdhani w-full h-auto">
                <p className="2xl:text-4xl xl:text-2xl lg:text-xl md:text-3xl sm:text-2xl w-fit font-bold mb-5 text-start">
                    {getItemTitle(datos)}
                </p>
                <p className="text-justify w-fit lg:text-sm 2xl:text-lg xl:text-lg md:text-lg">
                    {getItemDescription(datos)}
                </p>
                <button className="mt-5 mb-5 bg-marvel-red-100 p-2 text-center 
                justify-center text-white 2xl:text-lg xl:text-lg lg:text-sm md:text-lg rounded-lg w-auto
                hover:bg-marvel-vino-80" onClick={() => onClickItem(getItemTitle(datos), datos?.id)}>
                    More information...
                </button>
            </div>
        </div>
    )
}

export default ItemList;
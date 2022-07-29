import imageNotFound from '../../../assets/image_not_available.jpg';

const SearchList = ({dataLeft, dataRight, option, onClickItem}) => {

    const getItemTitle = (item) => {
        if(option === 'characters') return item?.name;
        else if(option === 'creators') return item?.fullName;
        else return item?.title;
    }

    const getItemImage = (item) => {
        if(item === null || item === undefined) return imageNotFound;
        else return `${item?.path}.${item?.extension}`;
    }

    const getItemDescription = (item) => {
        if(item?.description === '' || item?.description === null || item?.description === undefined) return "No description available.";
        else return `${item?.description}`;
    }

    return (
        <div className="flex px-16 py-2 flex-row w-full my-10">
            <div className="flex flex-col w-1/2" >
            {
                dataLeft?.length === 0 ? "No data" : dataLeft?.map((value) => (
                    <div key={value?.id} className="flex flex-row my-7 h-auto shadow-lg w-11/12">
                        <div  className="w-96 h-80">
                            <img src={getItemImage(value?.thumbnail)} alt="poster" className="w-96 h-80"/>
                        </div>
                        <div className="flex flex-col justify-start items-start px-10 font-rajdhani w-full">
                            <p className="text-4xl font-bold mb-5">{getItemTitle(value)}</p>
                            <p className="text-justify w-full">
                                {getItemDescription(value)}
                            </p>
                            <button className="mt-5 mb-2 bg-marvel-red-100 p-2 text-center 
                            justify-center text-white text-lg rounded-lg 
                            hover:bg-marvel-vino-80" onClick={() => onClickItem(getItemTitle(value), value?.id)}>
                                More information...
                            </button>
                        </div>
                    </div>
                ))
            }
            </div>
            <div className="flex flex-col w-1/2">
            {
                dataRight?.length === 0 ? "No data" : dataRight?.map((value) => (
                    <div key={value?.id} className="flex flex-row my-7 h-auto shadow-lg w-11/12">
                        <div  className="w-80 h-80">
                            <img src={getItemImage(value?.thumbnail)} alt="poster" className="w-80 h-80"/>
                        </div>
                        <div className="flex flex-col justify-start items-start px-10 font-rajdhani w-full">
                            <p className="text-4xl font-bold mb-5">{getItemTitle(value)}</p>
                            <p className="text-justify w-full">
                                {getItemDescription(value)}
                            </p>
                            <button className="mt-5 bg-marvel-red-100 p-2 text-center 
                            justify-center text-white text-lg rounded-lg 
                            hover:bg-marvel-vino-100" onClick={() => onClickItem(getItemTitle(value), value?.id)}>
                                More information...
                            </button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default SearchList;
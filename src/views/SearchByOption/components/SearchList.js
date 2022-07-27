const SearchList = ({dataLeft, dataRight, option, onClickItem}) => {

    return (
        <div className="flex px-16 py-2 flex-row w-full my-10">
            <div className="flex flex-col w-1/2" >
            {
                dataLeft?.length === 0 ? "No data" : dataLeft?.map((value) => (
                    <div key={value?.id} className="flex flex-row my-7 h-auto shadow-lg w-11/12">
                        <div  className="w-96 h-80">
                            <img src={`${value?.thumbnail?.path}.${value?.thumbnail?.extension}`} alt="poster" className="w-96 h-80"/>
                        </div>
                        <div className="flex flex-col justify-start items-start px-10 font-rajdhani w-full">
                            <p className="text-4xl font-bold mb-5">{(option === 'events' || option === 'comics') ? value?.title : value?.name}</p>
                            <p className="text-justify w-full">
                                {
                                    (value?.description === '' || value?.description === null || value?.description === undefined) 
                                    ? "No description available." 
                                    : `${value?.description}`
                                }
                            </p>
                            <button className="mt-5 mb-2 bg-marvel-red-100 p-2 text-center 
                            justify-center text-white text-lg rounded-lg 
                            hover:bg-marvel-vino-80" onClick={() => onClickItem((option === 'events' || option === 'comics') ? value?.title : value?.name, value?.id)}>More information...</button>
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
                            <img src={`${value?.thumbnail?.path}.${value?.thumbnail?.extension}`} alt="poster" className="w-80 h-80"/>
                        </div>
                        <div className="flex flex-col justify-start items-start px-10 font-rajdhani w-full">
                            <p className="text-4xl font-bold mb-5">{(option === 'events' || option === 'comics') ? value?.title : value?.name}</p>
                            <p className="text-justify w-full">
                                {
                                    (value?.description === '' || value?.description === null || value?.description === undefined) 
                                    ? "No description available." 
                                    : `${value?.description}`
                                }
                            </p>
                            <button className="mt-5 bg-marvel-red-100 p-2 text-center 
                            justify-center text-white text-lg rounded-lg 
                            hover:bg-marvel-vino-100" onClick={() => onClickItem((option === 'events' || option === 'comics') ? value?.title : value?.name, value?.id)}>More information...</button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default SearchList;
const SearchList = ({dataLeft, dataRight, option}) => {

    return (
        <div className="flex px-16 py-2 flex-row w-full my-10">
            <div className="flex flex-col w-1/2" >
            {
                dataLeft?.length === 0 ? "No data" : dataLeft?.map((value, index) => (
                    <div key={value?.id} className="flex flex-row my-7 h-auto">
                        <div  className="w-1/2 h-80">
                            <img src={`${value?.thumbnail?.path}.${value?.thumbnail?.extension}`} alt="poster" className="w-80 h-80"/>
                        </div>
                        <div className="flex flex-col justify-start items-start px-10 font-rajdhani">
                            <p className="text-4xl font-bold mb-5">{(option === 'events' || option === 'comics') ? value?.title : value?.name}</p>
                            <p className="text-justify w-96">
                                {
                                    (value?.description === '' || value?.description === null || value?.description === undefined) 
                                    ? "No description available." 
                                    : `${value?.description}`
                                }
                            </p>
                            <button className="mt-5 bg-marvel-vino-80 p-2 text-center 
                            justify-center text-white text-lg rounded-lg 
                            hover:bg-marvel-vino-100">More information...</button>
                        </div>
                    </div>
                ))
            }
            </div>
            <div className="flex flex-col w-1/2">
            {
                dataRight?.length === 0 ? "No data" : dataRight?.map((value, index) => (
                    <div key={value?.id} className="flex flex-row my-7 h-auto">
                        <div  className="w-1/2 h-80">
                            <img src={`${value?.thumbnail?.path}.${value?.thumbnail?.extension}`} alt="poster" className="w-80 h-80"/>
                        </div>
                        <div className="flex flex-col justify-start items-start px-10 font-rajdhani">
                            <p className="text-4xl font-bold mb-5">{(option === 'events' || option === 'comics') ? value?.title : value?.name}</p>
                            <p className="text-justify w-96">
                                {
                                    (value?.description === '' || value?.description === null || value?.description === undefined) 
                                    ? "No description available." 
                                    : `${value?.description}`
                                }
                            </p>
                            <button className="mt-5 bg-marvel-vino-80 p-2 text-center 
                            justify-center text-white text-lg rounded-lg 
                            hover:bg-marvel-vino-100">More information...</button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default SearchList;
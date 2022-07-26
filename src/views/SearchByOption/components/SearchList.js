const SearchList = ({data, option}) => {
    return (
        <div>
            {
                data?.map((value, index) => (
                    <div key={index} className="flex flex-row my-10">
                        <div>
                            <img src={`${value?.thumbnail?.path}.${value?.thumbnail?.extension}`} alt="poster" className=""/>
                        </div>
                        <div>
                            <p>{value?.name}</p>
                            <button>More information...</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default SearchList;
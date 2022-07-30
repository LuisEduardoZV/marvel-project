const SearchBox = ({option, search, onOptionSelected, onSearch, onChangeInputSearch}) => {
    return(
        <div id="search" className="flex flex-col 
            bg-white-gray drop-shadow-2xl 
            rounded-xl mb-24 h-52 w-8/12 items-center">
            <h2 className="mt-8 font-semibold text-5xl mb-10">Search for event, comic or character...</h2>
            <div className="radio-group flex flex-row items-center justify-center rounded">
                <div className={`pr-3 hover:cursor-pointer pt-1 text-white 
                ${option.includes("characters") ? 'font-bold bg-marvel-red-90' : 'font-light bg-marvel-red-70'}`} 
                style={{borderTopLeftRadius: "5px 5px", borderBottomLeftRadius: "5px 5px"}}>
                    <input id="characters" type="radio" className="hover:cursor-pointer" name="characters" value="characters" 
                        checked={option} onChange={onOptionSelected}/>
                    <label htmlFor="characters" className='hover:cursor-pointer'>Character</label>
                </div>
                <div className={`pr-3 hover:cursor-pointer  pt-1 text-white 
                ${option.includes("comics") ? 'font-bold bg-marvel-red-90' : 'font-light bg-marvel-red-70'}`} >
                    <input id="comics" type="radio" className="" name="comics" value="comics" 
                    checked={option} onChange={onOptionSelected} />
                    <label htmlFor="comics" className='hover:cursor-pointer'>Comic</label>
                </div>
                <div className={`pr-3 hover:cursor-pointer pt-1 text-white 
                ${option.includes("events") ? 'font-bold bg-marvel-red-90' : 'font-light bg-marvel-red-70'}`} >
                    <input id="events" type="radio" className="" name="events" value="events" 
                    checked={option} onChange={onOptionSelected} />
                    <label htmlFor="events" className='hover:cursor-pointer'>Event</label>
                </div>
                <div>
                    <input type="text" className='bg-bg-input-gray w-52 pl-3 outline-none font-bold pt-1' 
                    value={search} onChange={onChangeInputSearch} 
                    style={{borderTopRightRadius: "5px 5px", borderBottomRightRadius: "5px 5px"}} required/>
                </div>
                <div>
                    <button className='ml-14 bg-marvel-vino-80 text-white p-1 rounded-xl w-20
                    hover:bg-marvel-vino-100' onClick={onSearch}>Search</button>
                </div>
            </div>
        </div>
    );
}

export default SearchBox;
import ListAdditionalInformation from "./ListAdditionalInformation";

const RightContainer = ({datos, option}) => {

    const events = datos?.events?.items?.slice(0,3);
    const stories = datos?.stories?.items?.slice(0,3);
    const series = datos?.series?.items?.slice(0,3);

    const setComicsOrCreators = () => {
        if(option === 'characters') return datos?.comics?.items?.slice(0,3);
        else if(option === 'comics'){
            const creators = datos?.creators?.items;
            return creators.length >= 4 ? creators.slice(0,3) : creators;
        }
    }

    return(
        <div className='flex w-3/5 flex-col justify-start items-start text-left'>
            <p className=' text-2xl mt-24'>
                {datos?.description}
            </p>
            <div className='flex my-14 flex-col w-full h-full text-lg'>
                <ListAdditionalInformation option={option} dataList={setComicsOrCreators()} title={option === "characters" ? "Comics" : "Creators"} />
            </div>
            <div className='flex flex-col w-full h-full text-lg'>
                <ListAdditionalInformation option={option} dataList={series} title="Series" />
            </div>
            <div className='flex my-14 flex-col w-full h-full text-lg'>
                <ListAdditionalInformation option={option} dataList={stories} title="Stories" />
            </div>
            <div className='flex flex-col w-full h-full text-lg'>
                <ListAdditionalInformation option={option} dataList={events} title="Events" />
            </div>
        </div>
    );
}

export default RightContainer;
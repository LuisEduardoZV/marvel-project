import { useEffect, useState } from "react";
import ListAdditionalInformation from "./ListAdditionalInformation";

const RightContainer = ({datos, option}) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        if(option === 'characters'){
            const events = datos?.events?.items;
            const stories = datos?.stories?.items;
            const series = datos?.series?.items;
            const comics = datos?.comics?.items;
            setData([
                {data: comics.length >= 4 ? comics.slice(0,3) : comics, title: "Comics"},
                {data: series.length >= 4 ? series.slice(0,3) : series, title: "Series"},
                {data: stories.length >= 4 ? stories.slice(0,3) : stories, title: "Stories"},
                {data: events.length >= 4 ? events.slice(0,3) : events, title: "Events"}
            ]);
        }else if(option === 'comics'){
            const creators = datos?.creators?.items;
            const events = datos?.events?.items;
            const stories = datos?.stories?.items;
            const characters = datos?.characters?.items;
            setData([
                {data: creators?.length >= 4 ? creators.slice(0,3) : creators, title: "Creators"},
                {data: events?.length >= 4 ? events.slice(0,3) : events, title: "Events"},
                {data: stories?.length >= 4 ? stories.slice(0,3) : stories, title: "Stories"},
                {data: characters?.length >= 4 ? characters.slice(0,3) : characters, title: "Characters"}
            ]);
        }else if(option === 'events'){
            const creators = datos?.creators?.items;
            const stories = datos?.stories?.items;
            const comics = datos?.comics?.items;
            const series = datos?.series?.items;
            const characters = datos?.characters?.items;
            setData([
                {data: creators?.length >= 4 ? creators.slice(0,3) : creators, title: "Creators"},
                {data: stories?.length >= 4 ? stories.slice(0,3) : stories, title: "Stories"},
                {data: comics.length >= 4 ? comics.slice(0,3) : comics, title: "Comics"},
                {data: series.length >= 4 ? series.slice(0,3) : series, title: "Series"},
                {data: characters.length >= 4 ? characters.slice(0,3) : characters, title: "Characters"},
            ]);
        }
    }, [datos, option]);

    return(
        <div className='flex w-3/5 flex-col justify-start items-start text-left'>
            <p className=' text-2xl mt-24 mb-6'>
                {(datos?.description === "" || datos?.description === null || datos?.description === undefined) ? "No description available." 
                : datos?.description}
            </p>

            {
                data?.map((value, index) => (
                    <ListAdditionalInformation key={index} dataList={value.data} title={value.title} />
                ))
            }
        </div>
    );
}

export default RightContainer;
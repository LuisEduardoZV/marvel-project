import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeTextHome from './components/WelcomeTextHome';
import SearchBox from './components/SearchBox';
import './index.css';

import marvel_comics_logo from '../../assets/marvel-comics-logo.png';
import marvel_comic from '../../assets/marvel-comic.jpg';
import marvel_comic_2 from '../../assets/marvel-comic-2.jpg';
import the_avengers from '../../assets/the-avengers.png';

const Home = () => {

    const [search, setSearch] = useState("");
    const [option, setOption] = useState("");

    const navigate = useNavigate();

    const handleSearchInput = ({ target: { value } }) => {
        setSearch(value);
    }

    const handleOptionSelected = ({ target: { value } }) => {
        setOption(value.trim());
    }

    const handleSearch = () => {
        if (!(search === "") && !(option === "")) navigate(`/search/${option}/${search}/detail`);
        else if (!(option === "")) navigate(`/search/${option}`);
        else alert("Please select at least one search option.");
    }

    return (
        <div className="flex w-auto h-full flex-col items-center bg-white-gray font-rajdhani" style={{ minHeight: "100vh" }}>
            <div className='flex flex-col bg-fondo-home w-full items-center'>
                <img src={marvel_comics_logo} alt="Marvel comics logo" className='w-1/4 h-1/4 mt-10' />
                <WelcomeTextHome />
            </div>
            <div className='flex w-full flex-row bg-blue-comic'>
                <img src={marvel_comic_2} alt="Marvel comic" className='w-5/12' />
                <div className='p-12 w-7/12'>
                    <h2 className='font-bold text-6xl mb-5'>History</h2>
                    <p className='text-justify text-xl'>
                        Marvel Comics was founded by Martin Goodman in 1939, with a steady number of name changes and launch failures. It was originally known as Red Circle Comics, Atlas Comics; although the more popular name (before Marvel Comics) is Timely Comics and its first major publication was Marvel Comics #1 (October 1939) and also for which it receives its current name, in which a Marvel superhero appeared for the first time: the first Human Torch and the villainous Namor, the underwater man. Both characters became huge successes for the company, almost instantaneously starring in their own series. Another popular superhero created at this time was the patriotic Captain America.
                    </p>
                    <p className='text-justify text-xl mt-8'>
                        During the 1950s, the company, like the entire American comic book industry, declined sharply as a result of the end of World War II. In 1957 Marvel almost closed its doors due to the bankruptcy of its distributor. During this time the company was called Atlas Comics and published monster stories with a light science fiction setting.
                    </p>
                </div>
            </div>
            <div className='flex w-full flex-row bg-yellow-comic h-auto'>
                <div className='flex flex-col p-12 w-7/12 justify-center h-auto'>
                    <p className='text-justify text-xl mb-4'>
                        In the early 1960s the company tried to return to the superhero genre that had been revitalised with great success by rival DC Comics a few years earlier. Stan Lee and Jack Kirby then created The Fantastic 4, inspired by the successes of DC Comics and the monster stories published by Atlas. This comic was an absolute success, revitalising the company, which began a long list of titles, the most popular of which was undoubtedly "The Amazing Spider-Man" created by Lee and Steve Ditko.
                    </p>
                    <p className='text-justify text-xl mt-8'>
                        In this decade the comic book market went back into recession. The company adapted by publishing new titles in genres such as horror and witchcraft. Marvel tried to acquire DC but the purchase was unsuccessful because DC wanted to retain the rights to its most popular characters Superman and Batman. In the late 1970s, the creative team of writer Chris Claremont and artist John Byrne relaunched one of Marvel's older titles, X-Men, which was the company's biggest success during this period. In the late 1970s, the comics began to be sold in specialised shops.
                    </p>
                </div>
                <img src={marvel_comic} alt="Marvel comic" className='w-5/12' />
            </div>
            <div className='flex w-full items-center justify-center py-10'>
                <img src={the_avengers} alt="The avengers logo" className='w-7/12' />
            </div>
            <SearchBox option={option} search={search}
                onOptionSelected={handleOptionSelected}
                onSearch={handleSearch}
                onChangeInputSearch={handleSearchInput} />
        </div>
    );
}

export default Home;
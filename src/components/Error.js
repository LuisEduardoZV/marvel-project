import errorImage from '../assets/404.png';

const Error = ({text}) => {
    return(
        <div className="flex items-center flex-col mt-16 font-rajdhani">
            <h2 className="pb-7 text-8xl font-bold">Error</h2>
            <div >
                <img src={errorImage} alt="Error, not found"/>
            </div>
            <p className="my-7 text-4xl font-semibold">{text}</p>
        </div>
    );
}

export default Error;
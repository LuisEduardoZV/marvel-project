import notFoundImage from '../../../assets/image_not_available.jpg';

const LeftContainer = ({ image }) => {

    const getImage = () => {
        if (image === null || image === undefined) return notFoundImage;
        else return `${image?.path}.${image?.extension}`;
    }

    return (
        <div className='flex 2xl:w-2/5 xl:w-2/5 lg:w-full md:w-full sm:w-full lg:items-center md:items-center sm:items-center lg:mb-8 md:mb-8 sm:mb-8 flex-col h-full 2xl:mr-2 xl:mr-2 justify-center'>
            <img src={getImage()} alt="Poster" className='2xl:w-5/6 xl:w-5/6 lg:w-1/2 md:w-2/3 sm:w-3/4' />
        </div>
    );
}

export default LeftContainer;
import notFoundImage from '../../../assets/image_not_available.jpg';

const LeftContainer = ({image}) => {

    const getImage = () => {
        if(image === null || image === undefined) return notFoundImage;
        else return `${image?.path}.${image?.extension}`;
    }

    return(
        <div className='flex w-2/5 flex-col h-full mr-2 justify-center'>
            <img src={getImage()} alt="Poster" className='w-5/6' />
        </div>
    );
}

export default LeftContainer;
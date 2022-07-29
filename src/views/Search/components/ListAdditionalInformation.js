import ListItem from "./ListItem";

const ListAdditionalInformation = ({dataList, title, option, onClickDetailCategory}) => {
    return(
        <>
            <h3 className='font-bold text-xl'>{title}</h3>
            <div className='flex flex-row w-full mt-3 mb-10'>
            {
                dataList?.length >= 1 ? dataList?.map((value, index) => (
                    <ListItem key={index} name={value?.name} />
                )) : <p className='mr-16'>No data</p>
            }
            {
                dataList?.length >= 3 ? 
                <div className="flex justify-center items-center">
                    <button className="py-1 px-3 bg-marvel-red-100 rounded-md text-white
                            hover:bg-marvel-vino-80" name={option}
                            onClick={() => onClickDetailCategory(title.toLowerCase())}>More...</button>
                </div> : ""
            }
            </div>
        </>
    );
}

export default ListAdditionalInformation;
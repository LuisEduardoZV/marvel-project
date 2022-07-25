import ListItem from "./ListItem";

const ListAdditionalInformation = ({dataList, title, option}) => {
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
                (option === 'characters' || option === 'events') && <p className='font-bold border-b-2 border-marvel-vino-80'>More...</p>
            }
            </div>
        </>
    );
}

export default ListAdditionalInformation;
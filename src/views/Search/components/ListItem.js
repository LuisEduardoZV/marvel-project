const ListItem = ({name, id, onClickItemList, option}) => {

    const checkId = () => {
        if(id === null) return false;
        else return true;
    }

    return(
        <p className={`mr-16 underline 
                ${checkId() && 
                "hover:underline-offset-2 hover:cursor-pointer"}`}
            onClick={() => onClickItemList(option, id, name?.trim())}>{name}</p>
    );
}

export default ListItem;
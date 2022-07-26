const Pagination = ({ currentPage, onClickPaginate, lastPage}) => {

    return (
        <div className="flex flex-row justify-center mt-9 font-rajdhani items-center text-lg font-semibold">
            <button
                onClick={() => onClickPaginate("back")}
                disabled={currentPage === 1}
                className={`py-1 px-3 bg-marvel-vino-80
                    hover:bg-marvel-vino-100 rounded-md mx-3 
                    text-white font-normal ${currentPage === 1 && 'cursor-not-allowed'}`}
            >
                <span>{`<-`}</span>
            </button>
            <button
                onClick={() => onClickPaginate("next")}
                disabled={currentPage === Math.ceil(lastPage)}
                className={`py-1 px-3 bg-marvel-vino-80 
                hover:bg-marvel-vino-100 rounded-md mx-3 
                text-white font-normal ${currentPage === Math.ceil(lastPage) && 'cursor-not-allowed'}`}
            >
                <span>{`->`}</span>
            </button>
            <span>{`${currentPage} / ${Math.ceil(lastPage)}`}</span>
        </div>
    );
}

export default Pagination;
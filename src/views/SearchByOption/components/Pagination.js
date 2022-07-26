const Pagination = ({itemsPerPage, totalItems, onClickPaginate}) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {
                    pageNumbers.map((value, index) =>(
                        <li key={index} className="page-item">
                            <a href="!#" className="page-link" onClick={() => onClickPaginate(value)}>{value}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Pagination;
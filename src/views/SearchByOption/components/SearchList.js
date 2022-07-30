import ItemList from './ItemList';

const SearchList = ({ option, onClickItem, datos }) => {

    const renderContent = () => {
        const dataRender = [];
        for (let i = 0; i < datos?.length; i += 2) {
            const isPar = datos[i] && datos[i + 1];
            dataRender.push(
                <div key={`${datos[i]?.id}+${datos[i + 1]?.id}`}
                    className={`flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col my-2 h-auto w-auto ${isPar === undefined && 'justify-center'}`}>
                    {
                        datos[i] !== undefined && <ItemList datos={datos[i]} option={option} onClickItem={onClickItem} />
                    }
                    {
                        datos[i + 1] !== undefined && <ItemList datos={datos[i + 1]} option={option} onClickItem={onClickItem} />
                    }
                </div>
            );
        }
        return dataRender;
    }

    return (
        <div className="flex 2xl:px-16 xl:px-16 lg:px-4 2xl:py-2 xl:py-2 lg:py-2 md:py-1 flex-col w-full my-10">
            {renderContent()}
        </div>
    );
}

export default SearchList;
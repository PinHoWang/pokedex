import '../styles/PaginationContainer.css';

export default function PaginationContainer({ 
    currentPage, 
    indexOfLastItem, 
    totalNumber, 
    totalPages, 
    onClickPrevious, 
    onClickPageNumber, 
    onClickNext, 
    children }) {
        
        const renderPageNumbers = () => {
            const pageNumbers = [];
            for(let i = 1; i <= totalPages; i++) {
                pageNumbers.push(
                    <button key={i} id={i} onClick={onClickPageNumber} disabled={i === currentPage}>{i}</button>
                )
            }

            return pageNumbers;
        };

        return (
            <>
                {children}
                <div className="pagination">
                    <button disabled={currentPage === 1} onClick={onClickPrevious}>&lt;</button>
                    {renderPageNumbers()}
                    <button disabled={indexOfLastItem >= totalNumber} onClick={onClickNext}>&gt;</button>
                </div>
            </>
        );
};
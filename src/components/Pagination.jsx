const Pagination = ({
    totalPages,
    currentPage,
    onPageChange,
    onPrev,
    onNext,
}) => (
    <div className='pagination-container'>
        <button
            style={{ padding: '5px', margin: '5px', cursor: 'pointer' }}
            onClick={onPrev}
            disabled={currentPage === 0}
        >
            ⬅️
        </button>
        {[...Array(totalPages).keys()].map((n) => (
            <span
                key={n}
                className={`page-number${currentPage === n ? ' active' : ''}`}
                onClick={() => onPageChange(n)}
            >
                {n + 1}
            </span>
        ))}
        <button
            style={{ padding: '5px', margin: '5px', cursor: 'pointer' }}
            onClick={onNext}
            disabled={currentPage === totalPages - 1}
        >
            ➡️
        </button>
    </div>
);

export default Pagination;
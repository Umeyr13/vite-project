

// eslint-disable-next-line react/prop-types
const Pagination = ({ currentPage, setPage }) => {
    return (
        <div>
            <button onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1}>
                Previous
            </button>
            <span>{currentPage}</span>
            <button onClick={() => setPage(currentPage + 1)}>
                Next
            </button>
        </div>
    );
};

export default Pagination;

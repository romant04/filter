import React from 'react';

function PageSelector({ setPage, page }) {
    return <div className='pages'>
        <button onClick={() => {
            if (page > 1) {
                setPage(page - 1)
            }
        }}>
            &larr;
        </button>
        <button onClick={() => {
            if (page < 499) {
                setPage(page + 1)
            }
        }}>
            &rarr;
        </button>
    </div>;
}

export default PageSelector;

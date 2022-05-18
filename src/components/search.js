import React  from 'react';

const Search = ({currentValue, setSearch}) => {
    console.log(currentValue)
    return (
        <p>
            <b>Show:</b>{' '}
            {currentValue === 'all' ? (
            <span>All</span>
            ) : (
            <button onClick={()=>setSearch('all')}>All</button>
            )}{' '}
            {currentValue === 'active' ? (
            <span>Active</span>
            ) : (
            <button onClick={()=>setSearch('active')}>Active</button>
            )}{' '}
            {currentValue === 'completed' ? (
            <span>Completed</span>
            ) : (
            <button onClick={()=>setSearch('completed')}>Completed</button>
            )}
        </p>
    )
}

export default Search
import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = event => {
        event.preventDefault();//防止在用户键入enter的时候页面自动刷新

        onFormSubmit(term);
    };

    return (
        <div className="earch-bar ui segment">
            <form onSubmit={onSubmit} className='ui form'>
                <div className='field'>
                    <label>Search a video</label>
                    <input
                        type='text'
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
import React from 'react';

export function Form(props) {
    const { movie } = props;

    return(
        <form>
            <h3>{movie.name}</h3>
            <button> - </button>0
            <button> + </button>
        </form>
    );
}
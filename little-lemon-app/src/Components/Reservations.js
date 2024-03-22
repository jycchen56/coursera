import React, { useEffect } from 'react';

function Reservations() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <div>
            <h1>Reservations</h1>
        </div>
    )
}

export default Reservations;
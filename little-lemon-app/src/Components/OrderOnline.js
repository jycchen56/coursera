import React, { useEffect } from 'react';

function OrderOnline () {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <div>
            <h1>Order Online</h1>
            <p>Order Online Page</p>
        </div>
    );
}

export default OrderOnline;
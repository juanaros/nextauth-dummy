"use client"

import React, { useEffect, useState } from 'react';
interface Quote {
    id: number;
    quote: string;
    author: string;
}

function HomePage() {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/quotes')
            .then((res) => res.json())
            .then((data) => {
                setQuotes(data.quotes);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching quotes:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <header style={{ marginBottom: '20px' }}>
                <h1>Welcome to the Quotes Homepage</h1>
                <p>Here are some quotes to inspire you:</p>
            </header>

            <section>
                <h2>Quotes</h2>
                <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                    {quotes.map((quote) => (
                        <blockquote key={quote.id} style={{ marginBottom: '20px' }}>
                            <p style={{ fontSize: '18px', fontStyle: 'italic' }}>"{quote.quote}"</p>
                            <footer style={{ textAlign: 'right', fontSize: '16px', fontWeight: 'bold' }}>- {quote.author}</footer>
                        </blockquote>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default HomePage;

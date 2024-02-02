import { React, useState, useEffect } from 'react'
import { Card } from '../Card/Card';
import { HookContext } from '../HookContext/HookContext';

export const Books = () => {

    const [libros, setLibros] = useState([]);

    useEffect(() => {
        fetch('https://apiharrybooks.onrender.com/').then(res => res.json()).then(data => setLibros(data))
    }, []);

    return (
            <div>
                <ul className='target'>
                    {libros.map(libro => (
                        <Card key={libro.id} libro={libro} />
                    ))}
                </ul>
            </div>
    );
};

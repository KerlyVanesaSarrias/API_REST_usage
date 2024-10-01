import axios from 'axios'
import { useEffect, useState } from 'react'

export const ApiRickAndMorty = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.sampleapis.com/rickandmorty/characters')
                console.log(response)
                setCharacters(response.data)
            } catch (error) {
                console.error(error, 'Hay un error')
            }
            
        }
        fetchData()
    }, []);


return (
    <div className='container mt-5'>
        <h2 className='text-center text-white mb-4'>Rick and Morty</h2>
        <div className='row overflow-auto vh-80 scrollable-container'>
            {characters.map((characters, index) => (
                <div className='col-md-4 mb-4' key={index}>
                    <div className='card h-100 d-flex flex-column '>
                        <img src={characters.image} className='fixed-img p-2' alt="Cartoon" />
                        <div className=''>{characters.name}</div>
                        <div>{characters.status}</div>
                        <div>{characters.species}</div>
                        <div>{characters.origin}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}
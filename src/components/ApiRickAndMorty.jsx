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
                    <div className='col-md-4 mb-4 ' key={index}>
                        <div className='card h-100 d-flex flex-column  ; '>
                            <img src={characters.image} className='fixed-img p-3 ' alt="Cartoon" />
                            <section className="card_body">
                                <h3 className="card_name">{characters.name}</h3>
                                <hr className="card_hr" />
                                <ul className="card_list">
                                    <li className="card_item">
                                        <span className="card_label">Specie</span>
                                        <span className="card_value">{characters.species}</span>
                                    </li>
                                    <li className="card_item">
                                        <span className="card_label">Origin</span>
                                        <span className="card_value">{characters.origin}</span>
                                    </li>
                                    <li className="card_item">
                                        <span className="card_label">Status</span>
                                        <span className="card_value">{characters.status}</span>
                                    </li>
                                </ul>
                            </section>
                            {/* <div className=''>{characters.name}</div>
                        <hr className="hr"/>
                        <div>{characters.status}</div>
                        <div>{characters.species}</div>
                        <div>{characters.origin}</div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
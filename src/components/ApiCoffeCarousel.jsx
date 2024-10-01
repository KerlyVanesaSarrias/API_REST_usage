import axios from 'axios'
import { useEffect, useState } from 'react'

const ApiCoffeCarousel = () => {

    const [coffeeList, setCoffeList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.sampleapis.com/coffee/hot')
                setCoffeList(response.data)
            } catch (error) {
                console.error(error, 'Hay un error')
            }
        }
        fetchData()
    }, []);

    console.log(coffeeList)

    return (
        <>
            <div className="container-fluid p-0">
                <div className="text-center mb-4">
                    <h1 className="text-white">Coffee List</h1> 
                </div>
                <div className="carousel-container">
                    <div id="coffeeCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {coffeeList.map((coffee, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <img src={coffee.image} className="d-block w-75" alt={coffee.title} />
                                    </div>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{coffee.title}</h5>
                                        <p>{coffee.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#coffeeCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#coffeeCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApiCoffeCarousel
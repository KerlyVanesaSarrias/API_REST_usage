import axios from 'axios'
import { useEffect, useState } from 'react'

const ApiCoffeCarousel = () => {

    const [coffeList, setCoffeList] = useState([])

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
    }
        , []);

        console.log(coffeList)

    return (
        <div>ApiCoffeCarousel</div>


    )
}

export default ApiCoffeCarousel
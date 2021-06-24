import { useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'
import { QUERY_WEATHER } from '../graphql/gql'
import WeatherInfo from './WeatherInfo'

const Main = () => {
    const [city, setCity] = useState<string>('')
    const [getCityWeather, {data, loading, error}] = useLazyQuery(QUERY_WEATHER)

    const initiateFetch = () => {
        getCityWeather({
            variables: {name: city}
        })
    }
    return (
        <div>
            <h1>Weather Details</h1>
            <input type="text" placeholder="Enter City" value={city} onChange={({target: {value}}) => setCity(value)}/>
            <button onClick={initiateFetch}>Search</button>
            {loading && <h3>Loading...</h3>}
            {error && <h3>Something went wrong!</h3>}
            {data && data.getCityByName && <WeatherInfo info={data.getCityByName}/>}
        </div>
    )
}

export default Main

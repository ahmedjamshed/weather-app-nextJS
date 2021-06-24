import React from 'react'
import styles from '../styles/WeatherInfo.module.css'

const WeatherInfo = ({ info }: any) => {
    const { name, country, weather } = info
    const { summary, temperature } = weather
    return (
        <div>
            <h1>{`${name}, ${country}`}</h1>
            <div className={styles.row}>
                <h3>{summary.title}</h3>
                <span>&nbsp;&nbsp;</span>
                <h3>{`${temperature.actual} `}<span>&#8451;</span></h3>
            </div>
            <div className={styles.row}>
                <h6>{`Min: ${temperature.min} `}<span>&#8451;</span></h6>
                <span>&nbsp;&nbsp;</span>
                <h5>{` Max: ${temperature.max} `}<span>&#8451;</span></h5>
            </div>
        </div>
    )
}

export default WeatherInfo

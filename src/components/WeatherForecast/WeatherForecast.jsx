import './WeatherForecast.css'

const WeatherForecast = (props) => {
    return(
        <div className='weather'>
            <h3>{props.day}</h3>
            <img src={props.src} alt={props.alt} />
            <p>Conditions: {props.conditions}</p>
            <p>Time: {props.time}</p>
        </div>
    )
}

export default WeatherForecast
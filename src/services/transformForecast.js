import moment from 'moment';
import transformWeather from './transformWeather';
import 'moment/locale/es';
const transformForecast = data => (

data.list.filter(item => (
    /*Filtros por las horas que necesito mostrar en el forecast
    y despues con map genero el array de objetos que necesita
    ForecastExtended para renderizar */
        moment.unix(item.dt).hour() === 6 ||
        moment.unix(item.dt).hour() === 12 ||
        moment.unix(item.dt).hour() === 18    
    )).map(item => ({

        weekDay: moment.unix(item.dt).format('ddd'),
        hour: moment.unix(item.dt).hour(),
        data: transformWeather(item)
    }))

);

export default transformForecast;
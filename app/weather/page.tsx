export default async function WeatherPage() {
  const res = await fetch(
    `http://api.weatherstack.com/current?access_key=c53ff74f01ded40b578954e01daa0869&query=Tangerang
`
  );

  if (!res.ok) {
    return <div>Failed to fetch weather data.</div>;
  }

  const weather = await res.json();

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Weather in {weather.location.name}</h1>
      <p className="text-gray-500">Local Time: {weather.location.localtime}</p>
      <div className="flex items-center gap-4 mt-4">
        <img src={weather.current.weather_icons[0]} alt="icon" className="w-16 h-16" />
        <div>
          <p className="text-lg font-semibold">{weather.current.weather_descriptions[0]}</p>
          <p>Temperature: {weather.current.temperature}°C</p>
          <p>Feels like: {weather.current.feelslike}°C</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <p>Humidity: {weather.current.humidity}%</p>
        <p>Wind: {weather.current.wind_speed} km/h</p>
        <p>Pressure: {weather.current.pressure} hPa</p>
        <p>UV Index: {weather.current.uv_index}</p>
      </div>
    </div>
  );
}

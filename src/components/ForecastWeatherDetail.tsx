import React from 'react'
import Container from './Container'
import WeatherIcon from './WeatherIcon'
import { converKelvinToCelsius } from '@/utils/utilsFunctions';
import WeatherDetails from './WeatherDetails';

type Props = {}

export default function ForecastWeatherDetail(props: ForecastWeatherDetailProps) {
  const {
    weatherIcon = "02d",
    date = "19.09",
    day = "Tuesday",
    temp,
    feels_like,
    temp_min,
    temp_max,
    description
  } = props;

  return (
    <Container className="gap-4">
      <section className="flex gap-4 items-center px-4">
        <div className="flex flex-col gap-1 items-center">
          <WeatherIcon icomName={weatherIcon} />
          <p>{ date }</p>
          <p className="text-sm">{ day }</p>
        </div>

        <div className="flex flex-col px-4">
          <span className="text-5xl">{ converKelvinToCelsius(temp ?? 0) }</span>
          <p className="text-xs space-x-1 whitespace-nowrap">
            <span>Feels like</span>
            <span> { converKelvinToCelsius(feels_like ?? 0) }°</span>
          </p>
          <p className="capitalize">{ description }</p>
        </div>
      </section>

      <section className="overflow-x-auto flex justify-between gap-4 px-4 w-full pr-10">
        <WeatherDetails { ...props }/>
      </section>
    </Container>
  )
}
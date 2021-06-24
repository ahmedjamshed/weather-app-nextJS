import { gql } from "@apollo/client";

export const QUERY_WEATHER = gql`
query getCityByName($name: String!) {
    getCityByName(name: $name, config: {units: metric}) {
      id
      name
      country
      coord {
        lon
        lat
      }
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
  `
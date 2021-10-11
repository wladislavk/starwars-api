export interface Person {
    name: string,
    birth_year: string,
    eye_color: string,
    gender: string,
    hair_color: string,
    height: string,
    mass: string,
    skin_color: string,
    homeworld: string,
    films: Array<string>
    species: Array<string>,
    starships: Array<string>,
    vehicles: Array<string>,
    url: string,
    created: string,
    edited: string
}

export interface Planet {
    name: string,
    diameter: string,
    rotation_period: string,
    orbital_period: string,
    gravity: string,
    population: string,
    climate: string,
    terrain: string,
    surface_water: string,
    residents: Array<string>,
    films: Array<string>,
    url: string,
    created: string,
    edited: string
}

export interface Species {
    name: string,
    classification: string,
    designation: string,
    average_height: string,
    average_lifespan: string,
    eye_colors: string,
    hair_colors: string,
    skin_colors: string,
    language: string,
    homeworld: string,
    people: Array<string>,
    films: Array<string>,
    url: string,
    created: string,
    edited: string
}

export interface Film {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    species: Array<string>,
    starships: Array<string>,
    vehicles: Array<string>,
    characters: Array<string>,
    planets: Array<string>,
    url: string,
    created: string,
    edited: string
}

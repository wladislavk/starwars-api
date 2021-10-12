import * as express from 'express';
import * as models from '../models';
import * as responses from '../responses';
import * as constants from '../constants';
import axios, {AxiosResponse} from "axios";

export default class MainController {
    public static async show(request: express.Request, response: express.Response): Promise<void> {
        const personId = request.params.id;

        let personResponse: AxiosResponse<responses.Person>;
        try {
            const personUrl = constants.STARWARS_API_URL + "/people/" + personId + "/";
            personResponse = await axios.get(personUrl);
        } catch (error) {
            console.error(error);
            response.status(404).send(error);
            return;
        }

        let planetResponse: AxiosResponse<responses.Planet>;
        try {
            planetResponse = await axios.get(personResponse.data.homeworld);
        } catch (error) {
            console.error(error);
            response.status(404).send(error);
            return;
        }

        const speciesData: Array<AxiosResponse<responses.Species>> = [];

        for (const specieUrl of personResponse.data.species) {
            try {
                speciesData.push(await axios.get(specieUrl));
            } catch (error) {
                console.error(error);
                response.status(404).send(error);
                return;
            }
        }

        const filmsData: Array<AxiosResponse<responses.Film>> = [];

        for (const filmUrl of personResponse.data.films) {
            try {
                filmsData.push(await axios.get(filmUrl));
            } catch (error) {
                console.error(error);
                response.status(404).send(error);
                return;
            }
        }

        const parsedSpeciesData: Array<models.Species> = [];
        for (const species of speciesData) {
            parsedSpeciesData.push({
                name: species.data.name,
                average_lifespan: species.data.average_lifespan,
                classification: species.data.classification,
                language: species.data.language
            });
        }

        const parsedFilmsData: Array<models.Film> = [];
        for (const film of filmsData) {
            parsedFilmsData.push({
                title: film.data.title,
                director: film.data.director,
                producer: film.data.producer,
                release_date: new Date(film.data.release_date)
            });
        }

        const result: models.Person = {
            name: personResponse.data.name,
            height: personResponse.data.height,
            mass: personResponse.data.mass,
            hair_color: personResponse.data.hair_color,
            skin_color: personResponse.data.skin_color,
            gender: personResponse.data.gender,
            homeworld: {
                name: planetResponse.data.name,
                terrain: planetResponse.data.terrain,
                population: planetResponse.data.population
            },
            species: parsedSpeciesData,
            films: parsedFilmsData
        };

        response.send(result);
    }
}

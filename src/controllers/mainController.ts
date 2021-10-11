import * as express from 'express';
import * as models from '../models';
import * as responses from '../responses';
import * as constants from '../constants';
import axios from "axios";

export default class MainController {
    public static async show(request: express.Request, response: express.Response): Promise<void> {
        const personId = request.params.id;

        /*
        try {
            const personResponse: responses.Person = await axios.get(constants.STARWARS_API_URL + "/people/" + personId);
        } catch (error) {
            console.error(error);
            response.status(404).send(error);
            return;
        }
         */

        const personResponse: responses.Person = {
            "edited": "2014-12-20T21:17:56.891Z",
            "name": "Luke Skywalker",
            "created": "2014-12-09T13:50:51.644Z",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "blond",
            "height": "172",
            "eye_color": "blue",
            "mass": "77",
            "homeworld": constants.STARWARS_API_URL + "/planets/1",
            "birth_year": "19BBY",
            "url": constants.STARWARS_API_URL + "/people/1",
            "films": [
                constants.STARWARS_API_URL + "/films/1",
                constants.STARWARS_API_URL + "/films/2",
                constants.STARWARS_API_URL + "/films/3",
                constants.STARWARS_API_URL + "/films/6"
            ],
            "species": [constants.STARWARS_API_URL + "/species/9"],
            "starships": [],
            "vehicles": []
        };

        /*
        try {
            const planetResponse: responses.Planet = await axios.get(personResponse.homeworld);
        } catch (error) {
            console.error(error);
            response.status(404).send(error);
            return;
        }
         */

        const planetResponse: responses.Planet = {
            "edited": "2014-12-20T20:58:18.411Z",
            "climate": "arid",
            "surface_water": "1",
            "name": "Tatooine",
            "diameter": "10465",
            "rotation_period": "23",
            "created": "2014-12-09T13:50:49.641Z",
            "terrain": "desert",
            "gravity": "1 standard",
            "orbital_period": "304",
            "population": "200000",
            "url": constants.STARWARS_API_URL + "/planets/1",
            "residents": [],
            "films": []
        };

        const speciesData: Array<responses.Species> = [];

        /*
        for (const specieUrl of personResponse.species) {
            try {
                speciesData.push(await axios.get(specieUrl));
            } catch (error) {
                console.error(error);
                response.status(404).send(error);
                return;
            }
        }
         */

        speciesData.push({
            "edited": "2014-12-20T21:36:42.136Z",
            "classification": "mammal",
            "name": "Human",
            "designation": "sentient",
            "created": "2014-12-10T13:52:11.567Z",
            "eye_colors": "brown, blue, green, hazel, grey, amber",
            "people": [],
            "skin_colors": "caucasian, black, asian, hispanic",
            "language": "Galactic Basic",
            "hair_colors": "blonde, brown, black, red",
            "homeworld": constants.STARWARS_API_URL + "/planets/9",
            "average_lifespan": "120",
            "average_height": "180",
            "url": constants.STARWARS_API_URL + "/species/9",
            "films": [],
        });

        const filmsData: Array<responses.Film> = [];

        /*
        for (const filmUrl of personResponse.films) {
            try {
                filmsData.push(await axios.get(filmUrl));
            } catch (error) {
                console.error(error);
                response.status(404).send(error);
                return;
            }
        }
         */
        filmsData.push({
            "starships": [],
            "edited": "2014-12-20T19:49:45.256Z",
            "vehicles": [],
            "planets": [],
            "producer": "Gary Kurtz, Rick McCallum",
            "title": "A New Hope",
            "created": "2014-12-10T14:23:31.880Z",
            "episode_id": 4,
            "director": "George Lucas",
            "release_date": "1977-05-25",
            "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
            "characters": [],
            "species": [],
            "url": constants.STARWARS_API_URL + "/films/1"
        });
        filmsData.push({
            "starships": [],
            "edited": "2014-12-15T13:07:53.386Z",
            "vehicles": [],
            "planets": [],
            "producer": "Gary Kurtz, Rick McCallum",
            "title": "The Empire Strikes Back",
            "created": "2014-12-12T11:26:24.656Z",
            "episode_id": 5,
            "director": "Irvin Kershner",
            "release_date": "1980-05-17",
            "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
            "characters": [],
            "species": [],
            "url": constants.STARWARS_API_URL + "/films/2"
        });
        filmsData.push({
            "starships": [],
            "edited": "2014-12-20T09:48:37.462Z",
            "vehicles": [],
            "planets": [],
            "producer": "Howard G. Kazanjian, George Lucas, Rick McCallum",
            "title": "Return of the Jedi",
            "created": "2014-12-18T10:39:33.255Z",
            "episode_id": 6,
            "director": "Richard Marquand",
            "release_date": "1983-05-25",
            "opening_crawl": "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
            "characters": [],
            "species": [],
            "url": constants.STARWARS_API_URL + "/films/3"
        });
        filmsData.push({
            "starships": [],
            "edited": "2014-12-20T20:47:52.073Z",
            "vehicles": [],
            "planets": [],
            "producer": "Rick McCallum",
            "title": "Revenge of the Sith",
            "created": "2014-12-20T18:49:38.403Z",
            "episode_id": 3,
            "director": "George Lucas",
            "release_date": "2005-05-19",
            "opening_crawl": "War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....",
            "characters": [],
            "species": [],
            "url": constants.STARWARS_API_URL + "/films/6"
        });

        const parsedSpeciesData: Array<models.Species> = [];
        for (const species of speciesData) {
            parsedSpeciesData.push({
                name: species.name,
                average_lifespan: species.average_lifespan,
                classification: species.classification,
                language: species.language
            });
        }

        const parsedFilmsData: Array<models.Film> = [];
        for (const film of filmsData) {
            parsedFilmsData.push({
                title: film.title,
                director: film.director,
                producer: film.producer,
                release_date: new Date(film.release_date)
            });
        }

        const result: models.Person = {
            name: personResponse.name,
            height: personResponse.height,
            mass: personResponse.mass,
            hair_color: personResponse.hair_color,
            skin_color: personResponse.skin_color,
            gender: personResponse.gender,
            homeworld: {
                name: planetResponse.name,
                terrain: planetResponse.terrain,
                population: planetResponse.population
            },
            species: parsedSpeciesData,
            films: parsedFilmsData
        };

        response.send(result);
    }
}

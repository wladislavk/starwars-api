"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants = __importStar(require("../constants"));
const axios_1 = __importDefault(require("axios"));
class MainController {
    static show(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const personId = request.params.id;
            let personResponse;
            try {
                const personUrl = constants.STARWARS_API_URL + "/people/" + personId + "/";
                personResponse = yield axios_1.default.get(personUrl);
            }
            catch (error) {
                console.error(error);
                response.status(404).send(error);
                return;
            }
            /*
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
            */
            let planetResponse;
            try {
                planetResponse = yield axios_1.default.get(personResponse.data.homeworld);
            }
            catch (error) {
                console.error(error);
                response.status(404).send(error);
                return;
            }
            /*
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
             */
            const speciesData = [];
            for (const specieUrl of personResponse.data.species) {
                try {
                    speciesData.push(yield axios_1.default.get(specieUrl));
                }
                catch (error) {
                    console.error(error);
                    response.status(404).send(error);
                    return;
                }
            }
            /*
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
             */
            const filmsData = [];
            for (const filmUrl of personResponse.data.films) {
                try {
                    filmsData.push(yield axios_1.default.get(filmUrl));
                }
                catch (error) {
                    console.error(error);
                    response.status(404).send(error);
                    return;
                }
            }
            /*
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
             */
            const parsedSpeciesData = [];
            for (const species of speciesData) {
                parsedSpeciesData.push({
                    name: species.data.name,
                    average_lifespan: species.data.average_lifespan,
                    classification: species.data.classification,
                    language: species.data.language
                });
            }
            const parsedFilmsData = [];
            for (const film of filmsData) {
                parsedFilmsData.push({
                    title: film.data.title,
                    director: film.data.director,
                    producer: film.data.producer,
                    release_date: new Date(film.data.release_date)
                });
            }
            const result = {
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
        });
    }
}
exports.default = MainController;
//# sourceMappingURL=mainController.js.map
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
                response.status(404).send(error);
                return;
            }
            let planetResponse;
            try {
                planetResponse = yield axios_1.default.get(personResponse.data.homeworld);
            }
            catch (error) {
                response.status(404).send(error);
                return;
            }
            const speciesData = [];
            for (const specieUrl of personResponse.data.species) {
                try {
                    speciesData.push(yield axios_1.default.get(specieUrl));
                }
                catch (error) {
                    response.status(404).send(error);
                    return;
                }
            }
            const filmsData = [];
            for (const filmUrl of personResponse.data.films) {
                try {
                    filmsData.push(yield axios_1.default.get(filmUrl));
                }
                catch (error) {
                    response.status(404).send(error);
                    return;
                }
            }
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
                birth_year: personResponse.data.birth_year,
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
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const main_1 = __importDefault(require("./routes/main"));
const app = (0, express_1.default)();
// view engine setup
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/api', main_1.default);
app.use(function (req, res, next) {
    res.status(404).json({ "message": "Unknown error" });
});
const errorHandler = function (err, req, res, next) {
    // render the error page
    res.status(err.status || 500).json({ "message": "Unknown error" });
    next();
};
// error handler
app.use(errorHandler);
module.exports = app;
//# sourceMappingURL=app.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('bixppsoab13t8jismkob', 'ugvhgalkp6pwu1gv', '7lmiE5A0EAlYlVy9jinO', {
    host: 'bixppsoab13t8jismkob-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    //logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map
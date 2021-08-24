"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    db: {
        url: process.env.DB_URL || 'mongodb://mongodb-abs:27017'
    },
    security: {
        saltRounds: process.env.SALT_ROUNDS || 10
    }
};
//# sourceMappingURL=environment.js.map
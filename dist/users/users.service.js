"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var UsersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const environment_1 = require("../common/environment");
let UsersService = UsersService_1 = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
        this.logger = new common_1.Logger(UsersService_1.name);
    }
    async criarUser(createUserDto) {
        const hash = await bcrypt.hash(createUserDto.password, environment_1.environment.security.saltRounds);
        createUserDto.password = hash;
        const userCriado = new this.userModel(createUserDto);
        userCriado.save((error, doc) => {
            console.log(doc);
        });
    }
    async atualizarUser(_id, updateUserDto) {
        const userEncontrado = await this.userModel.findOne({ _id }).exec();
        if (!userEncontrado) {
            throw new common_1.BadRequestException(`Usuario com o _id ${_id} não encontrado`);
        }
        const isMatch = await bcrypt.compare(updateUserDto.password, userEncontrado.password);
        if (isMatch === false) {
            const hash = await bcrypt.hash(updateUserDto.password, environment_1.environment.security.saltRounds);
            updateUserDto.password = hash;
        }
        return await this.userModel.findOneAndUpdate({ _id: _id }, { $set: updateUserDto }).exec();
    }
    async consultarTodosUsers() {
        return await this.userModel.find().exec();
    }
    async consultarUsersKey(_id) {
        const vinculoEncontrado = await this.userModel.findOne({ _id }).exec();
        if (!vinculoEncontrado) {
            throw new common_1.BadRequestException(`Usuario com o _id ${_id} não encontrado`);
        }
        return await this.userModel.findOne({ _id }).exec();
    }
    async consutarUserEmail(email) {
        return await this.userModel.findOne({ email }).exec();
    }
    async deletarUser(_id) {
        const vinculoEncontrado = await this.userModel.findOne({ _id }).exec();
        if (!vinculoEncontrado) {
            throw new common_1.BadRequestException(`Usuario com o _id ${_id} não encontrado`);
        }
        await this.userModel.deleteOne({ _id }).exec();
    }
    async bcrypt(password) {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(password, saltOrRounds);
        return hash;
    }
};
UsersService = UsersService_1 = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
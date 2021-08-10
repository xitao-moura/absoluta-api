"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true
    });
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .addBasicAuth()
        .setTitle('Absoluta Api')
        .setDescription('Absoluta api descrição')
        .setVersion('1.0')
        .addTag('absoluta')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

async function start () {
    const PORT = process.env.PORT || 4000
    const app = await NestFactory.create(AppModule)
    await app.listen(PORT, () => {
        console.log('123')
    })
}
start()
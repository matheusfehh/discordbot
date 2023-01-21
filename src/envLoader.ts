import { EnvType, load } from "ts-dotenv";

export class JorgeEnvHandler {
    static envHandler(): EnvType<any> {
        const botEnv = load({
            PUBLICKEY: String,
            APPID: String,
            PERMISSIONINTEGER: String,
            TOKEN: String
        });

        return botEnv;
    }
}


export interface IEnvSchema {
    PUBLICKEY: String,
    APPID: String,
    PERMISSIONINTEGER: String,
    TOKEN: String
}

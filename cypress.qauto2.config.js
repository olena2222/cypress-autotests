import { defineConfig} from "cypress";
import "dotenv/config";
import { config } from "dotenv";
import { baseConfig} from "./baseConfig";

config({path: `.env.qauto2`});
 const configObj={
    ...baseConfig, 
    e2e:{...baseConfig.e2e,
        baseUrl: process.env.BASE_URL,
    },
    env: {
    userEmail: process.env.USER_EMAIL,
    userPassword: process.env.USER_PASSWORD,
  }
 }
 export default defineConfig(configObj);
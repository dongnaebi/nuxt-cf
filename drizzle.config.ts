import { defineConfig } from 'drizzle-kit'
import fs from "fs";
import path from "path";


const getLocalD1 = () => {
  try {
    const basePath = path.resolve('.wrangler/state/v3/d1');
    const dbFile = fs
      .readdirSync(basePath, { encoding: 'utf-8', recursive: true })
      .find((f) => f.endsWith('.sqlite'));

    if (!dbFile) {
      throw new Error(`.sqlite file not found in ${basePath}`);
    }

    return path.resolve(basePath, dbFile);
  } catch (err) {
    console.log(`Error  ${err}`);
  }
}
const getCredentials = () => {
  const prod = {
    driver: 'd1-http',
    dbCredentials: {
      accountId: process.env.CLOUDFLARE_D1_ACCOUNT_ID,
      databaseId: process.env.CLOUDFLARE_DATABASE_ID,
      token: process.env.CLOUDFLARE_D1_API_TOKEN
    }

  }

  const dev = {
    dbCredentials: {
      url: getLocalD1()
    }
  }
  return process.env.CLOUDFLARE_DATABASE_ID ? prod : dev
}

export default defineConfig({
  dialect: 'sqlite',
  schema: './server/database/schema.ts',
  out: './server/database/migrations',
  ...getCredentials()
})

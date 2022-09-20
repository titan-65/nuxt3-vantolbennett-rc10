import { Client } from "@notionhq/client"
export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()
    
    const notion = new Client({ auth: config.notionSecretKey })
    const databaseId = config.notionCodeDatabase

    const database = await notion.databases.retrieve({
        database_id: databaseId,
        
    })

    console.log(database)
  return {
    data: {
          message: "Welcome to Nuxt3 Server API",
        database
    },
  };
});

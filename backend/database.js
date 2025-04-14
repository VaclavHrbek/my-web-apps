import { MongoClient } from "mongodb";
// Replace the uri string with your connection string.
const uri = "mongodb://root:example@database:27017";

export class Client {
    constructor(uri) {
        this.isConnected = false; 
        this.connect();
    }

    async connect() {
        try {
            this.client = new MongoClient(uri); 
            this.isConnected = true;
        } catch (error) {
            console.error(error);
        }
    }

    async get_all_todo_items() {
        if (!this.isConnected) {
            await this.connect();
        }
        const database = this.client.db("to-do");
        const collection = database.collection("to-do-items");
        const items = await collection.find({}).toArray();
        return items;
    }

    async add_todo_item(item) {
        if (!this.isConnected) {
            await this.connect();
        }
        const database = this.client.db("to-do");
        const collection = database.collection("to-do-items");
        const result = await collection.insertOne(item);
        return result;
    }

    disconnect() {
        this.client.close();
    }

    
}

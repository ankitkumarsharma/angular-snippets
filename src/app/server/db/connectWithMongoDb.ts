import mongoose from 'mongoose';
import { environment } from '../../../environments/environment';
const connectWithMongoDb = async () => {
    try {
        await mongoose.connect(environment.mongodbUri);
        console.log('connected to mongodb');
    } catch (err) {
        console.log(err);
    }
}

export default connectWithMongoDb;
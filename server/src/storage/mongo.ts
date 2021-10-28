import {
  Collection,
  Db,
  MongoClient,
  Document,
  InsertOneResult,
  UpdateResult,
  DeleteResult,
} from 'mongodb';
import { CategoryType } from 'types/category';

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST} = process.env;

const dbUrl =
  `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/?retryWrites=true&w=majority`;

const dbName = 'english-for-kids';

const collectionName = 'category';

const getMongoInstance = async (): Promise<Db> => {
  const client = await MongoClient.connect(dbUrl);
  return client.db(dbName);
};

const getCollection = async (): Promise<Collection> => {
  const db = await getMongoInstance();
  return db.collection(collectionName);
};

export const getAll = async (): Promise<Document[]> => {
  const collection = await getCollection();
  return collection.find({}).toArray();
};

export const getById = async (id: string): Promise<Document | null> => {
  const collection = await getCollection();
  return collection.findOne({ id });
};

export const create = async (
  category: CategoryType
): Promise<InsertOneResult<Document>> => {
  const collection = await getCollection();
  return collection.insertOne(category);
};

export const update = async (
  category: CategoryType
): Promise<Document | UpdateResult> => {
  const collection = await getCollection();
  const { id } = category;
  return collection.replaceOne({ id }, category);
};

export const remove = async (id: string): Promise<DeleteResult> => {
  const collection = await getCollection();
  return collection.deleteOne({ id });
};

import { buildSchema } from 'graphql';

// TODO: finalize
export default buildSchema(`
  type PostData {
    _id:Int,
    title:String
  }
  type RootQuery {
    posts: PostData
  }
  schema {
    query:RootQuery
  }
`);

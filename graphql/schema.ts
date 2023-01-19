import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Post {
    id: Int
    title: String
    markdown: String
    author: Author
    authorId: Int
    slug: String
    tags: [Tag]
    created_at: String
    updated_at: String
    likes: Int
  }

  type Tag {
    id: Int
    name: String
    posts: [Post]
  }

  type Author {
    id: Int
    name: String
    isAdmin: Boolean!
    posts: [Post]
  }

  type Query {
    posts: [Post]!
  }
`;

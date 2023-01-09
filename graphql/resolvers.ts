import { Post } from "@prisma/client";
import prisma from "../lib/prisma";

export const resolvers = {
  Query: {
    posts: async () => await prisma.post.findMany(),
  },
  Post: {
    author: (parent: Post) => {
      return prisma.post.findUnique({ 
        where: {
          id: parent.id
        },
      }).author();
    },
    tags: (parent: Post) => {
      return prisma.tag.findMany({
        where: {
          posts: {
            some: {
              postId: parent.id,
            },
          },
        },
      });
    },
  },
};

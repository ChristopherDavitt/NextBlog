import { useRouter } from "next/router";
import { ReactElement } from "react";
import BlogLayout from "../../../layout/BlogLayout";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from "next-mdx-remote";
import prisma from "../../../lib/prisma";

const Page = ({ source }) => {
  const router = useRouter();
  const slug = router.query.slug as string;
  return (<MDXRemote {...source } />);
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const source = await prisma.post.findUnique({
    where: {
      slug: slug,
    },
    select: {
      markdown: true,
    },
  })
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource }};
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <BlogLayout>
      {page}
    </BlogLayout>
  )
}
export default Page;
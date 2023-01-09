import { useRouter } from "next/router";
import { ReactElement } from "react";
import BlogLayout from "../../../layout/BlogLayout";

const Page = () => {
  const router = useRouter();
  const slug = router.query.slug as string;
  return (
    <>
      <div>
        <h1>
          Hello World, This is the Title {slug}
        </h1>
      </div>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <BlogLayout>
      {page}
    </BlogLayout>
  )
}
export default Page;
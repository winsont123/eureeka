export default async function blogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const postId = slug[0];
  const slug2 = slug[2];
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    if(!data.ok){
        return <div>Post Not Found</div>
    }

    const post = await data.json();

    return <div> {post.title}</div>


}
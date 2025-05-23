import { ExecOptionsWithStringEncoding } from "child_process"

interface Post{
    id : string,
    title : string,
    content : string,
    author : string,
    date : string,
    category : string
}

export default async function BlogPage() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts: Post[] = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
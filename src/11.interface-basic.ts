interface Post {
  title: string
  content: string
  subtitle?: string
  readonly summary: string
}

function printPost(post: Post) {
  console.log(post.title);
  console.log(post.content);
}

printPost({
  title: "hello",
  content: "typescript",
  summary: "summary"
})

interface Cache {
  [key:string]: string
}

const cache: Cache = {
  token: "YYYYYY"
}

export {}
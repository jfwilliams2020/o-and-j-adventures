import { Blog, getSortedBlogsData } from "@/lib/blogs"
import Link from "next/link"
import * as React from "react"

export const getStaticProps = async () => {
	const blogs = getSortedBlogsData()

	const props: BlogProps = {
		blogs
	}

	return {
		props: {
			blogs
		}
	}
}

interface BlogProps {
	blogs: Blog[]
}

const Blog = (props: BlogProps) => {
	return (
		<>
			<h1 className="text-3xl">Blogs</h1>
			{props.blogs.map(blog => (
				<Link key={blog.id} href={`/blogs/${blog.id}`}>{blog.id}</Link>
			))}
		</>
	)
}

export default Blog
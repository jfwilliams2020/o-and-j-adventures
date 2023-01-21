import { getAllBlogIds, getBlogData } from "@/lib/blogs"
import * as React from "react"
import { Blog } from "@/lib/blogs"

export const getStaticProps = async ({ params }: { params: { id: string }}) => {
	const blog = getBlogData(params.id)

	const props: BlogProps = {
		blog
	}

	return {
		props
	}
}

export const getStaticPaths = async () => {
	const paths = getAllBlogIds()

	return {
		paths,
		fallback: false
	}
}

interface BlogProps {
	blog: Blog
}

const Blog = (props: BlogProps) => {
	return (
		<>
			<p>{props.blog.content}</p>
		</>
	)
}

export default Blog
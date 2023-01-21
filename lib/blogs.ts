import { readdirSync, readFileSync } from "fs"
import path from "path"

const blogsDirectory = path.join(process.cwd(), "blogs")

export const getSortedBlogsData = () => {
	const fileNames = readdirSync(blogsDirectory)
	const blogsData = fileNames.map(fileName => {
		const id = fileName.replace(/\.txt$/, "")

		const fullPath = path.join(blogsDirectory, fileName)
		const content = readFileSync(fullPath, "utf8")

		const blog: Blog = {
			id,
			content
		}

		return blog
	})	

	return blogsData
}

export const getAllBlogIds = () => {
	const fileNames = readdirSync(blogsDirectory)

	return fileNames.map(fileName => {
		return {
			params: {
				id: fileName.replace(/\.txt$/, "")
			}
		}
	})
}

export const getBlogData = ( id: string ) => {
	const fullPath = path.join(blogsDirectory, `${id}.txt`)
	const content = readFileSync(fullPath, "utf8")

	const blog: Blog = {
		id,
		content
	}

	return blog
}

export type Blog = {
	id: string
	content: string
}
import Image from "next/image"
import Link from "next/link"
import * as React from "react"

const Navbar = () => {
	return (
		<div className="flex justify-between content-center p-2">
			<div>
				<Link href="/">Home</Link>
			</div>
			<div className="flex gap-2 flex-row">
				<Link className=" " href="/blog">Home</Link>
				<Link href="/blog">Blog</Link>
			</div>
		</div>
	)
}

export default Navbar
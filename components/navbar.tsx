import Link from "next/link"
import * as React from "react"

const Navbar = () => {
	return (
		<div className="flex justify-between content-center p-2">
			<div>
				<Link href="/">o + j</Link>
			</div>
			<div className="flex gap-5 flex-row">
				<Link href="/">home</Link>
				<Link href="/vlog">vlogs</Link>
				<Link href="/blog">blogs</Link>
				<Link href="/pod">pods</Link>
			</div>
		</div>
	)
}

export default Navbar
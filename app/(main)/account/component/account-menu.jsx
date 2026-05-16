"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menu = [
	{ label: "Profile", href: "/account" },
	{ label: "Enrolled Courses", href: "/account/enrolled-courses" },
];

function Menu() {
	const pathname = usePathname();

	return (
		<ul className="list-none sidebar-nav mb-0 mt-3" id="navmenu-nav">
			{menu.map((item, i) => (
				<li className="navbar-item account-menu mb-2" key={i}>
					<Link
						href={item.href}
						className={`navbar-link flex items-center py-2 px-4 rounded-md border transition ${
							pathname === item.href
								? "bg-slate-900 border-slate-800 text-indigo-400 hover:bg-slate-800"
								: "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-900 hover:text-indigo-400"
						}`}
					>
						<h6 className="mb-0 font-semibold">{item?.label}</h6>
					</Link>
				</li>
			))}

			<li className="navbar-item account-menu">
				<Link
					href="#" onClick={() => {signOut()}}
					className="navbar-link flex items-center py-2 px-4 rounded-md border border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-900 hover:text-indigo-400 transition"
				>
					<h6 className="mb-0 font-semibold">Sign Out</h6>
				</Link>
			</li>
		</ul>
	);
}

export default Menu;
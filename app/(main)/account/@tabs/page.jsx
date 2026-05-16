import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";

function Profile() {
	return (
		<>
			<div className="p-6 rounded-md shadow bg-slate-900 hover:bg-slate-800 transition border border-slate-800">
				<h5 className="text-lg font-semibold mb-4 text-slate-100">
					Personal Detail :
				</h5>

				<form>
					<div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
						<div>
							<Label className="mb-2 block text-slate-300">
								First Name : <span className="text-red-600">*</span>
							</Label>

							<Input
								type="text"
								placeholder="First Name:"
								id="firstname"
								name="name"
								required
								className="bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-500 focus-visible:ring-indigo-400"
							/>
						</div>

						<div>
							<Label className="mb-2 block text-slate-300">
								Last Name : <span className="text-red-600">*</span>
							</Label>

							<Input
								type="text"
								placeholder="Last Name:"
								name="name"
								required
								className="bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-500 focus-visible:ring-indigo-400"
							/>
						</div>

						<div>
							<Label className="mb-2 block text-slate-300">
								Your Email : <span className="text-red-600">*</span>
							</Label>

							<Input
								type="email"
								placeholder="Email"
								name="email"
								required
								className="bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-500 focus-visible:ring-indigo-400"
							/>
						</div>

						<div>
							<Label className="mb-2 block text-slate-300">
								Occupation :
							</Label>

							<Input
								name="name"
								id="occupation"
								type="text"
								placeholder="Occupation :"
								className="bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-500 focus-visible:ring-indigo-400"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1">
						<div className="mt-5">
							<Label className="mb-2 block text-slate-300">
								Description :
							</Label>

							<Textarea
								id="comments"
								name="comments"
								placeholder="Message :"
								className="bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-500 focus-visible:ring-indigo-400"
							/>
						</div>
					</div>

					<Button
						className="mt-5 bg-indigo-400 hover:bg-indigo-500 text-slate-950 font-medium"
						
					>
						<input type="submit" name="send" value="Save Changes" />
					</Button>
				</form>
			</div>

			<div className="p-6 rounded-md shadow bg-slate-900 hover:bg-slate-800 transition border border-slate-800 mt-[30px]">
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
					<div>
						<h5 className="text-lg font-semibold mb-4 text-slate-100">
							Contact Info :
						</h5>

						<form>
							<div className="grid grid-cols-1 gap-5">
								<div>
									<Label className="mb-2 block text-slate-300">
										Phone No. :
									</Label>

									<Input
										name="number"
										id="number"
										type="number"
										placeholder="Phone :"
										className="bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-500 focus-visible:ring-indigo-400"
									/>
								</div>

								<div>
									<Label className="mb-2 block text-slate-300">
										Website :
									</Label>

									<Input
										name="url"
										id="url"
										type="url"
										placeholder="Url :"
										className="bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-500 focus-visible:ring-indigo-400"
									/>
								</div>
							</div>

							<Button
								className="mt-5 bg-indigo-400 hover:bg-indigo-500 text-slate-950 font-medium"
								type="submit"
							>
								Add
							</Button>
						</form>
					</div>

					<div>
						<h5 className="text-lg font-semibold mb-4 text-slate-100">
							Change password :
						</h5>

						<form>
							<div className="grid grid-cols-1 gap-5">
								<div>
									<Label className="mb-2 block text-slate-300">
										Old password :
									</Label>

									<Input
										type="password"
										placeholder="Old password"
										required=""
										className="bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-500 focus-visible:ring-indigo-400"
									/>
								</div>

								<div>
									<Label className="mb-2 block text-slate-300">
										New password :
									</Label>

									<Input
										type="password"
										placeholder="New password"
										required=""
										className="bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-500 focus-visible:ring-indigo-400"
									/>
								</div>

								<div>
									<Label className="mb-2 block text-slate-300">
										Re-type New password :
									</Label>

									<Input
										type="password"
										placeholder="Re-type New password"
										required=""
										className="bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-500 focus-visible:ring-indigo-400"
									/>
								</div>
							</div>

							<Button
								className="mt-5 bg-indigo-400 hover:bg-indigo-500 text-slate-950 font-medium"
								type="submit"
							>
								Save password
							</Button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profile;
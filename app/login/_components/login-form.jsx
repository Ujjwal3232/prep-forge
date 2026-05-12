import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm w-full bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors duration-300">
      <CardHeader>
        <CardTitle className="text-2xl">
          <p className="mt-5 text-3xl font-bold leading-tight text-slate-100 sm:leading-tight sm:text-5xl lg:text-3xl lg:leading-tight font-pj">
            <span className="relative inline-flex sm:inline">
              <span className="bg-gradient-to-r from-indigo-400 via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
              <span className="relative">Login</span>
            </span>
          </p>
        </CardTitle>

        <CardDescription className="text-slate-400">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-slate-300">
              Email
            </Label>

            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-500 focus-visible:ring-indigo-400"
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password" className="text-slate-300">
                Password
              </Label>

              {/* <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link> */}
            </div>

            <Input
              id="password"
              type="password"
              required
              className="bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-500 focus-visible:ring-indigo-400"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-indigo-400 text-slate-950 hover:bg-indigo-500 transition-colors duration-300"
          >
            Login
          </Button>
        </div>

        <div className="mt-4 text-center text-sm text-slate-400">
          Don&apos;t have an account?{" "}
          <Link
            href="register"
            className="underline text-indigo-400 hover:text-indigo-500"
          >
            Register
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
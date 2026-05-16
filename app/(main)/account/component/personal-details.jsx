"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { updateUserInfo } from "@/app/actions/account";
import { toast } from "sonner";

const PersonalDetails = ({ userInfo }) => {
  // console.log(userInfo);
  const [infoState, setInfoState] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    designation: userInfo.designation,
    bio: userInfo.bio,
  });

  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    setInfoState({
      ...infoState,
      [field]: value,
    });
  };
  /// console.log(infoState);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await updateUserInfo(userInfo?.email, infoState);
      toast.success("User details updated successfully");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="p-6 rounded-md shadow bg-slate-900 hover:bg-slate-800 transition border border-slate-800">
      <h5 className="text-lg font-semibold mb-4 text-slate-100">
        Personal Detail :
      </h5>

      <form onSubmit={handleUpdate}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <Label className="mb-2 block text-slate-300">
              First Name : <span className="text-red-600">*</span>
            </Label>

            <Input
              type="text"
              placeholder="First Name:"
              id="firstName"
              name="firstName"
              value={infoState?.firstName}
              onChange={handleChange}
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
              id="lastName"
              name="lastName"
              value={infoState?.lastName}
              onChange={handleChange}
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
              id="email"
              name="email"
              value={infoState?.email}
              disabled
              className="bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-500 focus-visible:ring-indigo-400"
            />
          </div>

          <div>
            <Label className="mb-2 block text-slate-300">Occupation :</Label>

            <Input
              id="designation"
              name="designation"
              value={infoState?.designation}
              type="text"
              onChange={handleChange}
              placeholder="Occupation :"
              className="bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-500 focus-visible:ring-indigo-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div className="mt-5">
            <Label className="mb-2 block text-slate-300">Description :</Label>

            <Textarea
              id="bio"
              name="bio"
              value={infoState?.bio}
              onChange={handleChange}
              placeholder="Message :"
              className="bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-500 focus-visible:ring-indigo-400"
            />
          </div>
        </div>

        <Button className="mt-5 bg-indigo-400 hover:bg-indigo-500 text-slate-950 font-medium">
          <input type="submit" name="send" value="Save Changes" />
        </Button>
      </form>
      {/*end form*/}
    </div>
  );
};

export default PersonalDetails;

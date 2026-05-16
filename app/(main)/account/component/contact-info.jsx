"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateUserInfo } from "@/app/actions/account";
import { toast } from "sonner";

const ContactInfo = ({ userInfo }) => {

  const [contactState, setContactState] = useState({
    phone: userInfo?.phone || "",

    socialMedia: {
      github: userInfo?.socialMedia?.github || "",
      linkedin: userInfo?.socialMedia?.linkedin || "",
      twitter: userInfo?.socialMedia?.twitter || "",
      portfolio: userInfo?.socialMedia?.portfolio || "",
      youtube: userInfo?.socialMedia?.youtube || "",
    },
  });

  const handleChange = (event) => {

    const field = event.target.name;
    const value = event.target.value;

    setContactState({
      ...contactState,
      [field]: value,
    });
  };

  const handleSocialChange = (event) => {

    const field = event.target.name;
    const value = event.target.value;

    setContactState({
      ...contactState,

      socialMedia: {
        ...contactState.socialMedia,
        [field]: value,
      },
    });
  };

  const handleUpdate = async (event) => {

    event.preventDefault();

    try {
       
      await updateUserInfo(userInfo?.email, contactState);

      toast.success("Contact info updated successfully!");

    } catch (error) {

      toast.error(`Error: ${error.message}`);

    }
  };

  return (
    <div className="bg-slate-900 hover:bg-slate-800 transition border border-slate-800 rounded-md p-6">
      <h5 className="text-lg font-semibold mb-4 text-slate-100">
        Contact Info :
      </h5>

      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 gap-5">
          <div>
            <Label className="mb-2 block text-slate-300">Phone No. :</Label>

            <Input
              name="phone"
              id="phone"
              type="number"
              placeholder="Phone :"
              value={contactState?.phone}
              onChange={handleChange}
              className="bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-500 focus-visible:ring-indigo-400"
            />
          </div>

          <div>
            <Label className="mb-2 block text-slate-300">GitHub :</Label>

            <Input
              name="github"
              id="github"
              type="url"
              placeholder="GitHub URL :"
              value={contactState?.socialMedia?.github}
              onChange={handleSocialChange}
              className="bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-500 focus-visible:ring-indigo-400"
            />
          </div>

          <div>
            <Label className="mb-2 block text-slate-300">LinkedIn :</Label>

            <Input
              name="linkedin"
              id="linkedin"
              type="url"
              placeholder="LinkedIn URL :"
              value={contactState?.socialMedia?.linkedin}
              onChange={handleSocialChange}
              className="bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-500 focus-visible:ring-indigo-400"
            />
          </div>

          <div>
            <Label className="mb-2 block text-slate-300">Twitter/X :</Label>

            <Input
              name="twitter"
              id="twitter"
              type="url"
              placeholder="Twitter/X URL :"
              value={contactState?.socialMedia?.twitter}
              onChange={handleSocialChange}
              className="bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-500 focus-visible:ring-indigo-400"
            />
          </div>

          <div>
            <Label className="mb-2 block text-slate-300">Portfolio :</Label>

            <Input
              name="portfolio"
              id="portfolio"
              type="url"
              placeholder="Portfolio URL :"
              value={contactState?.socialMedia?.portfolio}
              onChange={handleSocialChange}
              className="bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-500 focus-visible:ring-indigo-400"
            />
          </div>

          <div>
            <Label className="mb-2 block text-slate-300">YouTube :</Label>

            <Input
              name="youtube"
              id="youtube"
              type="url"
              placeholder="YouTube URL :"
              value={contactState?.socialMedia?.youtube}
              onChange={handleSocialChange}
              className="bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-500 focus-visible:ring-indigo-400"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="mt-5 bg-indigo-400 hover:bg-indigo-500 text-slate-950 font-medium"
        >
          Save Contact Info
        </Button>
      </form>
    </div>
  );
};

export default ContactInfo;
"use client";

import { useEffect, useState } from "react";
import Accordion from "@/components//ui/Accordion";
import { fetchProfile } from "@/lib/fetch-profile";

function Projects() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchProfile();
        setProfile(data);
      } catch (error) {
        console.error("Failed to load profile");
      }
    };

    loadProfile();
  }, []);

  return (
    <div className="hidden md:flex flex-col items-start justify-between p-8 border-r w-[15%]">
      <div className="flex flex-col w-full">
        <h1 className="font-semibold text-xl">Projeler</h1>
        <div className="flex flex-col gap-y-5 pt-6 w-full">
          <Accordion title="Proje İsim 1" initialOpen={false} />
          <Accordion title="Proje İsim 2" initialOpen={false} />
          <Accordion title="Proje İsim 3" initialOpen={false} />
          <Accordion title="Proje İsim 4" initialOpen={false} />
        </div>
      </div>
      <div>
        {profile && (
          <>
            <p className="font-semibold text-lg">{profile.data.fullName}</p>
            <p>{profile.data.email}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Projects;

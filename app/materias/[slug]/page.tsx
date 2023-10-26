"use client"
import React from "react";
import {Tabs, Tab} from "@nextui-org/tabs";

export default function Page({ params }: { params: { slug: string } }) {
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger"
  ]
  return (
  <div>
    My Post: {params.slug}

    <div className="flex flex-wrap gap-4">
      {colors.map((color) => (
        <Tabs key={color} color={color} aria-label="Tabs colors" radius="full">
          <Tab key="photos" title="Photos"/>
          <Tab key="music" title="Music"/>
          <Tab key="videos" title="Videos"/>
        </Tabs>
      ))}
    </div>
  </div>
  );
}

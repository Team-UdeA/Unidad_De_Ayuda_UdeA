'use client'
import React from "react";
import {Tabs, Tab} from "@nextui-org/tabs";
import {Listbox, ListboxItem} from "@nextui-org/react";
import { IconWrapper } from "@/components/IconWrapper";
import { ItemCounter } from "@/components/ItemCounter";
import { BugIcon } from "@/components/BugIcon";
import { PullRequestIcon } from "@/components/PullRequestIcon";
import { ChatIcon } from "@/components/ChatIcon";
import { PlayCircleIcon } from "@/components/PlayCircleIcon";
import { LayoutIcon } from "@/components/LayoutIcon";
import {TagIcon} from "@/components/TagIcon"
import { UsersIcon } from "@/components/UsersIcon";
import { WatchersIcon } from "@/components/WatchersIcon";
import { BookIcon } from "@/components/BookIcon";
import { ChevronRightIcon } from "@/components/ChevronRightIcon";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function Sidebar(){
    return(
        <div>
            <Listbox
        aria-label="User Menu"
        onAction={(key) => alert(key)}
        className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
        itemClasses={{
          base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
        }}
      >
        <ListboxItem
          key="issues"          
          startContent={
            <IconWrapper className="bg-success/10 text-success">
              <BugIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Clases
        </ListboxItem>
        <ListboxItem
          key="pull_requests"
          startContent={
            <IconWrapper className="bg-primary/10 text-primary">
              <PullRequestIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Talleres
        </ListboxItem>
        <ListboxItem
          key="discussions"
          startContent={
            <IconWrapper className="bg-secondary/10 text-secondary">
              <ChatIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Parciales
        </ListboxItem>
        <ListboxItem
          key="actions"
          startContent={
            <IconWrapper className="bg-warning/10 text-warning">
              <PlayCircleIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Videos
        </ListboxItem>
        <ListboxItem
          key="projects"
          startContent={
            <IconWrapper className="bg-default/50 text-foreground">
              <LayoutIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Ejercicios
        </ListboxItem>
      </Listbox>
        </div>
    )
}
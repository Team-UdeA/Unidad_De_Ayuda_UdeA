'use client'
import React, { useState } from "react";
import {Tabs, Tab} from "@nextui-org/react";

export default function TapPartial(){
    return (
        <div className="flex flex-wrap gap-4">
            <Tabs color="success" aria-label="Tabs colors" radius="full">
            <Tab key="parcial1" title="Parcial 1"/>
            <Tab key="parcial2" title="Parcial 2"/>
            <Tab key="parcial3" title="Parcial 3"/>
            <Tab key="parcial4" title="Parcial 4"/>
            </Tabs>
        </div>
    )
}

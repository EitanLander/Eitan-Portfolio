"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(()=> {
        Crisp.configure("6a9e368e-7c14-4531-8f88-bd94246441a6");
    }, []);

    return null;
}
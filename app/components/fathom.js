"use client";

import { useEffect } from "react";
import * as Fathom from "fathom-client";

const FathomComponent = () => {
  useEffect(() => {
    Fathom.load("CGVCFOHS", {
      includedDomains: ["etherlink.com"],
      spa: "auto"
    });
  }, []);

  return null;
};


export default FathomComponent;
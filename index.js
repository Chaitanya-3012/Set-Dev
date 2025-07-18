#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const reactSetup = require("./commands/react");
const expressSetup = require("./commands/express");
const nextSetup = require("./commands/next");

const command = process.argv[2];

let jsonOutput, outputPath;
const helpJson = {
  usage: "npx set-dev [--react | --express | --next]",
  description: "Generate a starter JSON file for your chosen framework.",
  options: {
    "--react": "Get setup commands for a React project",
    "--express": "Get setup commands for an Express project",
    "--next": "Get setup commands for a Next.js project",
  },
};
if (command === "--react") {
  jsonOutput = reactSetup();
  outputPath = path.join(process.cwd(), "react-setup.json");
} else if (command === "--express") {
  jsonOutput = expressSetup();
  outputPath = path.join(process.cwd(), "express-setup.json");
} else if (command === "--next") {
  jsonOutput = nextSetup();
  outputPath = path.join(process.cwd(), "next-setup.json");
} else {
  console.log(JSON.stringify(helpJson, null, 2));
  process.exit(1);
}

fs.writeFileSync(outputPath, JSON.stringify(jsonOutput, null, 2));
console.log(`Setup JSON written to ${outputPath}`);

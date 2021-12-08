import { franc, francAll } from "franc";
import langs from "langs";
import colors from "colors";

const input = process.argv[2];
const langCode = franc(input);

if (langCode === "und") {
  console.log("Could not determine language, try adding more sample text.".red);
} else {
  const language = langs.where("3", langCode);
  console.log(`Our best guess is: ${language.name.blue}.`);
}

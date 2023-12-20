/**
 * 
 * @usage 
 * 
import abdiel from "@elioway/abdiel/promised";

abdiel().then((module) => {
  // Now you can access the functions and exports from "./src/index.js"
  // For example:
  module.stringCaseKebab("AbdielAsPromised");
}).catch((error) => {
  console.error("Error loading module:", error);
});
 */

export const abdiel = async () => await import("./src/index.js")

export default abdiel

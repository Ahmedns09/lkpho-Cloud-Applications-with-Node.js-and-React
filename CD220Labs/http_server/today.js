// Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    // let aestTime = new Date().toLocaleString("en-US", { timeZone: "Australia/Brisbane" });
    // let uaeTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" });
    let uaeTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" }));
    // return aestTime; // Return the formatted date and time
    return uaeTime; // Return the formatted date and time
};

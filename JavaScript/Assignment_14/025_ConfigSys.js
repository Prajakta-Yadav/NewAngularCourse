const config = {

    appName: "My App",

    timeout: 0,

    theme: undefined
};

const appName = config.appName ?? "Default App";
const timeout = config.timeout ?? 5000;
const theme = config.theme ?? "light";

console.log("App Name:", appName);
console.log("Timeout:", timeout);
console.log("Theme:", theme);

//?? is best for default values because it does not replace valid values like 0.
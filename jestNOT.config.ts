import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    preset: "ts-jest",
    verbose: true,
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
//   transform: { "^.+\\.(js|ts|tsx)$": "ts-jest" }
    // transform: { "^.+\\.tsx?$": "ts-jest" },
    testEnvironment: "jsdom",
};
export default config;

// Or async function
// export default async (): Promise<Config.InitialOptions> => {
//   return {
//     verbose: true,
//   };
// };
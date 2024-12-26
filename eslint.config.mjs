import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // Suppresses errors for unescaped characters
      "jsx-a11y/alt-text": "warn",         // Changes alt-text missing to a warning
      "@next/next/no-img-element": "off",  // Allows usage of <img> instead of <Image />
    },
  },
];

export default eslintConfig;

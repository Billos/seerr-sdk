import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input:
    "https://raw.githubusercontent.com/seerr-team/seerr/refs/heads/develop/seerr-api.yml",
  output: "./src",
  plugins: [
    { enums: true, name: "@hey-api/typescript" },
    {
      name: "@hey-api/sdk",
      client: "@hey-api/client-fetch",
      operations: {
        containerName: "{{name}}Service",
        strategy: "byTags",
      },
      responseStyle: "data",
    },
    {
      name: "@hey-api/client-fetch",
      throwOnError: true,
    },
  ],
});

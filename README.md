# seerr-sdk

A TypeScript SDK for [Seerr](https://seerr.dev/), automatically generated from the [official OpenAPI specification](https://github.com/seerr-team/seerr/blob/develop/seerr-api.yml).

## Installation

```bash
npm install @billos/seerr-sdk@1.0.0-sdk.5
```

## Usage

```typescript
import { createClient } from "@billos/seerr-sdk/client";
import { WatchlistService } from "@billos/seerr-sdk";

const client = createClient({
  auth: "your-api-token",
  baseUrl: "https://your-firefly-instance/api",
});

await WatchlistService.deleteWatchlistByTmdbId({
  client,
  path: { tmdbId: `329` },
  query: { mediaType: "movie" },
});
```

## SDK Generation

This SDK is generated using [@hey-api/openapi-ts](https://heyapi.dev/) from the Firefly III OpenAPI specification.

To regenerate the SDK:

```bash
npm install
npm run generate
```

To build:

```bash
npm run build
```

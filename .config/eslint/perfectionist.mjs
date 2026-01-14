/**
 * Perfectionist ESLint Config
 * @see https://perfectionist.dev
 *
 * Import order:
 * 1. type           → import type { X } from "react"
 * 2. type-internal  → import type { X } from "#types/..."
 * 3. type-relative  → import type { X } from "../..."
 * 4. builtin        → import fs from "fs"
 * 5. external       → import React from "react"
 * 6. subpath        → import { cn } from "#utils"
 * 7. internal       → import { api } from "@/lib/api"
 * 8. relative       → import { X } from "../..." | "./"
 * 9. side-effect    → import "./styles.css"
 */

import pluginPerfectionist from "eslint-plugin-perfectionist";

/** @type {import("eslint").Linter.Config[]} */
const perfectionistConfig = [
  {
    name: "tkhrv/perfectionist",
    plugins: {
      perfectionist: pluginPerfectionist,
    },
    rules: {
      // Export sorting
      "perfectionist/sort-exports": ["error", {
        order: "asc",
        type: "natural",
      }],

      // Import sorting
      "perfectionist/sort-imports": ["error", {
        order: "asc",
        type: "natural",
        newlinesBetween: "ignore",
        groups: [
          // 1. Type imports (internal subpath first)
          "type",
          "type-internal",
          ["type-parent", "type-sibling", "type-index"],

          // 2. Value imports
          "builtin",
          "external",
          "subpath",
          "internal",
          ["parent", "sibling", "index"],

          // 3. Side effects
          "side-effect",
          "unknown",
        ],
      }],

      // Named imports/exports sorting: { b, a } → { a, b }
      "perfectionist/sort-named-imports": ["error", { order: "asc", type: "natural" }],
      "perfectionist/sort-named-exports": ["error", { order: "asc", type: "natural" }],
    },
  },
];

export default perfectionistConfig;

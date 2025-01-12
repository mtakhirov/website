import type { RehypeShikiCoreOptions } from "@shikijs/rehype/core";

import {
  transformerMetaHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerRemoveLineBreak,
} from "@shikijs/transformers";
import { createHighlighterCore } from "shiki/core";

export const highlighterOptions: RehypeShikiCoreOptions = {
  theme: "vitesse-black",
  //
  inline: false,
  addLanguageClass: true,
  //
  transformers: [
    transformerNotationDiff(),
    transformerNotationFocus(),
    transformerNotationErrorLevel(),
    transformerNotationHighlight(),
    transformerRemoveLineBreak(),
    transformerMetaHighlight(),
  ],
};

export async function createHighlighter() {
  return await createHighlighterCore({
    themes: [import("@shikijs/themes/vitesse-black")],
    langs: [
      import("@shikijs/langs/typescript"),
      import("@shikijs/langs/ts"),
      import("@shikijs/langs/tsx"),
      import("@shikijs/langs/javascript"),
      import("@shikijs/langs/js"),
      import("@shikijs/langs/jsx"),
    ],
    loadWasm: import("shiki/wasm"),
  });
}

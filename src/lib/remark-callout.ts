/**
 * remark plugin: turns GitHub-style alerts into callout elements.
 *
 *   > [!TIP]
 *   > [!TIP/Custom title]
 *
 * Output (hast): <callout data-type="tip" data-title="Custom title">…</callout>
 * Rendered by the `callout` entry in the MDX component map.
 */

interface Node {
  type: string;
  children?: Node[];
  value?: string;
  data?: {
    hName?: string;
    hProperties?: Record<string, string>;
  };
}

const TYPES = ["note", "tip", "important", "warning", "caution"] as const;
const MARKER = /^\[!([A-Za-z]+)(?:\/([^\]]+))?\]\s*/;

export function remarkCallout() {
  return (tree: Node) => visit(tree);
}

function visit(node: Node): void {
  if (!node.children) return;
  for (const child of node.children) {
    if (child.type === "blockquote") transform(child);
    visit(child);
  }
}

function transform(blockquote: Node): void {
  const first = blockquote.children?.[0];
  const text = first?.children?.[0];
  if (!first || first.type !== "paragraph" || !text || text.type !== "text" || !text.value) return;

  const match = MARKER.exec(text.value);
  if (!match) return;

  const type = match[1]!.toLowerCase();
  if (!(TYPES as readonly string[]).includes(type)) return;

  text.value = text.value.slice(match[0].length);
  // Drop the (now empty) marker paragraph if nothing else was on that line.
  if (text.value.trim() === "" && first.children!.length === 1) {
    blockquote.children!.shift();
  }
  else if (text.value.startsWith("\n")) {
    text.value = text.value.replace(/^\n+/, "");
  }

  blockquote.data = {
    hName: "callout",
    hProperties: {
      "data-type": type,
      "data-title": match[2]?.trim() ?? "",
    },
  };
}

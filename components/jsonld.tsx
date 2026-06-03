/**
 * Renders a JSON-LD structured-data block as a server-side
 * <script type="application/ld+json">. Server component — emits no client JS.
 *
 * SAFETY (why this is not an XSS vector):
 * - The payload is ALWAYS our own builder output (lib/seo/schema.ts) — never
 *   user input, request data, or anything attacker-controlled. There is no
 *   untrusted content to sanitize.
 * - We JSON.stringify the data, so it is a data literal, not markup, and then
 *   neutralize every sequence that could break out of an HTML <script> element:
 *   `<` and `>` (blocks </script>, <!--, <script), `&` (blocks entity tricks),
 *   and the U+2028/U+2029 line separators (valid in JSON, illegal in JS source).
 * - This is the standard, recommended way to embed JSON-LD in React/Next.js;
 *   `<script>{json}</script>` cannot be used because React HTML-escapes the
 *   children and corrupts the JSON-LD.
 */

// U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR are valid inside JSON but
// illegal in a JS source literal, so we build their matchers from char codes —
// writing the raw characters here would itself break this file's parse.
const LINE_SEP = new RegExp(String.fromCharCode(0x2028), "g");
const PARA_SEP = new RegExp(String.fromCharCode(0x2029), "g");

/** Escape a JSON string for safe inclusion inside an HTML <script> element. */
function safeJsonForScript(value: Record<string, unknown> | Record<string, unknown>[]): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(LINE_SEP, "\\u2028")
    .replace(PARA_SEP, "\\u2029");
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- own-data only; all script-breakout sequences neutralized above
      dangerouslySetInnerHTML={{ __html: safeJsonForScript(data) }}
    />
  );
}

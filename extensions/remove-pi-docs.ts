import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const PI_DOCS_SECTION =
	/\n\nPi documentation \(read only when the user asks about pi itself, its SDK, extensions, themes, skills, or TUI\):\n- Main documentation: [^\n]*\n- Additional docs: [^\n]*\n- Examples: [^\n]*\n- When asked about: [^\n]*\n- When working on pi topics, [^\n]*\n- Always read pi \.md files completely[^\n]*/;

export default function piSlim(pi: ExtensionAPI) {
	let preservePiDocsForNextTurn = false;

	pi.registerCommand("pi", {
		description: "Run a request with Pi's built-in documentation guidance enabled",
		handler: async (args, ctx) => {
			const request = args.trim();
			if (!request) {
				ctx.ui.notify("Usage: /pi <request about Pi>", "warning");
				return;
			}

			if (!ctx.isIdle()) {
				ctx.ui.notify("Wait for the current response to finish before using /pi.", "warning");
				return;
			}

			preservePiDocsForNextTurn = true;
			pi.sendUserMessage(request);
		},
	});

	pi.on("before_agent_start", async (event) => {
		if (preservePiDocsForNextTurn) {
			preservePiDocsForNextTurn = false;
			return { systemPrompt: event.systemPrompt };
		}

		return {
			systemPrompt: event.systemPrompt.replace(PI_DOCS_SECTION, ""),
		};
	});
}

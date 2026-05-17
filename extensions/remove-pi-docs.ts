import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const PI_DOCS_SECTION =
	/\n\nPi documentation \(read only when the user asks about pi itself, its SDK, extensions, themes, skills, or TUI\):\n- Main documentation: [^\n]*\n- Additional docs: [^\n]*\n- Examples: [^\n]*\n- When asked about: [^\n]*\n- When working on pi topics, [^\n]*\n- Always read pi \.md files completely[^\n]*/;

const ENABLE_PI_DOCS_MARKER = "PI_SLIM_ENABLE_PI_DOCS";

export default function piSlim(pi: ExtensionAPI) {
	pi.registerCommand("pi", {
		description: "Run a request with Pi documentation guidance enabled",
		handler: async (args, ctx) => {
			if (!ctx.isIdle()) {
				ctx.ui.notify("Wait for the current response to finish before using /pi.", "warning");
				return;
			}

			const request = args.trim();
			pi.sendUserMessage(request ? `/skill:pi ${request}` : "/skill:pi");
		},
	});

	pi.on("before_agent_start", async (event) => {
		if (event.prompt.includes(ENABLE_PI_DOCS_MARKER)) {
			return { systemPrompt: event.systemPrompt };
		}

		return {
			systemPrompt: event.systemPrompt.replace(PI_DOCS_SECTION, ""),
		};
	});
}

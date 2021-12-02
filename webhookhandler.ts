import { WebhookRequestV3, WebhookResponseV3 } from ".";
declare function hook(
	req: WebhookRequestV3
): WebhookResponseV3 | undefined | void;
class DialogFlowCXWebhook {
	private handlers: {
		[key: string]: typeof hook;
	} = {};
	register(tag: string, handler: typeof hook): void {
		this.handlers[tag] = handler;
	}
	call(tag: string, req: WebhookRequestV3) {
		if (tag in this.handlers) {
			this.handlers[tag](req);
		} else {
			return undefined;
		}
	}
}
export { DialogFlowCXWebhook };

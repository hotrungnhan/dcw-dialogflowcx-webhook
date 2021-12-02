import {
	DialogFlowCXWebhook,
	FulfillmentResponseBuilder,
	WebhookRequestV3,
	WebhookResponseV3Builder
} from ".";
import assert from "assert";
const webhook = new DialogFlowCXWebhook();
const sample: WebhookRequestV3 = {
	detectIntentResponseId: "e152a1b9-7876-4341-ab3e-906f019c9524",
	intentInfo: {
		lastMatchedIntent:
			"projects/smooth-ocean-333606/locations/asia-northeast1/agents/f952f490-fed7-4547-8a43-4bfaecc84ffc/intents/33bcd2d1-95b6-4884-81b2-f74bc9fb6358",
		parameters: {
			name: {
				originalValue: "hook",
				resolvedValue: "hook"
			}
		},
		displayName: "test_webhook",
		confidence: 1
	},
	pageInfo: {
		currentPage:
			"projects/smooth-ocean-333606/locations/asia-northeast1/agents/f952f490-fed7-4547-8a43-4bfaecc84ffc/flows/00000000-0000-0000-0000-000000000000/pages/START_PAGE"
	},
	sessionInfo: {
		session:
			"projects/smooth-ocean-333606/locations/asia-northeast1/agents/f952f490-fed7-4547-8a43-4bfaecc84ffc/sessions/379db7-5d5-3f4-89c-14c9ee232",
		parameters: {
			"dien-tich-cao-nhat": null,
			"dien-tich-thap-nhat": null,
			"don-vi-dien-tich": null,
			"gia-cao-nhat": null,
			"gia-thap-nhat": null,
			"gioi-tinh": null,
			"hinh-thuc": null,
			"huong-nha": null,
			"khu-vuc": null,
			"loai-nha-dat": null,
			"nam-khoi-cong": null,
			"nam-sinh": null,
			name: "hook"
		}
	},
	fulfillmentInfo: {
		tag: "webhook-test"
	},
	text: "hook",
	languageCode: "vi"
};
webhook.register("webhook-test", (req) => {
	const fulfil = new FulfillmentResponseBuilder()
		.addText(["from webhook"])
		.build();
	return new WebhookResponseV3Builder().addFulfillmentResponse(fulfil).build();
});

assert(typeof webhook.call("webhook-test", sample) == "object");

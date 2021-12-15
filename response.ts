import {
	AudioSegments,
	FulfillmentResponse,
	MergeBehavior,
	PageInfo,
	SessionInfo
} from "./type";
import { Builder } from "./builder";
import { DialogflowPayloadBuilder } from "./DialogflowPayload";
import { FacebookMessengerCustomPayload } from "./FacebookPayload";

interface WebhookResponseV3 {
	// https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/WebhookResponse
	fulfillmentResponse?: FulfillmentResponse;
	pageInfo?: PageInfo;
	sessionInfo?: SessionInfo;
	payload?: unknown;
	targetPage?: string;
	targetFlow?: string;
}

class FulfillmentResponseBuilder extends Builder<FulfillmentResponse> {
	constructor() {
		super();
		this.data.messages = [];
	}
	addText(text: string[]) {
		this.data.messages.push({
			text: {
				text: text
			}
		});
		return this;
	}
	addConversationSuccess(metadata: unknown) {
		this.data.messages.push({
			conversationSuccess: {
				metadata: metadata
			}
		});
		return this;
	}
	addPayload(
		payload: DialogflowPayloadBuilder | FacebookMessengerCustomPayload | unknown
	) {
		this.data.messages.push({
			payload: payload
		});
		return this;
	}
	addOutputAudioText(
		text?: string,
		ssml?: string,
		allowPlaybackInterruption?: boolean
	) {
		this.data.messages.push({
			outputAudioText: {
				text: text,
				ssml: ssml,
				allowPlaybackInterruption: allowPlaybackInterruption
			}
		});
		return this;
	}
	addLiveAgentHandoff(metadata: unknown) {
		this.data.messages.push({
			liveAgentHandoff: {
				metadata: metadata
			}
		});
		return this;
	}
	addEndInteraction(audioUri: string, allowPlaybackInterruption?: boolean) {
		this.data.messages.push({
			endInteraction: {
				audioUri: audioUri,
				allowPlaybackInterruption: allowPlaybackInterruption
			}
		});
		return this;
	}
	setMixedAudio(segments: Array<AudioSegments>) {
		this.data.messages.push({
			mixedAudio: {
				segments: segments
			}
		});
		return this;
	}
	setTelephonyTransferCall(phoneNumber: string) {
		this.data.messages.push({
			telephonyTransferCall: {
				phoneNumber: phoneNumber
			}
		});
		return this;
	}
	setMergeBehavios(mergeBehavior: MergeBehavior) {
		this.data.mergeBehavior = mergeBehavior;
	}
}
class WebhookResponseV3Builder extends Builder<WebhookResponseV3> {
	addFulfillmentResponse(FulfillmentResponse: FulfillmentResponse) {
		this.data.fulfillmentResponse = FulfillmentResponse;
		return this;
	}
	addPageInfo(pageInfo: PageInfo) {
		this.data.pageInfo = pageInfo;
		return this;
	}
	addSessionInfo(sessionInfo: SessionInfo) {
		this.data.sessionInfo = sessionInfo;
		return this;
	}
	addPayload(payload: unknown) {
		this.data.payload = payload;
		return this;
	}
	addTargetPage(target: string) {
		this.data.targetPage = target;
		return this;
	}
	addTargetFlow(target: string) {
		this.data.targetFlow = target;
		return this;
	}
}
export { FulfillmentResponseBuilder, WebhookResponseV3Builder };
export type { WebhookResponseV3 };

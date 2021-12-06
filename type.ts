enum ParameterState {
	PARAMETER_STATE_UNSPECIFIED = "PARAMETER_STATE_UNSPECIFIED",
	EMPTY = "EMPTY",
	INVALID = "INVALID",
	FILLED = "FILLED"
}
enum MergeBehavior {
	MERGE_BEHAVIOR_UNSPECIFIED = "MERGE_BEHAVIOR_UNSPECIFIED",
	APPEND = "APPEND",
	REPLACE = "REPLACE"
}
interface FulfillmentInfo {
	tag: string;
}
interface ParameterInfo {
	displayName: string;
	required?: boolean;
	state: ParameterState;
	value?: unknown;
	justCollected?: boolean;
}
interface FormInfo {
	parameterInfo?: Array<ParameterInfo>;
}
interface PageInfo {
	currentPage?: string;
	formInfo?: FormInfo;
}
interface SessionInfo {
	session?: string;
	parameters?: {
		[key: string]: unknown;
	};
}
interface AudioSegments {
	allowPlaybackInterruption?: boolean;
	audio: string;
	uri: string;
}

interface ResponseMessage {
	text?: {
		// https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Text
		text: Array<string>;
		allowPlaybackInterruption?: boolean;
	};
	payload?: unknown;
	conversationSuccess?: {
		// https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#ConversationSuccess
		metadata: unknown;
	};
	outputAudioText?: {
		// https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#OutputAudioText
		allowPlaybackInterruption?: boolean;
		text?: string;
		//https://cloud.google.com/text-to-speech/docs/ssml
		ssml?: string;
	};
	liveAgentHandoff?: {
		// https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#LiveAgentHandoff
		metadata: unknown;
	};
	endInteraction?: {
		// https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#EndInteraction
		audioUri: string;
		allowPlaybackInterruption?: boolean;
	};
	mixedAudio?: {
		// https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#MixedAudio
		segments: Array<AudioSegments>;
	};
	telephonyTransferCall?: {
		// https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#telephonytransfercall
		phoneNumber: string;
	};
}
interface FulfillmentResponse {
	messages: Array<ResponseMessage>;
	mergeBehavior?: MergeBehavior;
}
interface IntentParameterValue {
	originalValue: string;
	resolvedValue: unknown;
}
interface IntentInfo {
	lastMatchedIntent: string;
	displayName: string;
	parameters?: {
		[key: string]: IntentParameterValue;
	};
	confidence: number;
}
interface SentimentAnalysisResult {
	score: number;
	magnitude: number;
}
interface Payload {
	[key: string]: unknown;
}
export {
	ParameterInfo,
	PageInfo,
	FormInfo,
	SessionInfo,
	AudioSegments,
	ResponseMessage,
	SentimentAnalysisResult,
	FulfillmentResponse,
	FulfillmentInfo,
	IntentInfo,
	IntentParameterValue,
	Payload
};

export { ParameterState, MergeBehavior };

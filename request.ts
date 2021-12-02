import {
	FulfillmentInfo,
	IntentInfo,
	PageInfo,
	ResponseMessage,
	SentimentAnalysisResult,
	SessionInfo
} from "./type";

interface WebhookRequestV3 {
	detectIntentResponseId: string;
	languageCode?: string;
	fulfillmentInfo: FulfillmentInfo;
	intentInfo?: IntentInfo;
	pageInfo?: PageInfo;
	sessionInfo?: SessionInfo;
	messages?: Array<ResponseMessage>;
	payload?: unknown;
	sentimentAnalysisResult?: SentimentAnalysisResult;
	// Union field query can be only one of the following:
	text?: string;
	triggerIntent?: string;
	transcript?: string;
	triggerEvent?: string;
	// End of list of possible types for union field query.
}
export { WebhookRequestV3 };

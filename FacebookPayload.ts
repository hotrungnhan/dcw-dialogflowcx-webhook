type AttachmentType = "audio" | "video" | "image" | "file";
interface Attachment {
	type: "audio" | "video" | "image" | "file";
	payload: {
		url: string;
	};
}
interface FacebookMessengerPayload {
	facebook: Attachment;
}
class FacebookMessengerCustomPayload {
	private static gen(type: AttachmentType, url: string) {
		return {
			facebook: {
				type: type,
				payload: {
					url: url
				}
			}
		} as FacebookMessengerPayload;
	}
	static getImage(url: string) {
		return FacebookMessengerCustomPayload.gen("image", url);
	}
	static getAudio(url: string) {
		return FacebookMessengerCustomPayload.gen("audio", url);
	}
	static getFile(url: string) {
		return FacebookMessengerCustomPayload.gen("file", url);
	}
	static getVideo(url: string) {
		return FacebookMessengerCustomPayload.gen("video", url);
	}
}
export { FacebookMessengerCustomPayload };
export type { Attachment, AttachmentType, FacebookMessengerPayload };
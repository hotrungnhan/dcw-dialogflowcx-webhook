import { Builder } from "./builder";
import { Payload } from "./type";
type AttachmentType = "audio" | "video" | "image" | "file";
interface Attachment {
	type: "audio" | "video" | "image" | "file";
	payload: {
		url: string;
	};
}
interface FacebookPayload {
	facebook: Attachment;
}
class FacebookPayload {
	private static gen(type: AttachmentType, url: string) {
		return {
			facebook: {
				type: type,
				payload: {
					url: url
				}
			}
		};
	}
	static getImage(url: string) {
		return FacebookPayload.gen("image", url);
	}
	static getAudio(url: string) {
		return FacebookPayload.gen("audio", url);
	}
	static getFile(url: string) {
		return FacebookPayload.gen("file", url);
	}
	static getVideo(url: string) {
		return FacebookPayload.gen("video", url);
	}
}
export { FacebookPayload };

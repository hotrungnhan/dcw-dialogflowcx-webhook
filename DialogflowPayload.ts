import { Builder } from "./builder";

interface DialogflowCustomPayload {
	richContent: Array<Array<Card>>;
}
interface Image {
	src: {
		raw: string;
	};
}
interface Icon {
	type: string;
	color: string;
}
abstract class Card {
	type: string;
	constructor(type: string) {
		this.type = type;
	}
}
class InfoCard extends Card {
	title: string;
	subtitle: string;
	image: Image;
	actionLink: string;
	constructor(
		title: string,
		subtitle: string,
		imageurl: string,
		actionLink: string
	) {
		super("info");
		this.title = title;
		this.subtitle = subtitle;
		this.actionLink = actionLink;
		this.image = { src: { raw: imageurl } };
	}
}
class TextCard extends Card {
	title: string;
	text: Array<string>;
	constructor(title: string, text: Array<string>) {
		super("description");
		this.title = title;
		this.text = text;
	}
}
class ImageCard extends Card {
	rawUrl: string;
	accessibilityText: string;
	constructor(rawUrl: string, accessibilityText: string) {
		super("image");
		this.rawUrl = rawUrl;
		this.accessibilityText = accessibilityText;
	}
}
class ButtonCard extends Card {
	icon: Icon;
	text: string;
	link: string;
	event: unknown;
	constructor(icon: Icon, text: string, link: string, event: unknown) {
		super("button");
		this.icon = icon;
		this.text = text;
		this.link = link;
		this.event = event;
	}
}
class ListCard extends Card {
	subtitle: string;
	title: string;
	event: unknown;
	constructor(subtitle: string, title: string, event: unknown) {
		super("list");
		this.subtitle = subtitle;
		this.title = title;
		this.event = event;
	}
}
class ListDivider extends Card {
	constructor() {
		super("divider");
	}
}
class AccordionCard extends Card {
	title: string;
	subtitle: string;
	image: Image;
	text: string;
	constructor(title: string, subtitle: string, imageUrl: string, text: string) {
		super("accordion");
		this.image = {
			src: {
				raw: imageUrl
			}
		};
		this.title = title;
		this.subtitle = subtitle;
		this.text = text;
	}
}
class SuggestionChipOption {
	text: string;
	image: Image;
	link: string;
	constructor(text: string, link: string, imageUrl: string) {
		this.text = text;
		this.image = {
			src: {
				raw: imageUrl
			}
		};
		this.link = link;
	}
}
class SuggestionChipCard extends Card {
	options: Array<SuggestionChipOption>;
	constructor(options: Array<SuggestionChipOption>) {
		super("chips");
		this.options = options;
	}
}
class DialogflowPayloadBuilder extends Builder<DialogflowCustomPayload> {
	constructor() {
		super();
		this.data.richContent = [];
	}
	addCard(card: Card | Array<Card>) {
		if (card instanceof Card) {
			this.data.richContent.push([card]);
		} else {
			this.data.richContent.push(card);
		}
		return this;
	}
}
export type { Card, Image, Icon };
export {
	SuggestionChipOption,
	InfoCard,
	TextCard,
	ImageCard,
	ButtonCard,
	ListCard,
	ListDivider,
	AccordionCard,
	SuggestionChipCard,
	DialogflowCustomPayload,
	DialogflowPayloadBuilder
};

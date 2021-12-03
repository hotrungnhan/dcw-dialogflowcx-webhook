# DCW | Dialogflow-CX-Webhook

## Package for interation with dialog cx by webhook

Very easy to use and integrate to any restfull api framework web library such as express, fastify,...

## 📖 Features

Route-base experience handler like restfull api.

## 📖 Tutorial

### First declare a route in you restfull api.

```js
//pathto/taga.js write any file you want;
const {
	WebhookResponseV3Builder,
	FulfillmentResponseBuilder
} = require("dcw-dialogflowcx-webhook");
function handleTagA(req) {
	//you must return webhook respone object , which is create by WebhookResponseV3Builder;

	// do your logic here
	let fullfilment = new FulfillmentResponseBuilder().addText([
		"hello stupid bot?"
	]);
	return new WebhookResponseV3Builder().addFulfillmentResponse(fullfilment);
}
module.exports = handleTagA;
```

```js
//controller/webhook.js
const DialogFlowCXWebhook =
	require("dcw-dialogflowcx-webhook").DialogFlowCXWebhook;
const DialogFlowCXWebhook =
	require("dcw-dialogflowcx-webhook").DialogFlowCXWebhook;
const webhook = new DialogFlowCXWebhook();
/**
 * @param tag is which we provide to diaflow webhook.
 */
//register many tag handler here;
webhook.register("some-tag", require("./pathto/taga"));

var express = require("express");
var router = express.Router();

// middleware that is specific to this router
router.post((req, res, next) => {
	const resp = webhook.call(req.body);
	res.json(resp);
	next();
});
module.exports = router;
```

## 📖 Development

## 📖 Contribute to the documentation

1. Go into the docs folder
2. Install dependencies using yarn install
3. Start development server using yarn dev

## 📖 License

Copyright (c) [Ho Trung Nhan](github.com/hotrungnhan)

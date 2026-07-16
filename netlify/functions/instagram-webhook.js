exports.handler = async function (event) {
  // GET — vérification Meta
  if (event.httpMethod === "GET") {
    const params = event.queryStringParameters || {};
    const mode = params["hub.mode"];
    const receivedToken = (params["hub.verify_token"] || "").trim();
    const challenge = params["hub.challenge"];
    const expectedToken = (process.env.INSTAGRAM_VERIFY_TOKEN || "").trim();

    // Debug : visible dans les logs Netlify (Functions → instagram-webhook)
    console.log("hub.mode reçu :", mode);
    console.log("hub.verify_token reçu :", JSON.stringify(receivedToken));
    console.log("INSTAGRAM_VERIFY_TOKEN attendu :", JSON.stringify(expectedToken));
    console.log("Tokens identiques :", receivedToken === expectedToken);

    if (mode === "subscribe" && receivedToken === expectedToken) {
      return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: challenge,
      };
    }

    return { statusCode: 403, body: "Forbidden" };
  }

  // POST — transmission à Make sans attendre la réponse
  if (event.httpMethod === "POST") {
    const makeUrl = process.env.MAKE_WEBHOOK_URL;

    if (makeUrl) {
      fetch(makeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: event.body,
      }).catch(() => {});
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: "EVENT_RECEIVED",
    };
  }

  return { statusCode: 405, body: "Method Not Allowed" };
};

exports.handler = async function (event) {
  // GET — vérification Meta
  if (event.httpMethod === "GET") {
    const params = event.queryStringParameters || {};
    const mode = params["hub.mode"];
    const token = params["hub.verify_token"];
    const challenge = params["hub.challenge"];

    if (mode === "subscribe" && token === process.env.INSTAGRAM_VERIFY_TOKEN) {
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
      // Fire-and-forget : on n'await pas pour éviter les timeouts Meta
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

import { MiddlewareHandler, Env } from 'hono';
import { verifyKey } from 'discord-interactions';

const verifyKeyMiddleware =
  (): MiddlewareHandler<{ Bindings: Env }> => async (c, next) => {
    const signature = c.req.header('X-Signature-Ed25519');
    const timestamp = c.req.header('X-Signature-Timestamp');
    const body = await c.req.raw.clone().text();
    const isValidRequest =
      signature &&
      timestamp &&
      verifyKey(body, signature, timestamp, c.env.DISCORD_PUBLIC_KEY);
    if (!isValidRequest) {
      console.log('Invalid request signature');
      return c.text('Bad request signature', 401);
    }
    return await next();
  };

export { verifyKeyMiddleware };
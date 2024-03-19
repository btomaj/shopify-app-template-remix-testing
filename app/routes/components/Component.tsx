import type { ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "~/shopify.server";

export async function action({ request }: ActionFunctionArgs) {
  await authenticate.admin(request);

  return null;
}

export function Component() {

  return (
    <div />
  );
}
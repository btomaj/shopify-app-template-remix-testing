import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  const { redirect } = await authenticate.admin(request);

  return redirect("/app/");
};

export default function Test() {
  return null;
}
import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
  }
  const password = req.body.password;

  if (process.env.PASSWORD_PROTECT === password) {
    const cookie = serialize("login", "true", {
      path: "/",
      httpOnly: true,
    });
    res.setHeader("Set-Cookie", cookie);
    return res.status(200).end();
  } else {
    return res.status(400).send("Wrong password");
  }
}

import { redirect } from "next/navigation";

export const metadata = {
  title: "Cyber Ethos Security & Ops Review",
  description: "Cyber Ethos review request path.",
};

export default function SignIn() {
  redirect("/");
}

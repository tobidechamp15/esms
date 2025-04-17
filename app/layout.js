import Head from "next/head";
import "./globals.css";
import ClientOnly from "@/components/ClientOnly";

export const metadata = {
  title: "Oluwatobiloba Portfolio",
  description:
    "Showcasing the projects and skills of Oluwatobiloba, a dedicated and passionate developer specializing in web development and design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <body>
        <ClientOnly>{children}</ClientOnly>
      </body>
    </html>
  );
}

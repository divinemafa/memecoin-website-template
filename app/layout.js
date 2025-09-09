import "./globals.css";

export const metadata = {
  title: "Bitty - The Official Bitcoin Meme Mascot",
  description: "Join Bitty in spreading Bitcoin joy and memes. Explore lore, a vast meme gallery, and engage with the community spreading the orange pill.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}

// Force static generation for all pages
export const dynamic = 'force-static';

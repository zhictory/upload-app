import "./globals.css";

export const metadata = {
  title: "UploadThing App",
  description: "https://uploadthing.com/dashboard/wzz82b17p8",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

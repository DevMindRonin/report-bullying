import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Report Bullying",
  description: "Report Bullying Application",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="d-flex flex-column min-vh-100">{children}</div>
      </body>
    </html>
  );
}

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Dane's Blog</title>
      </head>
      <body>
        <h1>Welcome to my blog</h1>
        {children}
      </body>
    </html>
  );
}

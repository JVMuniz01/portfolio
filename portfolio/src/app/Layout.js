export const metadata = {
  title: "Meu Portfólio",
  description: "Site do João Victor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
      </head>
      <body>{children}</body>
    </html>
  );
}
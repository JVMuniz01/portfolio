import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Meu Portfólio",
  description: "Site do João Victor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />   {/* aparece em todas as páginas */}
        {children}   {/* aqui entra o conteúdo da page.js */}
        <Footer />   {/* aparece em todas as páginas */}
      </body>
    </html>
  );
}
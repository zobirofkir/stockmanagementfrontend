import FooterComponent from "@/components/FooterComponent";
import "./globals.css";

export const metadata = {
  title: "Stock Management",
  description: "Stock Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <footer>
          <FooterComponent />
        </footer>
      </body>
    </html>
  );
}

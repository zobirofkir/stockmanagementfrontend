
"use client"; 

import FooterComponent from "@/components/FooterComponent";
import { Provider } from "react-redux";
import store from "@/redux/store/store";
import "./globals.css";
import HeadComponent from "@/components/Head/HeadComponent";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HeadComponent />
      <body className="bg-gray-100">
        <Provider store={store}>
          {children}
        </Provider>
        <footer>
          <FooterComponent />
        </footer>
      </body>
    </html>
  );
}

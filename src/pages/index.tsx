import { default as HomePage } from "./Home";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function App() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between${roboto.className}`}
    >
      <HomePage />
    </main>
  );
}

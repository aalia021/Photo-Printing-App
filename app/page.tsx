import PhotoPrintCard from "../app/components/PhotoPrintCard";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4 md:p-10">
        <PhotoPrintCard />
      </main>

      <Footer />
    </div>
  );
}

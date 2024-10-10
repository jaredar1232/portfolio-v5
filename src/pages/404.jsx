import Link from "next/link";
import { SEO } from "../components/SEO";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-gray-600 py-60">
          404 PAGE NOT FOUND
        </h1>
        <p className="text-3xl text-gray-500">
          You look a little lost friend, let me take you&nbsp;
          <Link href="/" className="text-lightSeaGreen no-underline hover:underline">
            home
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

export const Head = () => <SEO title="404" description="404 page" />
import { WifiIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bottom-0 bg-[#2c54ea] p-10 text-white">
      <div className="container mx-auto grid grid-cols-2 gap-8 sm:grid-cols-1 lg:grid-cols-4">
        <div>
          <h2 className="mb-2 text-4xl font-bold">Pluto</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ultricies mi in ipsum vehicula lacinia. Iner porttitor ac libero
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a className="hover:underline" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Our Service
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Pages</h3>
          <ul className="space-y-2">
            <li>
              <a className="hover:underline" href="#">
                Our Blog
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Our Team
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Testimonial
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                CTA
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a className="hover:underline" href="#">
                Facebook
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Instagram
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Dribbble
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Behance
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

"use client";
import { Fragment, useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../../components/ui/navbar-menu";
import { Cn } from "../../lib/utils";
import UserData from "../../../data.json";
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={Cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 p-4",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="SERVICES">
          <div className="flex flex-col space-y-4 text-sm">
            {UserData.services.map((item) => {
              return (
                <Fragment key={item.id}>
                  <HoveredLink href={`/services/${item.slug}`}>
                    {item.title}
                  </HoveredLink>
                </Fragment>
              );
            })}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="PROJECTS">
          <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Audio E-commerce"
              href="https://audio-phile-e-commerce.vercel.app/"
              src="./assets/Audiophile.png"
              description="Aduio Products Website For E-commerce"
            />
            <ProductItem
              title="professional Portfolio"
              href="https://mainportfolioo.netlify.app/"
              src="./assets/portfolioPage.png"
              description="professional Portfolio template can be used for Multiple Careers"
            />
            <ProductItem
              title="Brand Portfolio"
              href="https://elbhhery.github.io/Brand-Template/"
              src="./assets/BrandName.png"
              description="professional company website template"
            />
            <ProductItem
              title="Kasper"
              href="https://elbhhery.github.io/kasper-design/"
              src="./assets/kasper.png"
              description="A landing page desgined for practice"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="ABOUT">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">About Me</HoveredLink>
            <HoveredLink href="/contact">Contact Me</HoveredLink>
            <HoveredLink href="/faq">FAQ</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

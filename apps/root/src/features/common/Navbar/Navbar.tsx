import Image from 'next/image';
import Link from 'next/link';

interface IMenuItem {
  label: string;
  href: string;
  active: boolean;
}

interface ISocialItem {
  alt: string;
  href: string;
  src?: string;
  icon?: React.ReactNode;
}

interface INavbarProps {
  label?: string;
  menu?: IMenuItem[];
  social?: ISocialItem[];
}

export default function Navbar({ label = 'aikoicu', menu = [], social = [] }: INavbarProps) {
  return (
    <>
      <nav className="border-1 border-neutral-focus fixed left-0 right-0 top-8 z-10 mx-auto flex w-4/5 justify-around rounded-3xl py-4 shadow-xl backdrop-blur-3xl">
        <div className="flex items-center">
          <Link className="cursor-pointer" href="#">
            <h3 className="text-2xl font-medium text-blue-500">{label}</h3>
          </Link>
        </div>

        <div className="hidden items-center space-x-8 lg:flex">
          {menu.map(({ href, label, active }) => (
            <Link
              key={label}
              className={`flex cursor-pointer transition-colors duration-300 ${
                active ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'
              }`}
              href={href}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-5">
          {social.map(({ alt, href, src, icon }) => (
            <Link
              key={alt}
              className="flex cursor-pointer text-gray-600 transition-colors duration-300 hover:text-blue-500"
              href={href}
            >
              {src ? (
                <Image alt={alt} height={24} src={src} width={24} />
              ) : (
                <div className="flex h-6 w-6 items-center justify-center">{icon}</div>
              )}
            </Link>
          ))}
        </div>
      </nav>
      <div
        style={{
          height: 'calc(100vh - 31rem)',
        }}
      />
    </>
  );
}

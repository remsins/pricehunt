import Image from 'next/image'
import Link from 'next/link'

const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'search' },
  { src: '/assets/icons/black-heart.svg', alt: 'heart' },
  { src: '/assets/icons/user.svg', alt: 'user' },
]

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav flex justify-between items-center px-4 py-2">
        {/* Combine logo, text and icons in ONE flex container */}
        <div className="flex items-center justify-between w-full">
          
          {/* Logo and Title */}
          <div className="flex items-center gap-2">
            <Image 
              src="/assets/icons/logo.svg"
              width={40}
              height={40}
              alt="logo"
            />
            <p className="text-lg font-semibold">
              Price<span className="text-primary">Hunt</span>
            </p>
          </div>

          {/* Nav Icons */}
          <div className="flex items-center gap-5">
            {navIcons.map((icon) => (
              <Image
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                width={27}
                height={27}
                className="object-contain"
              />
            ))}
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar
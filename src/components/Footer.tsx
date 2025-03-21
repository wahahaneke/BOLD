import Link from "next/link";

/**
 * 页脚组件
 * 提供网站底部导航和版权信息
 * @returns {JSX.Element} 页脚组件
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-toby-black py-12 px-4 border-t border-toby-green-900/20">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-toby-green-400 font-archivo text-xl mb-4">BOLD TURTLE</h3>
            <p className="text-gray-400 max-w-xs mb-4">
              Join the BOLD community and be part of this exciting journey!
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://t.me/boldportalxyz" label="Telegram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.1 18c-.4 0-.3-.15-.6-.4l-2.5-1.9c-1.2.35-1.5-.3-1.5-.3l.3-3.1c.3-.3 1.2-1.3 1.2-1.3.3-.3 1.2-1.1 1.2-1.1.7-.6 1.4-1.2 1.4-1.2.8-.65 2.1-1.65 2.1-1.65 0 0 .25-.15.25.2 0 .2-.1.65-.2.9l-3 9.7c-.15.45-.35.15-.6.15zm7.85-14.2s.3.15.2.6l-1.1 5.4-2.4 3.5v.1l-1.25 1.9s-.1.15-.3.15c-.15 0-.25-.15-.25-.15-.1-.15-.1-.3-.1-.3 0-.1 2.25-7.15 2.35-7.35.1-.2.15-.5.55-.5.25 0 2.3 1.65 2.3 1.65z"></path>
                </svg>
              </SocialLink>
              <SocialLink href="https://twitter.com/boldturtle" label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </SocialLink>
              <SocialLink href="https://dexscreener.com/solana/8bjikkzel672yumyoznuda66aj4t8wjczk4pblmvucuu" label="DEX">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z"></path>
                  <path d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"></path>
                </svg>
              </SocialLink>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-archivo text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <FooterLink href="/#">Home</FooterLink>
              <FooterLink href="/#how-to-buy">How to Buy</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-archivo text-lg mb-4">CONTRACT</h3>
            <div className="bg-toby-darkbg rounded p-3 mb-4">
              <p className="text-gray-400 font-mono text-sm break-all">
                Hxh5JQY45Aas92Ag3KTeZfcxQf1hnD1ZpoMk5cKBpump
              </p>
            </div>
            <p className="text-gray-400 text-sm">
              Always verify the contract address before transactions.
            </p>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} BOLD Turtle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/**
 * 社交媒体链接组件
 */
function SocialLink({ href, children, label }: { href: string; children: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-400 hover:text-toby-green-400 transition-colors"
    >
      {children}
    </Link>
  );
}

/**
 * 页脚链接组件
 */
function FooterLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-gray-400 hover:text-toby-green-400 transition-colors block py-1"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    </li>
  );
}

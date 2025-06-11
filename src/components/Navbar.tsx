import { useState, useEffect } from 'react'
import isglogo from '../assets/logo/logo.png'
import '../App.css'

function Navbar() {  
    
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
      console.log(theme)
      document.documentElement.setAttribute('class', theme)
    }
    
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Example breakpoint
      };
  
      handleResize(); // Initial check
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
        <div className="header">
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '1em'}}>
            
            <a href="https://github.com/isg32" target="_blank" rel="noopener noreferrer" style={{fontFamily: 'NType82-Headline', fontSize: '24px', lineHeight: '1.2', marginLeft: "var(--gap)"}}>
                Sapan Gajjar 
            </a>
            
            <button id="theme-toggle" accessKey="t" title="(Alt + T)" onClick={toggleTheme}>
                    {theme === 'dark' ? (
                    <svg color='var(--primary)' id="moon" xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>) : (
                    <svg color='var(--primary)' id="sun" xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>)}
      </button>
      </div>
      <div style={{marginRight: "auto", margin: "var(--gap)"}}>      
      {isMobile ? (
        <>
                <a href="/posts"> 
                    <svg width="1em" height="1em" className="block lg:hidden w-6" data-icon="ic:baseline-text-snippet">   <symbol id="ai:ic:baseline-text-snippet" viewBox="0 0 24 24"><path fill="currentColor" d="m20.41 8.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.42M7 7h7v2H7zm10 10H7v-2h10zm0-4H7v-2h10z"></path></symbol><use href="#ai:ic:baseline-text-snippet"></use>  </svg>
                </a>
                
                <a href="/about"> 
                    <svg width="1em" height="1em" className="w-6" data-icon="ic:outline-person">   <symbol id="ai:ic:outline-person" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"></path></symbol><use href="#ai:ic:outline-person"></use>  </svg>
                </a>
            </>
      ) : (
        <>
                    <a href="/posts"> 
                        <span>Posts</span>
                        <svg color='var(--primary)' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></svg>
                        </a>
                    
                    <a href="/about"> 
                        <span>About</span>
                        <svg color='var(--primary)' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></svg>
                        </a>
                </>
      )}
      </div>
    </div>
    )
}

export default Navbar
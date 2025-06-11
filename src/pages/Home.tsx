import '../App.css'

function Homepage() {
  return (
    <>
     <div className="main">
        <div className="card-content">  
            <img draggable={false} src="https://avatars.githubusercontent.com/u/95901240" alt="isg32's avatar" style={{width: '150px', height: '150px', objectFit: 'cover', borderRadius: '100%'}}/>
        </div>
        
        <div><h1 style={{lineHeight: '1.2', marginTop: '0em',marginBottom: '0em',fontFamily: 'nDot-JP'}}>Sapan S. Gajjar</h1>
        <span style={{fontSize: '18px',lineHeight: '1.6'}}>CS undergrad | Flutter | AOSP | GNU/Linux | C++ | Rust</span></div>


        <button className='khara-button' onClick={() => window.open('https://github.com/isg32', '_blank')}>
          <span>Github</span>
          <svg color='var(--primary)' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></svg>
        </button>
        <p>
        <code>Welcome Voyager to the home of isg32 (Sapan Gajjar / semisapeol)</code>
        </p>
      </div>
    </>
  )
}

export default Homepage


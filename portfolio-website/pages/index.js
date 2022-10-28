import Head from 'next/head'
import Image from 'next/image'
import myPic from '../public/6-YonelaMakhubalo.jpg'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Yonela Makhubalo</title>
        <meta name="description" content="My first next.js application" />
      </Head>

      <header>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </header>

      <main className="main">
      <div className="intro">
            <div className="intro-text">
                <h1>Yonela Makhubalo</h1>
                <button><a href="#portfolio">Portfolio</a></button>
            </div>
            <div className="image">
                {/* <Image className='img' src={myPic} /> */}
            </div>
        </div>
        <div id="portfolio" className="content">
            <h2>Portfolio</h2>
            <div className="cards">
                <div className="card">
                    <div className="content-img">
                        <a href="https://yonelaken.github.io/weather-app/" target="_blank" rel="preconnect prefetch">
                            {/* <Image src="assests/images/weather-app.png" height="100%" alt="Portfolio website image"/> */}
                            </a>
                    </div>
                    <p>Weather APP</p>
                </div>
                <div className="card">
                    <div className="content-img">
                        <a href="https://yonelaken.github.io/todo-app/" target="_blank" rel="preconnect prefetch"> 
                        {/* <Image src="assests/images/todo-app.png" height="100%" alt="TODO app image"/> */}
                        </a>
                    </div>
                    <p>TODO APP</p>
                </div>
            </div>
        </div>
        <div id="about">
            <h2>About</h2>
        </div>
        <div id="contact" className="contact-section">
            <div>
                <p><b>Get in contact with me!</b></p>
            </div>
            <button><a href="https://www.linkedin.com/in/yonela-makhubalo-4464b9192"
                    target="_blank">Linkedin</a></button>
            <button> <a href="https://github.com/YonelaKen/" target="_blank">Github</a></button>
            <button><a href="mailto:yonelakennymakhubs@gmail.com" target="_blank">Send Email</a></button>
        </div>
      </main>
      <footer>
        <p>Copyright <span>&#169</span> Yonela Makhubalo</p>
    </footer>
    </div>
  )
}

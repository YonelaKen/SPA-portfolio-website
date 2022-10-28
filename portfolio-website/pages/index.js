import Head from "next/head";
import Image from "next/image";
import myPic from "../public/assets/images/6-YonelaMakhubalo.jpg";
import cafeImg1 from "../public/assets/images/cafe-img/cafe-1.jpeg";
import cafeImg2 from "../public/assets/images/cafe-img/cafe-2.jpeg";
import cafeImg3 from "../public/assets/images/cafe-img/cafe-3.jpeg";
import moveImg1 from "../public/assets/images/movies-img/movie-1.jpeg";
import moveImg2 from "../public/assets/images/movies-img/movie-2.jpeg";
import moveImg3 from "../public/assets/images/movies-img/movie-3.jpeg";
import devConImg1 from "../public/assets/images/dev-con/java-1.jpg";
import devConImg2 from "../public/assets/images/dev-con/java-2.jpg";
import devConImg3 from "../public/assets/images/dev-con/nodeJsOne-1.jpg";
import devConImg4 from "../public/assets/images/dev-con/nodeJSOne.png";

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Yonela Makhubalo</title>
				<meta
					name="description"
					content="My first next.js application"
				/>
			</Head>

			<header>
				<ul>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#why-sovtech">Why SovTech</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</header>

			<main className="main">
				<div className="intro">
					<div className="intro-text">
						<h1>Yonela Makhubalo</h1>
						<p>Hi, I am a full stack software developer.</p>
					</div>
					<div className="image">
						<Image
							className="img"
							width={300}
							height={450}
							src={myPic}
              alt="A picture of me"
						/>
					</div>
				</div>
				<div id="about">
					<div>
						<h1>About</h1>
					</div>
					<h2>My love for Computers:</h2>
					<p>
						I am a 21 year old final year student at WeThinkCode_. I
						always have had a love for computers way before I even
						knew what is Software. Growing up in a area where the
						only access we had to computers was through internet
						cafes that meant that was where I spent most of my time
						but I was playing games and surfing the net.
					</p>
					<div className="content">
						<div className="cards">
							<div className="card">
								<div className="content-img">
									<Image
										src={cafeImg1}
										width={144}
										height={100}
										alt="image of a internet cafe"
									/>
								</div>
							</div>
							<div className="card">
								<div className="content-img">
									<Image
										src={cafeImg2}
										width={144}
										height={100}
										alt="image of a internet cafe"
									/>
								</div>
							</div>

							<div className="card">
								<div className="content-img">
									<Image
										src={cafeImg3}
										width={144}
										height={100}
										alt="image of a internet cafe"
									/>
								</div>
							</div>
						</div>
					</div>

					<h2>How did I develop the love for programming:</h2>
					<p>
						It's always been movies that sold me the dream of being
						a programmer from <strong>'The Matrix'</strong> when Neo
						was interacting with the terminal even though I didn't
						even know what it was back then as I was only about 10
						years old, the only that mattered to me was that it
						looked really cool. To <strong>'Hackers'</strong> and	<strong>'Unfriended: Dark Web'</strong> this is where I
						got introduced to what is code which lead me to do
						research and actually find out that programming is real
						thing and not just something from the movies. And from
						that day I told my 15 year old self that I am going to
						be a programmer by fire by force and bare in mind I have
						never meet anyone who is developer in real life and
						never seen code in real life.
					</p>
					<div className="content">
						<div className="cards">
							<div className="card">
								<div className="content-img">
									<Image
										src={moveImg1}
										width={144}
										height={100}
										alt="Hackers movie cover"
									/>
								</div>
								<p>Hackers</p>
							</div>
							<div className="card">
								<div className="content-img">
									<Image
										src={moveImg2}
										width={144}
										height={100}
										alt="The Matrix movie cover"
									/>
								</div>
								<p>The Matrix</p>
							</div>

							<div className="card">
								<div className="content-img">
									<Image
										src={moveImg3}
										width={144}
										height={100}
										alt="Unfriend Dark Web movie cover"
									/>
								</div>
								<p>Unfriended Dark Web</p>
							</div>
						</div>
					</div>

					<h2>Beginning my journery as a Programmer:</h2>
					<p>
						2019 after getting my matric result I set out to purse a
						Diploma in Software Development and that is when I wrote
						my first programme and yes it was hello world but I felt
						electric. Unfortantly I could not complete my studies
						due to financial reason. Instead of giving up on my
						dream I set out to find alternatives on how can still
						pursue my dream, which lead to finding out about
						WeThinkCode_. I applied the first time but unfortantly I
						did not get accepted so I decided to spend the rest of
						the year learning Java and Python by self building
						simple programms and this was way before I even knew
						that git was the proper way to version control your
						code. But never the less I applied again for the second
						time and got accepted to be part of cohort 2021 and I am
						currently a final year student now.
					</p>

					<div id="why-sovtech">
						<h1>Why do I want to a developer at SovTech:</h1>
					</div>
					<p>
						I knew SovTech is where I want to begin my journey as a
						Software Developer from the day they came to partner day
						at WeThinkCode_. They had ticked all the boxes I had in
						my head from the conversation we had with the Noami and
						the rest of the staff that were present that day.</p>

					<p>
						With the graduate programme being a place that fosters
						learning and growth in safe space but also giving hands
						on experience to solve to real world problems. Also
						allowing me to wear many hats with the rotational setup,
						the exposure to multiple technologies is great for me.
						As I do believe in keeping up the times in the field is
						very important. And sharing that experience with people
						that are as passionate about the field as I am would be
						phenomenal.
					</p>

					<p>
						Upon doing further research and finding the Sovtech Spex
						I knew for certain that Sovtech is the right choice. As
						I strongly believed in the smile, adapt, tech and
						results spex the most. Having dropped out of college
						after the first year due to financial issues I initially
						thought my career in Software field had came to an end
						before it even began but I never gave up and after
						applying two times before getting admitted to the 2021
						chorot at WeThinkCode_. My passion for the field is
						still going strong and getting admitted to the graduatte
						programme would be icing on the cake and kick off my
						career in the space with a bang.
					</p>
				</div>

				<div id="about">
					<div>
						<h1>My new found love for dev cons</h1>
					</div>
					<p>
						I recently attended my first dev con this year in
						September. And all I have to say is that I love them, if
						I could I would attend them as much as possible. It's
						the one place whereby I can be a nerd in peace.
					</p>
					<div className="content">
						<div className="cards">
							<div className="card">
								<div className="content-img-dev-con">
									<Image
										className="img"
										src={devConImg1}
										width={200}
										height={250}
										alt="A picture of me at a I Code Java Confrence"
									/>
								</div>
								<p>I Code Java Confrence</p>
							</div>

							<div className="card">
								<div className="content-img-dev-con">
									<Image
										className="img"
										src={devConImg3}
										width={200}
										height={250}
										alt="A picture of me at a NodeJsOne Africa Confrence"
									/>
								</div>
								<p>NodeJsOne Africa Confrence</p>
							</div>

							<div className="card">
								<div className="content-img-dev-con">
									<Image
										className="img"
										src={devConImg4}
										width={200}
										height={250}
										alt="A picture of me at a NodeJsOne Africa Confrence"
									/>
								</div>
								<p>NodeJsOne Africa Confrence</p>
							</div>
						</div>
					</div>
				</div>
				<div id="contact" className="contact-section">
					<div>
						<p>
							<b>Get in contact with me!</b>
						</p>
					</div>
					<button>
						<a
							href="https://www.linkedin.com/in/yonela-makhubalo-4464b9192"
							target="_blank"
						>
							Linkedin
						</a>
					</button>
					<button>
						<a href="https://github.com/YonelaKen/" target="_blank">
							Github
						</a>
					</button>
					<button>
						<a
							href="mailto:yonelakennymakhubs@gmail.com"
							target="_blank"
						>
							Send Email
						</a>
					</button>
				</div>
			</main>
			<footer>
				<p>Copyright © Yonela Makhubalo</p>
			</footer>
		</div>
	);
}

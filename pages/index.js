/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// TODO: import Nunito to improve CLS?

export default function Home() {
  return (
    <>
      <Head>
        <title>Homaro</title>
        <meta name="description" content="A public benefit company, governed by the people." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <svg viewBox="0 0 150 50" width="300" height="100">
          <g transform="translate(-367.5 -468.2)">
            <path fill="#ff1a2d00" d="M367.5 468.2h150v50h-150z" />
            <circle cx="413" cy="496.9" r="8.8" fill="#ff1a2d00" stroke="#ff1a2d00" strokeLinejoin="round" strokeMiterlimit="7.1" strokeWidth="9.4" />
            <text x="375.9" y="505.6" fill="#fff" strokeLinejoin="round" strokeMiterlimit="7.1" strokeWidth="5" fontFamily="Nunito" fontSize="35.3" fontWeight="700">Homaro</text>
            <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="7.1" strokeWidth="4.5" d="M407 511.7h-35.2v-37.2H407v7.7" />
          </g>
        </svg>
        {/* <img
          src="/homaro-logo.svg"
          alt="Homaro Logo"
          width={300}
          height={100}
        /> */}
        <h2>A Benefit Company</h2>
      </header>
      <main className={styles.main}>
        <h3>{"This company does not yet exist, but it will soon. Here's the gist"}</h3>
        <p>{"While there are a number of goals that Homaro seeks to acomplish (enumorated upon in the footnotes) there are three goals in particular that will chart our course, at least in the beginning. In order of increasing importance:"}</p>
        <ul>
          <li>Consumer privacy and security</li>
          <li>Benefit-focused market expansion</li>
          <li>Democratization of corporate governance</li>
        </ul>
        <p>As elaborated upon below, our first step and MVP will be a privacy focused consumer apps platform. The second step will be an open-minded search for markets where social benefit can generated, and the expansion into those markets. The foundation (step zero) is an experiment which ends in the dissolution of the company, if it is deemed necessary by the share and stakeholders.</p>

        <h3>Consumer privacy and security</h3>
        <p>{"The first product and service by Homaro will be "}<a href="https://datums.app">Datums</a>{", the app store that doesn't want to know anything about you. Our initial collection of basic apps, including a to-do list, habit tracker, finance tracker, and period tracker, will always be free to use. In addition, we will offer in-house developed single-time and subscription-based apps for purchase. We also make it easy for app developers to build on our platform and monetize their creations. Data will client-side encrypted and  offline-first, with a hosting service provided by the company for a reasonable and "}<a href="#transparency">transparent price.<sup>[1]</sup></a></p>
        <p>No app on the platform will ever have access to the data it receives or creates, because it will be client-side encrypted. All apps added to the store will be audited before deployment. Homaro will never have access to any meaningful data unless, in the future, new features allow sharing meaningful data after the user has granted their informed consent.</p>
        <h3>Benefit-focused market expansion</h3>
        <p>Web-based software will always play a major role in Homaro products and services, due to its ease of access and ability to quickly build and innovate. But the point is not to create software, it is to produce benefit wherever the opportunity is found. By spreading awareness of Homaro&apos;s mission, building consumer trust, and never—ever—violating that trust, we hope to jump into new markets, each time an opportunity for the company to prove itself trustworthy, and each time a little bit easier than the last.</p>
        <p>How will we build public trust? By treating people with respect wherever possible. This will involve privacy policies and terms of service that are simple and short, <a href="#compensation">egalitarian employee compensation,<sup>[2]</sup></a> informed-consent op-in features, truth in advertising, and so on.</p>
        <p>In which markets will we choose to expand? Initially, wherever a software solution offers low-hanging fruit, and wherever consumers are treated with disrespect. This should provide ample opportunity to grow the company. Potential avenues may include open-source voting software, tools or services for local journalism, event planning for charity organizations and other non-profit groups, services to support small farms, developing-world (or developed) microlending, mobile pet spaying, etc.</p>
        <h3>Democratization of corporate governance</h3>
        <p>{"Homaro will be an experiment in corporate governance. Policy and direction of a typical public company is voted on by its shareholders, with each shareholder's vote being proportional to how much stock they own (commonly known as the \"one share, one vote\" principle). In addition to a group having \"one share, one vote\", Homaro will have a second group following a \"one shareholder, one vote\" principle, wherein each partial owner of the company has equal voting power, regardless of how many shares they own."}</p>
        <p>{"In addion to the shareholders, a public benefit company must also take into account its stakeholders. Therefore, in addition to the two share(holder) groups, there will be two stake(holder) groups as well. The first will consist of every registered user of Homaro products or services, each having an equal vote. The second will consist of every registered user who has paid for Homaro products or services, each having a vote proportional to how much they have paid. A majority vote from all four groups will be required for policy to be passed."}</p>
        <p>{"As much power as possible will be vested in these four voting groups. They will elect the chief officers, they will elect boards of directors, and they will have the ability to dissolve the company should it be deemd unable to accomplish its mission."}</p>
        <p>{"There are obvious drawbacks to such a system, perhaps the most obvious being a reduced ability to innovate, or quickly respond to change. While there are ways to mitigate this issue (such as making policy proposal and voting available online with automatic deadlines), the point of Homaro is not to maximize profit, but rather place as much power in the hands of ordinary people as possible. The results should speak for themselves."}</p>
        <h3>In summary</h3>
        <p>Homaro will be something different, and with that comes uncertainty. Change can be scary, and it is hard to know what to do when in foreign waters, facing a current of social scrutiny. Our hope is that the mission will be convincing enough to fight that current and face new territory bravely, because we know what we&apos;re doing is the right thing to do.</p>
        <h3>FAQ</h3>
        <h4>What does &quot;homaro&quot; mean?</h4>
        <p>&quot;Homaro&quot; is <a href="https://en.wikipedia.org/wiki/Esperanto">Esperanto</a> for &quot;humanity&quot;. &quot;Esperanto&quot; in English means &quot;one who hopes&quot;.</p>
        <h4>Where can I reach you?</h4>
        <p>If you have questions, concerns, feedback, or interest in participating in this expierment, please reach out to <a href="mailto:info@homaro.co">info at homaro.co</a>. We can&apos;t do this without the help of others, and we hope in the kindness of strangers.</p>
        {/* <p>{"It's time to do something revolutionary, and I hope that you take part."}</p> */}
        <h3>Footnotes</h3>
        <ol>
          <li id='transparency'>Operational transparency is an area in which we would like to explore. There are obvious questions and challenges that this would pose for a company. Would people want to work where all their emails are published online? How would we navigate salaries? How transparent is too transparent, or is that even possible? Homaro would like to tackle these questions and challenges in order to instill public trust and foster better behavior. In the instance of product and service pricing, we would provide the information and decisions made which informed the final price, including justification for the profit margin.</li>
          <li id="compensation">While the share, stake, and holder groups will ultimately decide upon how much everyone at Homaro gets paid, as a matter of principle the salary structure should be as flat as possible. Perhaps the groups will vote on an annual compensation budget, as well as the relative weights assigned to each role.</li>
        </ol>
      </main>
      <div className={styles.newYorkLovesYou}>
        NY❤️U
      </div>
    </>
  )
}

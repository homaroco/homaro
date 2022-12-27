import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Homaro</title>
        <meta name="description" content="The public benefit corporation of the people, by the people, for the people" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Image
          src="/homaro-logo.svg"
          alt="Homaro Logo"
          width={300}
          height={100}
        />
        <h2>A public benefit company</h2>
      </header>
      <main className={styles.main}>
        <p>This company does not yet exist, but it will soon. Here's the gist:</p>
        <p>Homaro will be an experiment in corporate governance. Policy and direction of a typical public company is voted on by its shareholders, with each shareholder's vote being proportional to how much stock they own (commonly known as the "one share, one vote" principle). Homaro will expand this concept to multiple voting groups. In addition to a group having "one share, one vote", another group will follow a "one shareholder, one vote" principle, wherein each partial owner of the company has equal voting power, regardless of how many shares they own. A majority vote from both groups will be required for policy to be passed.</p>
        <p>But this is only half the story. A public benefit company must also take into account the stakeholders. Therefore, in addition to the two shareholder groups, there will be two stakeholder groups as well. The first will consist of every registered user of Homaro products or services, each having an equal vote. The second will consist of every registered user who has paid for Homaro products or services, each having a vote proportional to how much they have paid. A majority vote from all four groups will be required for policy to be passed.</p>
        <p>There are obvious drawbacks to such a system, perhaps the most obvious being a reduced ability to innovate, or quickly respond to change. While there are ways to mitigate this issue (such as making policy proposal and voting available online with automatic deadlines), the point of Homaro is not to maximize profit, but rather place as much power in the hands of ordinary people as possible. The results should speak for themselves.</p>
        <p>If you have questions, concerns, feedback, or interest in participating in this expierment, please reach out to <a href="mailto:trav@homaro.co">trav [at] homaro.co</a>.</p>
        <p>It's time to do something revolutionary, and I hope that you take part.</p>
        {/* <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </>
  )
}

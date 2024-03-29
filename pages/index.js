import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Hulu App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Header */}
            <Header />
            {/* Nav */}
            {/* Contents */}
        </div>
    );
}

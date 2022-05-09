import Document, {Html, Head,  Main, NextScript} from "next/document"

class MyDocument extends Document {
        render(){
            return <Html lang="en">
                <Head>
                <link rel="preload" href="/fonts/PatrickHand-Regular.ttf" as="font" crossOrigin="anonymous"/>
                </Head>
                <body>
                    <Main></Main>
                    <NextScript/>
                </body>
            </Html>
        }
}

export default MyDocument;
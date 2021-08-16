import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* <title>Yeender || Yeender is the best digital marketing agency in Toronto, Canada. We've SEOs,
                        Graphic Designers, Web & App developers in our team to offer you a smooth
                        experience with Yeender.
                    </title> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
import Head from 'next/head';
import Uploader from '../components/Uploader';
import Preview from '../components/Preview';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AI Image Resizer - Free Online Tool</title>
        <meta name="description" content="Resize and compress images with AI optimization" />
      </Head>

      <h1>AI Image Resizer</h1>
      <Uploader />
      <Preview />
    </div>
  );
}

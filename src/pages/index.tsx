import Dashboard from '@/components/Dashboard';
import Sidebar from '@/components/Sidebar';
import Stack from '@mui/material/Stack';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mavi IHM</title>
        <meta name="description" content="Mavi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            width: "100%",
            maxWidth: '1024px',
            maxHeight: '600px',
          }}
        >
          <Sidebar />
          <Dashboard />
        </Stack>
      </main>
    </>
  )
}

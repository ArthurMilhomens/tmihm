import Sidebar from "@/components/Sidebar";
import { Stack } from "@mui/material";
import Head from "next/head";

export default function Cameras() {
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
                        height: '600px',
                        maxWidth: '1024px',
                        maxHeight: '600px',
                    }}
                >
                    <Sidebar />
                </Stack>
            </main>
        </>
    );
}
import Sidebar from "@/components/Sidebar";
import { Stack } from "@mui/material";
import Head from "next/head";
import { Suspense } from "react";
import Loading from "./loading";

export default function Route() {
    return (
        <>
            <Head>
                <title>Mavi IHM</title>
            </Head>
            <main>
                <Suspense fallback={<Loading />}>
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
                    </Stack>
                </Suspense>
            </main>
        </>
    );
}
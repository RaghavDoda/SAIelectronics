import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signIn, getSession } from "next-auth/react";

export default function Example() {
    const router = useRouter();
    const [loading, setLoading] = useState(true); // Local state to manage loading state

    useEffect(() => {
        const checkSession = async () => {
            const session = await getSession();
            console.log(session)
            if (session) {
                // If user is authenticated, redirect based on email
                if (session.user.email === "raghavdoda2@gmail.com") {
                    router.push("/admin"); // Redirect to admin if email matches
                } else {
                    router.push("/"); // Redirect to home for other users
                }
            } else {
                setLoading(false); // Set loading to false if no session
            }
        };

        checkSession();
    }, [router]);

    const googlesignin = async () => {
        await signIn("google", { callbackUrl: "https://saielectronics-ko4ehhiks-raghav03dodagmailcoms-projects.vercel.app" });
    };

    const githubsignin = async () => {
        await signIn("github", { callbackUrl: "https://saielectronics-ko4ehhiks-raghav03dodagmailcoms-projects.vercel.app" });
    };

    // Show loading state while checking session
    if (loading) {
        return <div>Loading...</div>; // You can customize this loading state
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <button
                    type="button"
                    onClick={googlesignin}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Log in with Google
                </button>
                <button
                    type="button"
                    onClick={githubsignin}
                    className="flex w-full justify-center mt-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Log in with Github
                </button>
            </div>
        </div>
    );
}

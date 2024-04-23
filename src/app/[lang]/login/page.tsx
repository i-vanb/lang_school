import Login from "./login";

export default async function page({ params, searchParams}: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const {sign} = searchParams!;

    return (
        <div className="flex justify-center items-center h-screen">
            <Login isSignUp={!!sign}  />
        </div>
    )
}

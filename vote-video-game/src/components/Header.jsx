import { Logo } from "./Logo";

export function Header() {
    return (
        <header className="w-full py-5 flex items-center justify-center bg-yellow-100/30 rounded-md">
            <h1 className="text-gray-800 font-bold text-2xl">Console Game Awards</h1>
            <Logo />
        </header>
    )
}
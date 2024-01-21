import Link from "next/link";

export default async function Header() {
    // console.log(session);   // 로그인 로그아웃 상태 확인

    return (
        <header id="header" role="banner">
            <div className="logo">
                <h1><em>Hy</em>uplog</h1>
            </div>
            <nav className="nav">
                <div className="menu">menu</div>
            </nav>
        </header>
    )
}
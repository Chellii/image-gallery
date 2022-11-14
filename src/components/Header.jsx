import { HeaderStyle } from "./styles/Header.style"
import { signOut } from "next-auth/react";

const Header = () => {
    return (
        <HeaderStyle>
            <h3 >IMGs</h3>
            <button onClick={signOut}>LOG OUT</button>
        </HeaderStyle>
    )
}

export default Header;
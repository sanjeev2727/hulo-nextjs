import Image from "next/image";
import { HomeIcon } from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

function Header() {
    return (
        <header>
            <div>
                <HeaderItem title="HOME" Icon={HomeIcon} />
            </div>
            <Image
                className="object-contain"
                src="https://links.papareact.com/ua6"
                width={200}
                height={100}
            />
        </header>
    );
}

export default Header;

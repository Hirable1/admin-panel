import Link from "next/link";

function SidebarOption({ title, Icon, link }) {
    return (
        <Link href={link} passHref>
            <div className="sidebar-option">
                <Icon className="h-5 w-5" />
                <p>{title}</p>
            </div>
        </Link>
    );
}

export default SidebarOption;

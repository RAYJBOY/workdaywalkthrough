import '../styles/navbar.css'

export interface link {
    displayName: string;
    link: string;
}

interface NavBarProps {
    links: link[];
}

export const NavBar: React.FC<NavBarProps> = ({links}) => {
    
    return (
    <>
        <div className='outterContainer'>
            {links.map((item) => (
                <a href={item.link}>
                    <span className="navBarItem">{item.displayName}</span>
                </a>
            ))}
        </div>
    </>
    )
}
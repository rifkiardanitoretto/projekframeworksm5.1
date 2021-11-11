import Link from 'next/link'
export const Submenu = ({link,menu}) => {
    return (
        <>
           <li className="nav-item active">
                                <Link href={link}>   
                                <a className="nav-link" >{menu} </a>
                                </Link>
                            </li>
        </>
    )
}

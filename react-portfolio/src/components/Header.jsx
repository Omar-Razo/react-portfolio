import NavTabs from './Navigation'

export default function Header() {
    return (
        <div className='header'>
            <h1 className='display-1'>Omar Razo</h1>
            {<NavTabs />}
        </div>
    )
}
import css from './Layout.module.css'

const Layout = ({children}) => {
    return (
        <main className={css.contaiter}>{children}</main>
    )
}

export default Layout
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
const Layout = ({ children }) => {
    return (
        <>
            <style jsx="true">{`
                .aside-wrap{
                    display:flex;  
                }
                .aside-right{
                    border-radius: 30px;
    padding: 0 22px;
    min-width: 0;
    min-height: 100vh;
    --bg-opacity: 1;
    background-color: #f1f5f8;
    flex: 1 1 0%;
    padding-bottom: 2.5rem;
                }
           `}</style>
            <div className="aside-wrap">
                <Sidebar />
                <aside className="aside-right">
                    <Header />
                    <main>
                        {children}
                        asdasd
                    </main>
                    <Footer />
                </aside>
            </div>
        </>
    )
}


export default Layout
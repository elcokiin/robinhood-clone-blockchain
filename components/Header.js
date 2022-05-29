import React from 'react';
import Image from "next/image";
import logo from '../assets/logo.png';
import { AiOutlineSearch } from "react-icons/ai";

const styles = {
    container: "flex w-screen h-16 bg-black px-24 py-3 mb-5 fixed",
    leftHeader: "flex flex-1",
    logo: "object-cover cursor-pointer",
    rightHeader: "flex items-center justify-end text-white gap-8",
    searchWrapper: "flex flex-1",
    searchInputContainer: 
        "text-white items-center hidden flex-1 -ml-64 border border-gray-400 mr-64 hover:bg-[#1E2123] duration-300 p-3 round-lg 2xl:flex",
    searchIcon: "text-gray-400 text-3xl mr-3",
    searchInputWrapper: "text-gray-400 text-lg w-full",
    searchInput: "bg-transparent outline-none w-full",
    menuItem: "cursor-pointer font-bold px-4 hover:text-green-500 duration-300",
}

const Header = () => {
    const isAuthenticated = true;
    const formattedAcount = "0x12...0";

    return (
        <div className={styles.container}>
            <div className={styles.leftHeader}>
                <Image src={logo} height={100} width={100} className={styles.logo}/>
            </div>
            <div className={styles.searchWrapper}>
                <div className={styles.searchInputContainer}>
                    <AiOutlineSearch className={styles.searchIcon} />
                    <div className={styles.searchInputWrapper}>
                        <input 
                            className={styles.searchInput} 
                            type="text" 
                            placeholder="Search..." 
                        />
                    </div>
                </div>
            </div>
            <div className={styles.rightHeader}>
                <a className={styles.menuItem}>Rewards</a>
                <a className={styles.menuItem}>Portafolio</a>
                <a className={styles.menuItem}>Catsh</a>
                <a className={styles.menuItem}>Messages</a>
                {isAuthenticated ? (
                    <>
                        {/* format account */}
                        <div className={styles.menuItem}>{formattedAcount}</div>
                        <button className={styles.menuItem} onClick={()=>{}}>
                            Logout
                        </button>
                    </>
                ): (
                    <button className={styles.menuItem} onClick={() => connectWallet()}>
                        Login
                    </button>
                )}
            </div>
        </div>
    )
}

export default Header;
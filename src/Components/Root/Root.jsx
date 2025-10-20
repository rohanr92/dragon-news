import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import LeftAside from '../Left/LeftAside';
import RightAside from '../RightAside/RightAside';

const Root = () => {
    return (
        <div>
            <Header />

            <section className="w-11/12 mx-auto grid grid-cols-12 mt-[30px] gap-[5px]">
                <aside className="border border-amber-400 col-span-3">
                    <LeftAside />
                </aside>

                <div className="border border-amber-600 col-span-6">
                    <Outlet />
                </div>

                <aside className="border border-amber-300 col-span-3">
                    <RightAside />
                </aside>
            </section>
        </div>
    );
};

export default Root;

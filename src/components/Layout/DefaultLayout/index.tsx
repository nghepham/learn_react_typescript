import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

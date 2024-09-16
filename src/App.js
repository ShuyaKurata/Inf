import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Project1 from './pages/Projects/Project1';
import './styles.css';
import Logo from './pages/Logo';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 3秒後にローディング状態を解除
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // 3000ミリ秒 (3秒)

        // クリーンアップ
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {/* {isLoading ? (  // ローディング中はロゴを表示
                <div className="loading-screen">
                    <Logo />
                </div>
            ) : (  // ローディングが終わったらアプリを表示 */}
            <Router>
                <Header />
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/" element={<HomePage />} />
                    {/* プロジェクト */}
                    <Route path="/projects/project1" element={<Project1 />} />

                </Routes>
                <Footer />
            </Router>
            )};
        </div>
    );
};

export default App;

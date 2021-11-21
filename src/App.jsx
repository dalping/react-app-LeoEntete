import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import ShopInfo from './components/ShopInfo/ShopInfo';
import CartPage from './components/views/CartPage/CartPage';
import DetailPage from './components/views/DetailPage/DetailPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import MainPage from './components/views/MainPage/MainPage';
import MyPage from './components/views/MyPage/MyPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/detail/:id" element={<DetailPage/>}/>
                    <Route path="/mypage" element={<MyPage />}/>
                    <Route path="/login" component={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
                <ShopInfo/>
            </div>
        </BrowserRouter>
    );
};

export default App;

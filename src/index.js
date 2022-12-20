import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MakeupProvider} from "./Hooks/MakeupAPI";
import {ProfileProvider} from "./Hooks/Profile";
import {AuthProvider} from "./Hooks/Auth";
import {ProductProvider} from "./Hooks/Product";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ProductProvider>
            <AuthProvider>
                <ProfileProvider>
                    <MakeupProvider>
                        <App/>
                    </MakeupProvider>
                </ProfileProvider>
            </AuthProvider>
        </ProductProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

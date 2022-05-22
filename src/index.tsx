import React from 'react';
import { App } from './app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './infrastructure/store/store';
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
if (!container) {
    throw new Error("The element #portal wasn't found");
}
const root = createRoot(container)!;
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
);

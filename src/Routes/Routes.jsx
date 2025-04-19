import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/Root/ErrorPage';
import Home from '../pages/home/Home';
import BookDetails from '../pages/bookDetails/BookDetails';
import ListedBooks from '../pages/listedBook/ListedBooks';
import ReadBooks from '../pages/listedBook/ReadBooks';
import WishList from '../pages/listedBook/WishList';
 
export  const router = createBrowserRouter([
   {
    path: '/', 
    Component: Root,
    children: [
        {
            index: true,
            path:'/',
            Component: Home
        },
        {
            path: '/listedBooks', 
            Component:ListedBooks,
            loader: () => fetch('booksData.json'),
            children: [
                {
                    path: '/listedBooks/readBooks',
                    Component: ReadBooks
                },
                {
                    path: '/listedBooks/wishListBooks',
                    Component: WishList
                }
            ]
        },
        {
            path: '/bookDetails/:id',
            loader: () => fetch('booksData.json'),
            Component: BookDetails
        },
        
    ]
   }, 
   {
        path: '*',
        errorElement: <ErrorPage/>,
   }
])
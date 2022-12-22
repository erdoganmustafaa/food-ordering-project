import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import Layout from "../layout/Layout";
import {SessionProvider} from "next-auth/react"

import { Provider } from "react-redux";
import store from "../redux/store";

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css"

Router.events.on("routeChangeStart",()=>nProgress.start())
Router.events.on("routeChangeComplete",()=>nProgress.done())
Router.events.on("routeChangeError",()=>nProgress.done())

function MyApp({ Component, pageProps:{session,...pageProps} }) {
  return (
  <SessionProvider session={session}>
  <Provider store={store}>
  <Layout>
    <ToastContainer/>
    <Component {...pageProps} />
  </Layout>
  </Provider>
  </SessionProvider>
  )
}

export default MyApp

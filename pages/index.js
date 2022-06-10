import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


import styles from '../styles/Home.module.css'

export default function Home() {

  const router = useRouter();
  const [isAuth,setAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if(isAuth){
      alert("hello");
    }else{
      router.push("/sign-in");
    }

  },[]);


  return (
    <div className={styles.container}>
      <Head>
        <title>PMS</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to PMS
        </h1>
      </main>
    </div>
  );
}

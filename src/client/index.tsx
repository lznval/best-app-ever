import {useEffect} from 'react'
import './styles/main.scss';
import { Header } from './components/Header';

export const Main = () => {

  const getProcuts = async () => {
    try {
      await fetch('http://localhost:3005/products')
      .then(res => res.json())
      .then(data => console.log(data))
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getProcuts()

  }, []);

  return (
    <>
      <Header />
    </>
  )
}

import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';
//import { getProducts } from '../../data/asyncMock';
import { collection, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

  const { categoryId } = useParams()

  const [items, setItems] = useState() //State donde grabo los items
  const [load, setLoad] = useState(true) //Flag que me permite mostrar un spinner mientras cargo los datos 

  const getData = async (categoria) => {
    setLoad(true)
    const querydb = getFirestore();
    const queryCollection = categoria ? query(collection(querydb, 'Items'), where("category", "==", categoria), limit(2))
      : collection(querydb, 'Items');
    const resultado = await getDocs(queryCollection)
    const datos = resultado.docs.map(p => ({ id: p.id, ...p.data() }))
    setItems(datos)
    setLoad(false)
  }

  useEffect(() => {
    getData(categoryId)
  }, [categoryId])



  return (
    <>
      {load ? <Spinner /> : <ItemList data={items} />}
    </>
  );
};

export default ItemListContainer;

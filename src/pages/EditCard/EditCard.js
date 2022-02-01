/* eslint-disable eqeqeq */
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button } from "../../components/Button/Buttons"
import { cards } from "../../DB/DB"

import classes from './EditCard.module.scss'

export const EditCard = () => {

   const [value, setValue] = useState({
      title:'',
      content:''
   })

   const [card, setCard] = useState({
      title:'',
      content:''
   })

   const navigate = useNavigate()

   const {id, title} = useParams()

   function deleteCard(){
      cards.splice(id, 1)
      navigate('/')
   }

   function editCard(){
      const card = cards.find(item => item.title == title)
      card.title = value.title.trim()
      card.content = value.content.trim()
      navigate('/')
   }

   useEffect(() =>{
      const thisCard = cards.find(item => item.title == title)
      setCard({
         title:thisCard.title,
         content: thisCard.content
      })
   }, [])

   return(
     <div className={classes.wrapper}>
        <input 
        placeholder={card.title} 
        value={value.title} 
        onChange={event => setValue(
           {
            ...value,
            title: event.target.value
           }
           )} />

        <textarea 
        placeholder={card.content} 
        value={value.content} 
        onChange={event => setValue(
           {
            ...value,
            content: event.target.value
           }
           )}
        ></textarea>
        <div className={classes.buttons}>
         <Button text='Удалить' onClick={deleteCard}  />
         <Button text='Сохранить' onClick={editCard} />
        </div>
        <div className={classes.link}>
         <Link to='/'>Назад</Link>
        </div>
     </div>
   )

}
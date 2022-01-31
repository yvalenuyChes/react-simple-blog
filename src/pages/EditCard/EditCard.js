/* eslint-disable eqeqeq */
import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button } from "../../components/Button/Buttons"
import { cards } from "../../DB/DB"

import classes from './EditCard.module.scss'

export const EditCard = () => {

   const [value, setValue] = useState({
      title:'',
      content:''
   })

   const navigate = useNavigate()

   const {id} = useParams()

   function deleteCard(){
      cards.splice(id, 1)
      navigate('/')
   }

   function editCard(){
      const card = cards.find(item => item.id == id)
      card.title = value.title.trim()
      card.content = value.content.trim()
      navigate('/')
   }

   return(
     <div className={classes.wrapper}>
        <input 
        placeholder={cards[id].title} 
        value={value.title} 
        onChange={event => setValue(
           {
            ...value,
            title: event.target.value
           }
           )} />

        <textarea 
        placeholder={cards[id].content} 
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
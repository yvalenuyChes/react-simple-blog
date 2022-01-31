import { useState } from "react"
import { Button } from "../Button/Buttons"
import {cards} from '../../DB/DB'

import classes from './PopupAddCard.module.scss'
import { useDispatch } from "react-redux"

export const PopupAddCard = () =>{
   const dispatch = useDispatch()

   const [value, setValue] = useState({
      title:'',
      content:''
   })


   function createNewCard(){
      cards.push({
         title:value.title,
         content: value.content,
         id:cards.length
      })
      dispatch({type:'CLOSE_POPUP'})
      
   }

   function closePopup(){
      dispatch({type:'CLOSE_POPUP'})
   }

   return(
      <div className={classes.modal_window}>
         <input 
         placeholder="title" 
         value={value.title} 
         onChange={event => setValue(
            {
               ...value,
               title:event.target.value
            }
          )} 

         />
         <textarea 
         placeholder="Content" 
         value={value.content} 
         onChange={event => setValue(
            {
               ...value,
               content:event.target.value
            }
          )} 
         ></textarea>
         <div className={classes.modal_window__buttons}>
            <Button text='Отмена' onClick={closePopup} />
            <Button text='Сохранить' onClick={createNewCard} />
         </div>
      </div>
   )
}
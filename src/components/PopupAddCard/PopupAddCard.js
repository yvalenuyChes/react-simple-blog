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
         content: `${value.content}`,
         id:((cards.length + 1) * Math.floor( (Math.random() * 100) + (Math.random() * 100) )) 
      })
      dispatch({type:'CLOSE_POPUP'})
      
   }

   function closePopup(){
      dispatch({type:'CLOSE_POPUP'})
   }

   return(
      <div className={classes.modal_window}>
         <input 
         placeholder="Заголовок" 
         value={value.title} 
         onChange={event => setValue(
            {
               ...value,
               title:event.target.value
            }
          )} 

         />
         <p>(Переносите текст вручную с помощью Enter)</p>
         <textarea 
         placeholder="Контент" 
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
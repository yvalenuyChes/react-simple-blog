/* eslint-disable eqeqeq */
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button } from "../../components/Button/Buttons"
import { cards } from "../../DB/DB"

import classes from './EditCard.module.scss'

export const EditCard = () => {

   const [state, setState] = useState({
      warning: false
   })

   const [value, setValue] = useState({
      title:'',
      content:''
   })

   const [card, setCard] = useState({
      title:'',
      content:''
   })

   const navigate = useNavigate()

   const {id} = useParams()

   function deleteCard(){
      const index = cards.findIndex(card => card.id == id )
      cards.splice(index, 1)
      navigate('/')
   }


   function editCard(){
      const currentCard = cards.find(card => card.id == id)
      currentCard.title = value.title.trim()
      currentCard.content = value.content.trim()
      navigate('/')
   }

   useEffect(() =>{
      const currentCard = cards.find(card => card.id == id)
      setCard({
         title:currentCard.title,
         content: currentCard.content
      })
   }, [])

   return(
     <div className={classes.wrapper}>
     <div className={classes.edit_card_block}>
     <h2>Заголовок: <br/>
         <span>{card.title}</span>
      </h2>
      <input 
         placeholder={card.title} 
         value={value.title} 
         onChange={event => setValue(
            {
               ...value,
               title: event.target.value
            }
            )} />
         <h2>Текст: <br/>
         <span> {card.content}</span>
         </h2>
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
            <Button text='Удалить' onClick={() => setState({...state, warning:true})} warning='true' />
            <Button text='Сохранить' onClick={editCard} />
         </div>
         <div className={classes.link}>
            <Link to='/'>Назад</Link>
         </div>
     </div>
       
        {
           state.warning
           ? <div className={classes.warning}>
              <h2 className={classes.warning__title}>Вы действительно хотите удалить запись?</h2>
              <div className={classes.warning__buttons}>
               <Button text='Отмена' onClick={() => setState({...state, warning:false})}  />
               <Button text='Да' onClick={deleteCard} warning='true'  />
              </div>
           </div>
           : null
        }
     </div>
   )

}
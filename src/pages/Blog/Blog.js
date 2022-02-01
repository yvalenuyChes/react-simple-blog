import { useDispatch, useSelector } from "react-redux"
import { Button } from '../../components/Button/Buttons'
import { Card } from '../../components/Card/Card'
import { PopupAddCard } from '../../components/PopupAddCard/PopupAddCard'
import { cards } from '../../DB/DB'
import classes from './Blog.module.scss'

export const Blog = () => {

   const popupState = useSelector(state => state.blogReducer.PopupWindowState)
   const dispatch = useDispatch()
   
   function openModal(){
   dispatch({type:'OPEN_POPUP'})
   }

   return(
      <div className={classes.blog__container}>
         <h2 className={classes.blog__title}>Блог</h2>
         <div className={classes.blog__card_wrapper}>
         <ul className={classes.card__list}>
         {
            cards.map((card, i) => {
                  return(
                     <li key={i} >
                     <Card
                        title={card.title}
                        content={card.content}
                        id = {card.id}
                     />
                     </li>
                  )
               })
            }
         </ul>
         </div>
         <div className={classes.blog__button}>
            <Button text='Добавить' onClick={ openModal} />
         </div>
         {popupState ? <PopupAddCard/> : null}
      </div>
   )
}
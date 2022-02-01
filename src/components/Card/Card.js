import { Link } from 'react-router-dom'
import classes from './Card.module.scss'


export const Card = ({title, content, id}) =>{
   return(
      <div className={classes.card}>
         <h2 className={classes.card__title}>{title}</h2>
         <div className={classes.card__content}>
            {content}
         </div>
         <div className={classes.card__link}>
            <Link
               key={id} 
               to={`/editing/${title}`}
            >перейти</Link>
         </div>
         
      </div>
   )
   
}
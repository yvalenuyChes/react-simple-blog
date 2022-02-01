import classes from  './Button.module.scss'

export const Button = ({text, onClick, warning}) => {
   return(
      <div className={classes.button__wrapper}>
         <button type='button' onClick={onClick} style={  warning ? { 'background':'red' } : null} >{text}</button>
      </div>
   )
}
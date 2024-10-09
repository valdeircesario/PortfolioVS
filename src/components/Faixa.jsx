import Styles from './Faixa.module.css'

function Faixa(){
    return(
       
<div className={Styles.loader}>
  <div className={Styles.light}></div>
  <div className={`${Styles.black} ${Styles.overlay}`}></div>
</div>


    )
}
export default Faixa
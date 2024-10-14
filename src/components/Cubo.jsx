
import Styles from "./Cubo.module.css"

function Cubo(){
    return(
        
<div className={Styles.cubocontener}>
  <div className={Styles.cubo}>
    <div className={Styles.frente}>Hello World!
        
    </div>
    <div className={Styles.back}>Developer!
    </div>

    <div className={Styles.right}>DevOps!</div>
    <div className={Styles.left}>full-stack!</div>
    <div className={Styles.top}>Soft_Skills
    </div>
    
    <div className={Styles.bottom}>Valdeir</div>
  </div>
</div>

    )
}
export default Cubo
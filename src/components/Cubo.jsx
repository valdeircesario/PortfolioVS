
import Styles from "./Cubo.module.css"

function Cubo(){
    return(
        
<div className={Styles.cubocontener}>
  <div className={Styles.cubo}>
    <div className={Styles.frente}>Hello World!
        
    </div>
    <div className={Styles.back}>Desenvolvimento!
        
        
    </div>
    <div className={Styles.right}>DevOps!
       
    </div>
    <div className={Styles.left}>full-stack!
        
    </div>
    <div className={Styles.top}>valdeir
        
    </div>
    <div className={Styles.bottom}>Soft Skills
        
    </div>
  </div>
</div>

    )
}
export default Cubo
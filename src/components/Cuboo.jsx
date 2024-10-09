import Styles from './Cuboo.module.css';

function Dado() {
    return (
        <div className={Styles.cube}>
            <div className={`${Styles.face} ${Styles.front}`}>
                
            </div>
            <div className={`${Styles.face} ${Styles.back}`}></div>
            <div className={`${Styles.face} ${Styles.right}`}></div>
            <div className={`${Styles.face} ${Styles.left}`}></div>
            <div className={`${Styles.face} ${Styles.top}`}></div>
            <div className={`${Styles.face} ${Styles.bottom}`}></div>
        </div>
    );
}

export default Dado;
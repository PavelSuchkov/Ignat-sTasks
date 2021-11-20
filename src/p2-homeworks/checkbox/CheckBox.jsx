import style from "style.css"


export const CheckBox = () => {

    return <div className={style.checkBoxBlock}>
        <input type='checkbox' className={style.check} id='checkbox'
               name='agreement'
        />
        <span className={style.styledCheck}/>
        <span className={style.checkDescription}>
              I agree to the
                  <a href='#someLink'> Privacy Policy</a>
            </span>
    </div>
}

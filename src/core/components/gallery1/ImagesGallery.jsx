import a from '../../../../../assets/corvete/a.jpeg';
import b from '../../../../../assets/ram/f.jpeg';
import d from '../../../../../assets/mustang/f.jpeg';
import c from '../../../../../assets/corolla/g.jpeg';
import e from '../../../../../assets/silverado/b.jpeg';
import f from '../../../../../assets/mustag gris/d.jpeg';


import './Styles.css'

export const ImagesGalery = () => {
  return (
    <div className='container'>
        <section>
        <img
            
            src={a}
            alt="First slide"
          />
        <img
            
            src={b}
            alt="First slide"
          />
       <img
            
            src={c}
            alt="First slide"
          />
      <img
            
            src={d}
            alt="First slide"
          />
      <img
            
            src={e}
            alt="First slide"
          />
      <img
            
            src={f}
            alt="First slide"
          />
      
        </section>
    </div>
  )
}

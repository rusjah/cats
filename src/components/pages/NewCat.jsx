import React from 'react'
import { useNavigate } from 'react-router-dom';

function NewCat({setCats}) {
    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();
        const cat = {
            id: Math.floor(Math.random() * 10000),
            name: e.target.name.value,
            url: e.target.url.value,
            description: e.target.descript.value,
            height: `${e.target.hfrom.value} to ${e.target.hto.value} inches`,
            weight: `${e.target.wfrom.value} to ${e.target.wto.value} pounds`,
            coat: e.target.coat.value,
            life: `${e.target.lfrom.value} to ${e.target.lto.value} years`
        }
        setCats(i=>[cat,...i])
        navigate('/cats')
    }
  return (
    <div className='addNewCat'>
        <h2>Add information about cat</h2>
        <form action="" onSubmit={submitHandler}>
            <input type="text" name='name' placeholder='Name'/>
            <input type="url" name="url" id="" placeholder='Url of picture' />
            <fieldset className='heigtInput'>
                <legend>Height (in inches):</legend>
                <input type="number" name='hfrom' id='hfrom' placeholder='from'/>
                <input type="number" name='hto' id='hto' placeholder='to' />
            </fieldset>
            <fieldset className='weightInput'>
                <legend>Weight (in pounds):</legend>
                <input type="number" name='wfrom' id='wfrom'placeholder='from' />
                <input type="number" name='wto' id='wto' placeholder='to' />
            </fieldset>
            <fieldset className='lifeInput'>
                <legend>Life Expectancy:</legend>
                <input type="number" name='lfrom' id='lfrom'placeholder='from' />
                <input type="number" name='lto' id='lto' placeholder='to' />
            </fieldset>
            <textarea name="coat" id="coat" cols="30" rows="5" placeholder='Coat'></textarea>
            <textarea name="descript" id="descript" cols="30" rows="10" placeholder='Description'></textarea>
            <button type='submit' className='submitBtn'>Add</button>
        </form>
    </div>
  )
}

export default NewCat
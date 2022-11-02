import React from 'react';
import { Link } from 'react-router-dom';

const Entry = () => {
  // Onchange helper function that calls a fetch post request. This will be async
  // const [formData, setFormData] = useState({});

  // const onChange = (e) => {};

  return (
    <section className='entry entry-page'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='large'>Entry</h1>
          <p className='lead'>Enter your hair style preferences here</p>
          <form
            className='form'
            onSubmit={() => {
              fetch('/data', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              }).then((response) => response.json());
            }}
          >
            {/* Username */}
            <div className='form-group'>
              <textarea
                placeholder='What is your name/username?'
                name='username'
              ></textarea>
            </div>
            {/* Headshot */}
            <div className='form-group'>
              <textarea
                placeholder='This is where your headshot will go'
                name='headshot'
              ></textarea>
            </div>
            {/* Top of the Head Length */}
            <div className='form-group'>
              {/* <p className='lead'>
                Top of the Head Length
              </p> */}
              <select name='First'>
                <option value='question'>* Top of the Head Length</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>
            {/* Side of the head length */}
            <div className='form-group'>
              {/* <p className='lead'>
                Side of the Head Length
              </p> */}
              <select name='Second'>
                <option value='question'>* Side of the Head Length</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>
            {/* Fade */}
            <div className='form-group'>
              {/* <p className='lead'>Fade?</p> */}
              <select name='Third'>
                <option value='question'>* Fade?</option>
                <option value='true'>Yes</option>
                <option value='false'>No</option>
              </select>
            </div>
            {/* Hair style shape */}
            <div className='form-group'>
              {/* <p className='lead'>Hair Style Shape</p> */}
              <select name='Fourth'>
                <option value='question'>* Hair Style Shape</option>
                <option value='square'>Square</option>
                <option value='rounded'>Rounded</option>
              </select>
            </div>
            {/* Texture */}
            <div className='form-group'>
              {/* <p className='lead'>
                Fifth Selection Box
              </p> */}
              <select name='Fifth'>
                <option value='question'>* Texture</option>
                <option value='uneven'>Uneven</option>
                <option value='choppy'>Choppy</option>
                <option value='layered'>Layered</option>
                <option value='razored'>Razered</option>
                <option value='thinned'>Thinned</option>
              </select>
            </div>
            {/* Side Burns */}
            <div className='form-group'>
              {/* <p className='lead'>
                Fifth Selection Box
              </p> */}
              <select name='Six'>
                <option value='question'>* Sideburns</option>
                <option value='true'>Yes</option>
                <option value='false'>No</option>
              </select>
            </div>
            <div className='form-group'>
              <textarea placeholder='AI Url' name='aiurl'></textarea>
            </div>
            <input
              type='submit'
              className='btn btn-primary my-1'
              value='Submit'
            />
            <Link to='/' className='btn btn-primary2'>
              Back
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Entry;

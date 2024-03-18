/* eslint-disable react/prop-types */
const Card = ({ cart, handleButton, ready }) => {
    console.log(ready);
    const calcTotalMinutes = ready.reduce(
      (acc, curr) => acc + Number(curr.preparing_time),
      0
    );
    const calcTotalCalories = ready.reduce(
      (acc, curr) => acc + parseFloat(curr.calories),
      0
    );
    return (
        <div className='h-96'>
        <h1 className='text-center mb-3'>Want to cook: {cart.length}</h1>
        <hr />
  
        <div>
          <table>
            <tr>
              <td className='pl-7'>Name</td>
              <td className='pl-7'>Time</td>
              <td className='pl-7'>Calories</td>
            </tr>
            <hr className='my-5' />
            {cart.map((s, index) => (
              <tr key={index} className='bg-slate-200'>
                <p className='pl-2'>{index + 1}</p>
                <td>{s.recipe_name}</td>
                <td>{s.preparing_time}</td>
                <td>{s.calories}</td>
                <button
                  onClick={() => handleButton(s)}
                  className='py-5 px-4 mr-1 bg-[#0BE58A] rounded-full'
                >
                  Preparing
                </button>
              </tr>
            ))}
          </table>
  
        </div>
  
        <div>
          <div className='divider'></div>
          <h1 className='text-center mb-3'>
            Currently cooking: {ready.length}
         
          </h1>
          <div className='divider'></div>
        </div>
        <div>
          <table>
            <tr>
              <td className='pl-7'>Name</td>
              <td className='pl-7'>Time</td>
              <td className='pl-7'>Calories</td>
            </tr>
            <hr className='my-5' />
            {ready.map((s, index) => (
              <tr key={index} className='bg-slate-200'>
                <p className='pl-2'>{index + 1}</p>
                <td>{s.recipe_name}</td>
                <td>{s.preparing_time}</td>
                <td>{s.calories}</td>
              </tr>
            ))}
          </table>
  
          <ul>
            <li>Total minutes: {calcTotalMinutes}</li>
            <li>Total calories: {calcTotalCalories}</li>
          </ul>
        </div>
      </div>
    );
};

export default Card;
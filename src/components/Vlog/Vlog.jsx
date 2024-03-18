/* eslint-disable react/prop-types */
import Home from "../../assets/images/Fire.png"
import Home2 from "../../assets/images/Time.png"

const Vlog = ({ vlog, cookButton}) => {
    const {
        recipe_name,
        short_description,
        recipe_image,
        preparing_time,
        calories,
        ingredients,
      } = vlog
    return (
            <div>
            <div className="card w-96 bg-base-100 shadow-xl border-[#878787] border-2">
      <figure>
        <img
          className="w-[331px] h-[200px] rounded-2xl mt-6"
          src={recipe_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#282828] font-semibold">
          {recipe_name}
        </h2>
        <p className="text-[#878787] mb-4">{short_description}</p>
        <hr />
        <div>
          <h1 className="text-[#282828] font-medium text-xl mb-4 mt-4">Ingredients : {ingredients.length}</h1>
    
       <div>
            {
                ingredients.map((ingredient, index) => <li key={index}> {ingredient}</li>)
            }
          {/* </li> */}
       </div>
          

        </div>

        <hr />
        <div className="grid grid-cols-2 my-7">
          <div className="flex gap-2">
            <img src={Home2} alt="" />
            <p>{preparing_time} min</p>
          </div>

          <div className="flex gap-2">
            <img src={Home} alt="" />
            <p>{calories}</p>
          </div>
        </div>

        <div className="card-actions">
          <button className="btn rounded-full bg-[#0BE58A] text-[#150B2B]" onClick={() => cookButton(vlog)}>
            Want to Cook
          </button>
        </div>
      </div>
    </div>
          
        </div>
    );
};

export default Vlog;
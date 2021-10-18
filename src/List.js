import React from "react";
const List = ({people}) =>{
    return(
        <>
        {people.map((people)=>{
            const { name, age, image} = people;
            return <div className="person">
                    <im scr={image} alt={name}/>
                    <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                    </div>
            </div>
           
        })}
        </>
    );
};

export default List;

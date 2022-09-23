export const List = ({persons}) => {
  
  
    const listOfPersons = (persons.length == 0) 
      ? <p className="no-contacts">(No persons to display)</p>
      : <ul>
       
        </ul>;
     
          return (
              <div>
           <div className="contact-list-container">
              <h2>Contact List</h2>
              {listOfPersons}
          </div>
        <table class="table" style={{border: "1px"}}>
          <thead>
            <tr >
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Nationality</th>
                <th>eMail</th>
            </tr>
          {persons.map((person,id) => (
              
            <tr key={id}>        
              <th style={{fontWeight: "normal", fontSize: 25}}> {person.name}</th>
              <th style={{fontWeight: "normal", fontSize: 25}}> {person.lastname}</th>
              <th style={{fontWeight: "normal", fontSize: 25}}> {person.age}</th>
              <th style={{fontWeight: "normal", fontSize: 25}}> {person.nationality}</th>
              <th style={{fontWeight: "normal", fontSize: 25}}> {person.email}</th>     
            </tr>
            
             ))}
             
           </thead>
          </table>
                
              </div>
            );
        }
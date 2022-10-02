import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';


export const List = ({people}) => {
  
  
 
 if(people.length == 0){
    return (
      <div className='container'>
        <Navigation/>
        <div>
          <h2>List of people</h2>
        </div>
        <p>No results found</p>
      </div>
    )  
 } 
 else{
        return (
         
            <div className='container'>
              <Navigation/>
              <div>
                <h2>List of people</h2>
            </div>
          

            
      <table class="table">
        <thead>
          <tr >
              <th>First name</th>
              <th>Last name</th>
              <th>Age</th>
              <th>Nationality</th>
              <th>E-Mail</th>
          </tr>
        {people.map((person,id) => (
            
          <tr key={id}>        
            <th> {person.firstName}</th>
            <th> {person.lastName}</th>
            <th> {person.age}</th>
            <th> {person.nationality}</th>
            <th> {person.mailAddress}</th>     
          </tr>
          
           )
          )
        }
           
         </thead>
        </table>

              
            </div>
          );
      }
    }
     
import React from 'react'
import './ThingsLearnt.css'
import { thingsLearnt } from './data'
import SearchComponent from '../../components/SearchComponent/SearchComponent'
import { useAppContext } from '../../contexts/AppContext'
const ThingsLearnt = () => {
  const {searchResults} = useAppContext()

    return (
      <>
         <SearchComponent data = {thingsLearnt} />
         <>
         <h2 class="things-I-learnt">Things I Learnt while building this project  </h2>
         </>
        
     
     
        
         <div class="flex-container">
           
             {searchResults ? 
             searchResults?.map((result)=> {
               return <p key={result.id} class="purpose_of_project">{result.text}</p>

             }
                 ) : null}
               
                 {searchResults.length < 1 && <h1>No results</h1>}
                 </div> 
     
          
            {/* <SearchComponent data={thingsLearnt} /> */}
               {/* <p class="purpose_of_project">This main purpose of this project was to understand how to make a responsive dashboard-kind layout. 
                 This is just a dummy layout and the links are not functional.</p>
                 <p class="purpose_of_project">I learnt how to make a sideopening navbar when the screen size is at max 768px(small)</p>
                 <p class="purpose_of_project">I have extensively used flexbox throught out this very project. Actually, [this] layout uses flex-wrap to show these paragraphs in different rows.</p>
                 <p class="purpose_of_project">I also learnt how to use view-height property along with position:fixed (to create the sidebar)</p>
                 <p class="purpose_of_project">I also learnt how to create responsive text with clamp property</p>
                 <p class="purpose_of_project">I learnt how important it is to organise css different files to keep my code clean</p>
                 <p class="purpose_of_project">This paragraph uses <code style={{color:"red",textTransform:'uppercase'}}>nth-child(2n+1):last-child</code> rule so that the odd numbered paragraph has text-align:center. I did this so that my layout looks uniform. ^_^</p> */}
          
         </>
       )
  

  
}

export default ThingsLearnt
import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import {Markup} from 'interweave';


class SearchResultComponent extends React.Component
{
  constructor(props)
  {
    super(props);
  }


  render()
  {
    return(
        // <div>
        //     <h2>Search Results</h2>
        //     <ul>
        //         this.props.results.map(
        //             result => {
        //                 <li>
        //                     <h4>result.title</h4>
        //                     <br/>
        //                     result.snippet  
        //                 </li>
        //             }
        //         );
        //     </ul>
        // </div>

        <div>
            {console.log(this.props.location)}
             <ul>
                {this.props.location.searchResults && this.props.location.searchResults.query.search.map(
                   (result) => {
                     return(
                        <li>
                          {result.title}
      
                          <Markup content={result.snippet} />
                          <br/>
                        </li>
                     )  
                   }
                )}
            </ul> 
        </div>
    )

  }

}
export default withRouter(SearchResultComponent)




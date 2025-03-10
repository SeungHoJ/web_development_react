

import axios from "axios"
import {  useQuery } from "@tanstack/react-query"

function Repositories () {
  const getRepositories = async () => {
    const resp = await axios.get('https://api.github.com/search/repositories?q=react');
    return resp.data.items;
  }

  const {isLoading, isError, data } = useQuery({
    queryKey : ['repositories'],
    queryFn : getRepositories,
    staleTime : 60 * 1000,

    
  })
  if(isLoading){
    return <p>로딩 중 ...</p>
  }
  else if(isError){
    return <p>오류 발생했습니다</p>
  }else{
    return(
    <table>
      <tbody>
        {data.map(repo =>
          <tr key={repo.id}>
            <td>
              {repo.full_name}
            </td>
            <td>
              <a href={repo.html_url}>{repo.html_url}</a>
            </td>
          </tr>
        )}
      </tbody>
    </table>
)
    
  }
  
  
}

export default Repositories
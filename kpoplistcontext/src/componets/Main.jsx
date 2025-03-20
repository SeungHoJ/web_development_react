import Button from "./Button"
import KpopList from "./KpopList"

function Main(){
  return(
    <main>
      <Button>레드벨벳 노래 찾기</Button>
      <Button>남자 아티스트 노래 찾기</Button>
      <Button>여자 아티스트 노래 찾기</Button>
      <KpopList />
    </main>
  )
}

export default Main;
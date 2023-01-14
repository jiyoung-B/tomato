import contentUrl from "../../assets/images"


interface IDatas{
    
        user:{id:string,url:any,address:string};
        contents:{title:string,content:string,url:any,price:string,interest:number,chat:number}

}


const datas:IDatas[]=[
    {
        user:{id:"jem",url:contentUrl.user,address:"경기도 용인시 기흥구 보정동"},
        contents:{title:"버버리패딩",content:"",url:contentUrl.babari,price:"120,000원",interest:25,chat:38}
},
{
    user:{id:"순도르형",url:contentUrl.user,address:"대구 달성군 다사읍"},
    contents:{title:"양말가게 접어요 나이키 아디다스 양말 가져가세요",content:"문의주세요",url:contentUrl.socs,price:"9999만 9999원",interest:17,chat:54}
},
{
    user:{id:"당근이쥐",url:contentUrl.user,address:"경기도 성남시 분당구 정자동"},
    contents:{title:"스토케 트립트랩 하이체어",content:`제품무게 7kg\n
    제품크기(WXHXD)46x79x49cm\n
    사용가능연령\n
    0~6개월(최대9kg)-신생아세트와반드시함께사용\n
    0~36개월-베이비세트와반드시함께사용\n
    36개월이상-의자단독사용가능\n
    \n
    최대사용체중 136kg`,url:contentUrl.chair,price:"50,000원",interest:9,chat:33}
},
{
    user:{id:"얼음조금우유많이",url:contentUrl.user,address:"세종시 어진동"},
    contents:{title:"셀렌느 트리오페 미니 베사체",content:`홍콩에서 산 셀린느 트리오페 미니 베사체 입니다\n
    생각보다 작아서 내놓게 되었습니다~\n
    박스 쇼핑백 더스트백 다 있습니다\n
    실착용1회밖에 안됩니다ㅠ\n
    중고거래이니 반품은 안되고 택배나 문고리 가능합니다!`,url:contentUrl.bag,price:"300,000원",interest:34,chat:39}
},
]

export default datas
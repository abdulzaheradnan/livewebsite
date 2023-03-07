import {useEffect, useState} from "react"
export default function Page() {

    const [page,setpage]=useState(4)
const [products,setproducts]=useState([])
  const url='https://dummyjson.com/products?limit=50';
const fecthdata=async(ulink)=>{

  const res=await fetch(ulink);

  const data= await res.json();
  console.log(data.products);
  setproducts(data.products)

}
useEffect(()=>{
  fecthdata(url)
})
function handleclick(de){
    setpage(de)

}
  console.log("adnan")
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="pagclick">
        <span onClick={()=>{setpage(page - 1)}} className={page > 1? "" :"paginatio_opacity"}>◀</span>
        {[...Array(products.length / 10)].map((_,i)=>{
            return <span onClick={()=>{handleclick(i+1)}}>{i+1}</span>
            
        })}
        <span onClick={()=>{setpage(page + 1)}} className={page< products.length / 10 ? "" : "paginatio_opacity"}>▶</span>


      </div>
      <div>{products.slice(page*10-10,page*10).map((item)=>{
        return (<div className="productpage">
          <div>{item.title}</div>
          <img src={item.thumbnail} alt={item.title} className="imagecontainer"/>
        </div>)
      })}</div>
    
    </div>
  );
}

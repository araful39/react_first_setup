function Home() {
let home="Home";
let page="Page";

let name="Md Araful Islam";

const cars = ["Saab", "Volvo", "BMW"];
  return <>
     

     <h1>
Arra is {cars.map((e,i)=>(<span key={i}>{e},</span>))}
     </h1>
  <h2>🏠 My Name is {name}</h2>
  <h2>🏠 Welcome to the {home} {page}</h2>
  </>
}
export default Home;

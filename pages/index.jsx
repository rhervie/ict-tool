
export default function Home() {
  return (
    <>
     <h1></h1>
    </>
  )
}
export async function getServerSideProps(context) {
  
  return {
   redirect: {
    permanent:false,
    destination:'/forms/first'
  }, // will be passed to the page component as props
  props:{},
  }
}

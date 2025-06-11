import data from './mock/info'
import Main from './components/mainBody'


export default function App() {
  const setData = data.map((value) => {
    return <Main
      image={value.Image}
      location={value.Location}
      titles={value.Title}
      checkIn={value.CheckIn}
      checkOut={value.CheckOut}
      address={value.MapLink}
      description={value.Description}
    />
  })



  return (
  <main>
    {setData}
    {/* {console.log(setData)} */}
  </main>
  );
}
import OrderForm from "./OrderForm";

export default function App() {
  return (
    <>
      <OrderForm />
    </>
  );
}

//  <Parent>
//    {(value) => {
//      console.log(value);
//      return (
//        <>
//          <div>Hello {value}</div>
//          <p>wjgiwgowog</p>
//        </>
//      );
//    }}
//  </Parent>;

// function Parent({ children }) {
//   const innerData = 5;
//   return <section>{children(innerData)}</section>;
// }

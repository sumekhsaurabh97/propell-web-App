import { cardShadow } from "../global-css/global-css"

const pageStyle = 'flex flex-col items-center relative p-[16px] w-full h-[100vh]'
const fixedBottom = 'fixed bottom-0 w-full'
const fixedBottomWithPadding = 'absolute fixed bottom-[16px] left-[16px] right-[16px]'


function Responsive({ children }) {
  return (
    <div className='flex justify-center items-center bg-cover bg-center w-screen'
    // style={{
    //   backgroundImage: `url(${})`
    // }}
    >
      <div className={`${cardShadow}  w-screen max-w-[768px] bg-white`}>
        {children}
      </div>
    </div>
  )
}


export {
  pageStyle,
  fixedBottom,
  fixedBottomWithPadding,
  Responsive,
}
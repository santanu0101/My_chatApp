import React from 'react'
import useConversation from '../../statemanage/useConversation.js'

function Chatuser() {
  const {selectedConversation}= useConversation();
  // console.log(selectedConversation);
  
  return (
    <>
     <div className='pl-5 pt-5 pb-3 h-[12vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300'>
     <div>
      <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://yt3.googleusercontent.com/39UF-aSJO01Dx53gXtCJq3RAnLiNCmu_CRpJkOZAr_PL9OwmNh-rqfegd6sYlAlBAh4nEfRn8sA=s900-c-k-c0x00ffffff-no-rj" />
          </div>
        </div>
      </div>

      <div>
      {selectedConversation && (
            <>
              <h1 className="text-xl">{selectedConversation.name}</h1>
              {/* <h1 className="text-xl">san</h1> */}
              <span className='text-sm'>Online</span>
            </>
          )}
        </div>
     </div>
    </>
  )
}

export default Chatuser